<template>
  <div>
    <div class="input-group">
      <button type="submit" class="btn btn-secondary">
        <i class="bi bi-search"></i>
      </button>
      <input
        v-model="searchModel"
        type="text"
        class="form-control"
        placeholder="Поиск"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from "~/store/posts";

const store = usePostsStore();
const searchQuery = computed(() => store.search);

const searchModel = computed({
  get: () => searchQuery.value,
  set: (value) => store.setSearch(value),
});
</script>

<style scoped></style>
