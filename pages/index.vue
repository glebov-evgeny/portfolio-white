<template>
  <main class="s-main">
    <div class="column l-wide">
      <s-intro />
      <s-photo />
      <s-swiper :presentations="presentations" />
    </div>
  </main>
</template>

<script setup>
const presentations = [
  { label: 'start', link: 'https://synergystart.ru/' },
  { label: 'care', link: 'https://www.samsung.com/ru/support/samsung-care-plus/' },
  { label: 'design', link: 'https://synergy.ru/lp/design/' },
  { label: 'synergyproduction', link: 'https://synergyproduction.ru/' },
  { label: 'webinar', link: 'https://akademia-triz.ru/lp/webinar/' },
  { label: 'marketplaces', link: 'https://synergydigital.com/lp/marketplaces/' },
  { label: 'management', link: 'https://synergy.ru/lp/openday/management/' },
  { label: 'programiss', link: 'https://programiss.ru/' },
  { label: 'brain', link: 'https://synergyglobal.ru/forums/brain2023/' },
];
</script>

<style lang="scss" scoped>
.column {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'intro' 'photo' 'swiper';
  gap: 1rem;
  padding-top: 2.5rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'intro photo' 'swiper swiper';
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 'intro intro intro photo photo' 'swiper swiper swiper swiper swiper';
  }
}
</style>
