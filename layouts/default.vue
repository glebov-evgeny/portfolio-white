<template>
  <div :class="['s-layout', { 'dark-themes': isLightThemes }]">
    <s-loader />
    <s-header @handler-change-themes="changeColorThemes" />
    <NuxtPage />
    <s-footer />
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

<style>
.page-enter-active {
  opacity: 0;
  transform: translateY(10%);
  transition: all 0.5s ease-in-out;
}
.page-leave-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.5s ease-in-out;
}

.page-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
@media all and (min-width: 768px) {
  .page-enter-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s ease-in-out;
  }
  .page-leave-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
  }

  .page-enter-to {
    opacity: 1;
    transform: translateX(0);
  }

  .page-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
