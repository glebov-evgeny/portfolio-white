<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-contacts">
    <div class="s-contacts-decoration"></div>
    <div class="container s-contacts__container">
      <div class="s-contacts__content">
        <h2 class="s-contacts__title" v-html="$t('contacts.title')"></h2>
        <div class="s-contacts__block">
          <div class="s-contacts__item">
            <p class="s-contacts__item-title">{{ $t('contacts.telegram') }}</p>
            <a href="https://t.me/eaglebov" target="_blank" class="s-contacts__item-link">@eaglebov</a>
          </div>
          <div class="s-contacts__item">
            <p class="s-contacts__item-title">{{ $t('contacts.social') }}</p>
            <a href="https://github.com/glebov-evgeny" target="_blank" class="s-contacts__item-link">GitHub</a>
          </div>
          <div class="s-contacts__item">
            <p class="s-contacts__item-title">{{ $t('contacts.email') }}</p>
            <a href="mailto:eaglebov87@gmail.com" target="_blank" class="s-contacts__item-link">eaglebov87@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-contacts.scss';
</style>
