<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="post-page container pb-5">
    <div class="col-md-8">
      <header class="d-flex flex-column mb-2">
        <h3 class="mb-4">{{ post?.title }}</h3>
        <div
          class="post-page-image"
          :style="{ backgroundImage: `url(${post?.image_preview})` }"
        />
        <div
          class="py-3 mb-3 border-bottom d-flex align-items-center justify-content-between"
        >
          <div class="fs-6 text-muted">Дата публикации {{ date }}</div>
          <PostLikeButton
            :count="likesCount"
            @like="mutateLikes(likesCount + 1)"
          />
        </div>
      </header>
      <main v-html="post?.content"></main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSinglePostStore } from "~/store/post";

const route = useRoute();

const store = useSinglePostStore(parseInt(String(route.params.id)))();
const { fetchSinglePost, mutateLikes } = store;

const post = computed(() => store.post);
const likesCount = computed(() => store.likes_count);

const date = computed(() =>
  new Date(post.value?.published_at || 0).toLocaleDateString()
);

await useAsyncData("single-post", () => fetchSinglePost());
</script>

<style scoped lang="scss">
.post-page-image {
  height: 250px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 992px) {
    height: 400px;
  }
}
</style>
