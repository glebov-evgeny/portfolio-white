<template>
  <section class="s-authorization">
    <div class="s-authorization__container l-wide">
      <m-form-login v-if="currenForm === 'login'" @form-btn-click="togglePopupForm" />
      <m-form-registration v-if="currenForm === 'registration'" @form-btn-click="togglePopupForm" />
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
@import './s-authorization.scss';
</style>
