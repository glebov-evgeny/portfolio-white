<template>
  <section class="s-swiper">
    <div class="s-swiper__container">
      <div class="s-swiper__block">
        <h2 class="s-swiper__title s-title">{{ $t('swiper.title') }}</h2>
        <swiper class="s-swiper__slider" v-bind="swiperConfig">
          <swiper-slide v-for="(item, index) in presentations" :key="index" class="s-swiper__item">
            <img :src="`/portfolio-white/images/swiper/${item.label}.png`" class="s-swiper__item-img" />
            <a :href="`${item.link}`" target="_blank" class="s-swiper__item-link">
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="27.5816" y1="16.0606" x2="13.4395" y2="1.91844" stroke="black" stroke-width="4" />
                <line x1="12.7323" y1="28.0814" x2="26.8744" y2="13.9393" stroke="black" stroke-width="4" />
              </svg>
            </a>
          </swiper-slide>
        </swiper>
        <div class="s-swiper__pagination"></div>
        <div class="s-swiper__navigation">
          <div ref="sliderPrev" class="s-swiper__navigation-prev s-swiper__navigation-item">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="27.5816" y1="16.0606" x2="13.4395" y2="1.91844" stroke="black" stroke-width="4" />
              <line x1="12.7323" y1="28.0814" x2="26.8744" y2="13.9393" stroke="black" stroke-width="4" />
            </svg>
          </div>
          <div ref="sliderNext" class="s-swiper__navigation-next s-swiper__navigation-item">
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="27.5816" y1="16.0606" x2="13.4395" y2="1.91844" stroke="black" stroke-width="4" />
              <line x1="12.7323" y1="28.0814" x2="26.8744" y2="13.9393" stroke="black" stroke-width="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Pagination, Navigation } from 'swiper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  presentations: {
    type: Array,
    required: true,
  },
});

const sliderPrev = ref(null);
const sliderNext = ref(null);

const swiperConfig = reactive({
  slidesPerView: 1,
  spaceBetween: 25,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: sliderPrev,
    nextEl: sliderNext,
  },
  breakpoints: {
    550: {
      // slidesPerGroup: 2,
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.2,
    },
  },
  modules: [Pagination, Navigation],
  pagination: {
    el: '.s-swiper__pagination',
    clickable: true,
  },
});
</script>

<style lang="scss">
@import './s-swiper.scss';
</style>
