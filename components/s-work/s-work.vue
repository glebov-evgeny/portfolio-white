<template>
  <section class="s-work">
    <div class="container s-work__container container__box">
      <div class="s-work__aside container__aside">
        <h2 class="s-work__title s-title">{{ $t('work.title') }}</h2>
      </div>
      <div class="s-work__main container__main">
        <div class="s-work__box">
          <div v-for="(item, key) in $tm('work.info')" :key="key" :class="['s-work__item', `_color-${key + 1}`]">
            <p class="s-work__item-title">{{ $rt(item.name) }}</p>
            <div class="s-work__item-top">
              <a :href="`${item.company.link}`" target="_blank" class="s-work__item-company">{{
                $rt(item.company.name)
              }}</a>
              <p class="s-work__item-date">{{ $rt(item.date) }}</p>
            </div>
            <div class="s-work__item-block">
              <p class="s-work__item-subtitle">{{ $t('work.responsibilities') }}</p>
              <ul class="s-work__item-duties">
                <li v-for="(elem, index) in $tm(`work.info[${key}].duties`)" :key="index" class="s-work__item-dutie">
                  {{ $rt(elem) }}
                </li>
              </ul>
            </div>
            <div class="s-work__item-block">
              <p class="s-work__item-subtitle">{{ $t('work.stack') }}</p>
              <ul class="s-work__item-stacks">
                <li v-for="(elem, index) in $tm(`work.info[${key}].stack`)" :key="index" class="s-work__item-stack">
                  {{ $rt(elem) }}
                </li>
              </ul>
            </div>
            <div v-if="$tm(`work.info[${key}].links`).length" class="s-work__item-block">
              <p class="s-work__item-subtitle">{{ $t('work.example') }}</p>
              <div class="s-work__item-examples">
                <a
                  v-for="(elem, index) in $tm(`work.info[${key}].links`)"
                  :key="index"
                  :href="$rt(elem.item)"
                  target="_blank"
                  class="s-work__item-example"
                  :style="{ backgroundImage: `url(/portfolio-white/images/work/${elem.image}.png)` }"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
@import './s-work.scss';
</style>
