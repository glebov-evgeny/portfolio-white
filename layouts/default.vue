<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <s-loader />
    <s-header @handler-change-themes="changeColorThemes" />
    <NuxtPage />
  </div>
</template>

<script setup>
import { useDeviceStore } from '~/store/device';
const store = useDeviceStore();

const handleResize = () => {
  store.updateWidth(window.innerWidth);
};

const isLightThemes = ref(false);
const changeColorThemes = () => {
  isLightThemes.value = !isLightThemes.value;
};

watch(
  () => {
    const bodyWrapper = document.querySelector('body');
    if (isLightThemes.value === true) {
      bodyWrapper.style.background = '#272727';
    } else {
      bodyWrapper.style.background = 'initial';
    }
  },
  { immediate: true },
);

onMounted(() => {
  handleResize();

  if (process.client) {
    window.addEventListener('resize', handleResize);
  }
});
</script>

<style>
.page-enter-active {
  opacity: 0;
  transform: translateY(10%);
  transition: all 0.3s linear;
}
.page-leave-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s linear;
}
.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>
