<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <s-header @handler-change-themes="changeColorThemes" />
    <main class="s-main">
      <h2>Page not found</h2>
    </main>
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
