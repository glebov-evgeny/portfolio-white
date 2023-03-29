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
onMounted(() => {
  handleResize();

  if (process.client) {
    window.addEventListener('resize', handleResize);
  }
});
</script>
