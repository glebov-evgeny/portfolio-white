<template>
  <m-form-login v-if="currenForm === 'login'" @form-btn-click="togglePopupForm" @on-send="onSend" />
  <m-form-registration v-if="currenForm === 'registration'" @form-btn-click="togglePopupForm" @on-send="onSend" />
</template>

<script setup>
let currenForm = ref('login');
const emit = defineEmits(['onSend']);

const onSend = () => {
  emit('onSend');
};

const togglePopupForm = (formType) => {
  currenForm.value = formType;
};
</script>
