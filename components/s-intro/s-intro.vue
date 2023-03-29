<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-intro">
    <div class="container s-intro__container">
      <div class="s-intro__content">
        <h2 class="s-intro__title" v-html="$t('intro.title')"></h2>
        <h3 class="s-intro__description">{{ $t('intro.stack') }}</h3>
      </div>
    </div>
    <div class="s-intro__image"></div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-intro.scss';
</style>
