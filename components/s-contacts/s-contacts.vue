<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-contacts">
    <div class="s-contacts-decoration">
      <svg viewBox="0 0 310 350">
        <path
          d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"
        ></path>
      </svg>
    </div>
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
