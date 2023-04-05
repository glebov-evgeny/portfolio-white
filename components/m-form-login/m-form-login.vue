<template>
  <section class="section-form">
    <m-form :button-text="$t('form.login')" :submit-disabled="!validFlag" :error="fbError" @on-submit="loginUser">
      <template #inputs>
        <a-input id="popup-form-email" v-model="fieldsData.email" :placeholder="$t('form.email')" />
        <a-input
          id="popup-form-password"
          v-model="fieldsData.password"
          type="password"
          :placeholder="$t('form.password')"
        />
      </template>
    </m-form>
    <p class="m-form__direction">- {{ $t('form.or') }} -</p>
    <a-button class="m-form__change" :label="$t('form.registration')" @click="changeForm" />
    <a-button class="m-form__google" @click="googleLogin" />
  </section>
</template>

<script setup>
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
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

const changeForm = () => {
  emit('formBtnClick', 'registration');
};

const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      console.log(user.email);
      currentUser.setUser(user.email, user.uid);
      const cookieDataUser = { email: user.email, id: user.uid, maxAge: 60 * 60 * 24 * 7 };
      userInformation.value = cookieDataUser;
      router.push({ path: '/information' });
      emit('onSend');
    })
    .catch((error) => {
      console.log(error);
    });
};

watch(
  fieldsData,
  () => {
    validFlag.value = checkedValidateError();
  },
  { immediate: true },
);

async function loginUser() {
  if (validFlag) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { user } = await signInWithEmailAndPassword(nuxtApp.$auth, fieldsData.email, fieldsData.password);
      router.push({ path: '/information' });
      emit('onSend');
      currentUser.setUser(user.email, user.uid);
      /* устанавливаю куки с почтой и id пользователя на 7 дней */
      const cookieDataUser = { email: user.email, id: user.uid, maxAge: 60 * 60 * 24 * 7 };
      userInformation.value = cookieDataUser;
    } catch (error) {
      // console.log(error.message);
      if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        fbError.value = 'Пользователь уже зарегистрирован.';
      } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
        fbError.value = 'Неверно указан пароль.';
      } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
        fbError.value = 'Пользователь не найден.';
      } else {
        // console.error(`Ошибка: ${error.message}`);
      }
    }
  }
}
</script>
