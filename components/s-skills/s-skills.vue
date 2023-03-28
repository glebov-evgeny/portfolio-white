<template>
  <section class="s-skills">
    <div class="s-skills__container l-wide">
      <h2 class="s-skills__title s-title">{{ $t('skills.title') }}</h2>
      <div class="s-skills__block">
        <div v-for="(item, key) in $tm('skills.item')" :key="key" class="s-skills__item">
          <h3 class="s-skills__item-title">{{ $rt(item.title) }}</h3>
          <div v-if="item.grade != 0" class="s-skills__item-grade">
            <div
              :class="['s-skills__item-grade-line', `_color-${key + 1}`]"
              :style="{ width: `${item.grade}` + '%' }"
            ></div>
            <div class="s-skills__item-grade-number" :style="{ width: `${item.grade}` + '%' }">
              {{ $rt(item.grade) }}%
            </div>
          </div>
          <div class="s-skills__item-points">
            <p v-for="(point, index) in $tm(`skills.item[${key}].points`)" :key="index" class="s-skills__item-point">
              {{ $rt(point) }}
            </p>
          </div>
          <p class="s-skills__item-info">{{ $rt(item.info) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-skills.scss';
</style>
