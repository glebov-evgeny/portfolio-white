<template>
  <nav class="m-menu" :class="classes">
    <NuxtLink
      v-for="(item, index) in $tm('header.nav')"
      :key="index"
      :class="{ active: $route.name === item.name }"
      class="m-menu__link"
      :to="item.name"
    >
      {{ item.title }}
    </NuxtLink>
  </nav>
</template>

<script setup></script>

<style lang="scss">
@import './m-menu.scss';
</style>
