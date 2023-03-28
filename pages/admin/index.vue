<template>
  <main class="s-main">
    <s-work />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
});
</script>
