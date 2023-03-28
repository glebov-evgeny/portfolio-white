<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-information">
    <div class="s-information__container l-wide">
      <h2 class="s-information__title s-title">{{ $t('information.title') }}</h2>
      <div class="s-information__block">
        <p class="s-information__description">{{ $t('information.description') }}</p>
      </div>
      <div class="s-information__box">
        <nuxt-link
          v-for="(item, key) in $tm('information.cards')"
          :key="key"
          :class="['s-information__card', `_color-${key + 1}`]"
          :to="`/${item.route}`"
        >
          <p class="s-information__card-title">{{ $rt(item.title) }}</p>
          <p class="s-information__card-description" v-html="$rt(item.description)"></p>
          <div class="s-information__card-button">{{ $t('information.more') }}</div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-information.scss';
</style>
