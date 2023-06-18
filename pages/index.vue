<template>
  <div class="container">
    <div class="row gy-2">
      <div v-for="item in posts" :key="item.id" class="col-lg-3 col-md-6 mb-4">
        <PostCard
          :id="item.id"
          :title="item.title"
          :published-at="item.published_at"
          :image="item.image_preview"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from "~/store/posts";

const store = usePostsStore();
const posts = computed(() => store.filteredPosts);

await useAsyncData("fetch-posts", () => store.fetchPosts());
</script>

<style lang="scss" scoped></style>
