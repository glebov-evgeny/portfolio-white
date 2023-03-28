<template>
  <m-form
    :title="title"
    :button-text="buttonText"
    :submit-disabled="!validFlag"
    class="m-form-popup"
    @on-submit="sendForm"
  >
    <template #inputs>
      <a-input id="popup-form-name" v-model="fieldsData.name" class="m-form-popup__input" placeholder="Имя" />
      <a-input id="popup-form-phone" v-model="fieldsData.phone" class="m-form-popup__input" placeholder="Телефон" />
      <a-input id="popup-form-email" v-model="fieldsData.email" class="m-form-popup__input" placeholder="Почта" />
    </template>
  </m-form>
</template>

<script setup>
// const { $lander } = useNuxtApp();
// const route = useRoute();
// const emit = defineEmits(['onSend']);

defineProps({
  title: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: '',
  },
});

let fieldsData = reactive({
  name: '',
  email: '',
  phone: '',
});

let errors = reactive({
  name: true,
  email: true,
  phone: true,
});

let validFlag = ref(false);
let validPhone = ref(false);

const checkedValidateError = () => {
  errors.name = /^([A-ZА-ЯЁ][-,a-z, a-яё. ']+[ ]*)+$/i.test(fieldsData.name);
  // errors.email = $lander.valid([{ value: fieldsData.email, type: 'email' }]);
  // errors.phone = validPhone && fieldsData.phone !== '';
  // return errors.name && errors.email && errors.phone;
  return errors.name;
};

// fieldsData = reactive({ ...$lander.storage.load('popupform') });

watch(
  fieldsData,
  () => {
    validFlag.value = checkedValidateError();
  },
  { immediate: true },
);

// const sendForm = () => {
//   if (validFlag) {
//     $lander.storage.save('popupform', fieldsData);
//     $lander
//       .send(
//         fieldsData,
//         {},
//         route.name === 'edu-platform-slug' || route.name === 'edu-platform' ? route.path : undefined,
//       )
//       .then(() => {
//         emit('onSend');
//       });
//   }
// };
</script>

<style lang="scss">
@import './m-form-popup.scss';
</style>
