<template>
  <main class="s-main">
    <s-userpage />
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
});
</script>
