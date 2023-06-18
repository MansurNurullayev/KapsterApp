<template>
  <div class="post-card card">
    <img class="card-img-top" :src="image" :alt="title" />
    <div class="card-body">
      <h6 class="post-card-title card-title">{{ title }}</h6>
      <h6 class="card-subtitle text-muted mb-2">{{ publishDate }}</h6>
      <NuxtLink class="btn btn-primary card-link w-100" :to="link">
        Перейти
        <i class="bi bi-arrow-right-short"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: number;
  title: string;
  publishedAt: string;
  image: string;
}>();

const publishDate = computed(() =>
  new Date(props.publishedAt).toLocaleDateString()
);
const link = computed(() => `/post/${props.id}`);
</script>

<style lang="scss" scoped>
.post-card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
