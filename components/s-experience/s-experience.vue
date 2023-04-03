<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-experience">
    <div class="container s-experience__container container__box">
      <div class="s-experience__aside container__aside">
        <h2 class="s-experience__title s-title" v-html="$t('experience.title')"></h2>
      </div>
      <div class="s-experience__main container__main">
        <div class="s-experience__box">
          <div
            v-for="(item, key) in $tm('experience.item')"
            :key="key"
            :class="['s-experience__item', `_color-${key + 1}`]"
          >
            <p class="s-experience__item-title">{{ $rt(item.title) }}</p>
            <ul class="s-experience__item-list">
              <li
                v-for="(elem, index) in $tm(`experience.item[${key}].points`)"
                :key="index"
                class="s-experience__item-point"
              >
                {{ $rt(elem) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-experience.scss';
</style>
