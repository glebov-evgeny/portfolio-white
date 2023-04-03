<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-contacts">
    <div class="s-contacts-decoration">
      <svg width="200" height="160">
        <path
          d="M149.95 74.5C149.95 115.645 116.595 116 75.4502 116C34.305 116 0.950195 115.645 0.950195 74.5C0.950195 33.3548 34.305 0 75.4502 0C116.595 0 149.95 33.3548 149.95 74.5Z"
        />
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
