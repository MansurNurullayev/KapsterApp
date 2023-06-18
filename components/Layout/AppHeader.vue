<template>
  <header class="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">Kapster Test App</NuxtLink>
      <LayoutPostSearch v-if="showSearch" />
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const showSearch = computed(() => route.name === "index");
</script>

<style scoped></style>
