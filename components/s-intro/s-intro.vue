<template>
  <section class="s-intro">
    <div class="s-intro__container">
      <div class="s-intro__block">
        <div class="s-intro__content">
          <p class="s-intro__subtitle">{{ $t('intro.subtitle') }}</p>
          <h2 class="s-intro__title s-title">{{ $t('intro.title') }}</h2>
          <p class="s-intro__text">{{ $t('intro.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-intro.scss';
</style>
