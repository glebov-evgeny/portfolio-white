<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-userpage">
    <div class="s-userpage__container l-wide">
      <h2 class="s-userpage__title s-title">{{ $t('userpage.title') }}</h2>
      <div class="s-userpage__block">
        <div class="s-userpage__item">
          <p class="s-userpage__item-label">Почта:</p>
          <p class="s-userpage__item-text">{{ user.email }}</p>
        </div>
        <div class="s-userpage__item">
          <p class="s-userpage__item-label">Имя:</p>
          <div class="s-userpage__item-text">
            <span>{{ user.name }}</span>
            <span v-if="!user.name" class="s-userpage__item-correction" @click="changeName">
              {{ showNemeInput ? '(скрыть)' : '(добавить)' }}
            </span>
            <span v-else class="s-userpage__item-correction _margin-left" @click="changeName">
              {{ showNemeInput ? '(скрыть)' : '(редактировать)' }}
            </span>
          </div>
          <div v-if="showNemeInput" class="s-userpage__item-change">
            <a-input id="user-name" v-model="user.nameChoise" class="s-userpage__item-change-input" />
            <button class="s-userpage__item-change-btn" :class="isCorrectName ? '' : 'disabled'" @click="setUserName">
              OK
            </button>
          </div>
        </div>
        <button type="button" class="s-userpage__item-btn">Обновить</button>
      </div>
      <nuxt-link to="/information" class="a-button-back">{{ $t('btnBack') }}</nuxt-link>
    </div>
  </section>
</template>

<script setup>
// const hasName = ref(false);
const showNemeInput = ref(false);

const changeName = () => {
  showNemeInput.value = !showNemeInput.value;
};
const isCorrectName = ref(false);

let user = ref({
  email: 'test@mai.ru',
  name: '',
  nameChoise: '',
});

let errors = reactive({
  name: true,
});

const checkedValidateError = () => {
  errors.name = /^([A-Z,А-Я][-,a-z,а-я']+[ ]*)+$/i.test(user.value.nameChoise);
  return errors.name;
};

const setUserName = () => {
  user.value.name = user.value.nameChoise;
  showNemeInput.value = false;
};

watch(
  user.value,
  () => {
    isCorrectName.value = checkedValidateError();
  },
  { immediate: true },
);
</script>

<style lang="scss">
@import './s-userpage.scss';
</style>
