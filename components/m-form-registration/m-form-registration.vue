<template>
  <section class="section-form">
    <m-form
      :button-text="$t('form.registration')"
      :submit-disabled="!validFlag"
      :error="fbError"
      @on-submit="registerUser"
    >
      <template #inputs>
        <a-input id="popup-form-email" v-model="fieldsData.email" :placeholder="$t('form.email')" />
        <a-input
          id="popup-form-password"
          v-model="fieldsData.password"
          :placeholder="$t('form.password')"
          type="password"
        />
      </template>
    </m-form>
    <p class="m-form__direction">- {{ $t('form.or') }} -</p>
    <a-button class="m-form__change" :label="$t('form.login')" @click="changeForm" />
  </section>
</template>

<script setup>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useUserStore } from '~/store/user';
const currentUser = useUserStore();
const nuxtApp = useNuxtApp();
const router = useRouter();
const userInformation = useCookie('userInformation', {
  default: () => [],
  watch: 'shallow',
});

const emit = defineEmits(['onSend', 'formBtnClick']);

let fieldsData = reactive({
  email: '',
  password: '',
});

let errors = reactive({
  email: true,
  password: true,
});

let validFlag = ref(false);
let fbError = ref('');

const checkedValidateError = () => {
  errors.email =
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      fieldsData.email,
    );
  errors.password = /^([A-Z,0-9][-,a-z,0-9']+[ ]*)+$/i.test(fieldsData.password) && fieldsData.password.length > 5;
  return errors.email && errors.password;
};
watch(
  fieldsData,
  () => {
    validFlag.value = checkedValidateError();
  },
  { immediate: true },
);

const changeForm = () => {
  emit('formBtnClick', 'login');
};

async function registerUser() {
  if (validFlag) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { user } = await createUserWithEmailAndPassword(nuxtApp.$auth, fieldsData.email, fieldsData.password);
      if (router.currentRoute.value.name === 'authorization') {
        router.push({ path: '/presentation' });
      } else {
        router.push({ path: '/information' });
      }
      emit('onSend');
      currentUser.setUser(user.email, user.uid);
      /* устанавливаю куки с почтой и id пользователя на 7 дней */
      const cookieDataUser = { email: user.email, id: user.uid, maxAge: 60 * 60 * 24 * 7, SameSite: Lax };
      userInformation.value = cookieDataUser;
    } catch (error) {
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        fbError.value = 'Пользователь уже зарегистрирован.';
      } else {
        // console.error(`Ошибка: ${error.message}`);
      }
    }
  }
}
</script>
