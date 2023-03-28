<template>
  <main class="s-main">
    <s-presentation />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
});
</script>
