<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-auth">
    <div class="container s-auth__container container__box">
      <div class="s-auth__aside container__aside">
        <h2 class="s-auth__title s-title">{{ currenForm === 'login' ? $t('login') : $t('registration') }}</h2>
      </div>
      <div class="s-auth__main container__main">
        <m-form-login v-if="currenForm === 'login'" @form-btn-click="togglePopupForm" />
        <m-form-registration v-if="currenForm === 'registration'" @form-btn-click="togglePopupForm" />
      </div>
    </div>
  </section>
</template>

<script setup>
let currenForm = ref('login');

const togglePopupForm = (formType) => {
  currenForm.value = formType;
};
</script>

<style lang="scss">
@import './s-auth.scss';
</style>
