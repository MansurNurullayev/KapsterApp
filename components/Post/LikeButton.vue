<template>
  <div class="btn-group" role="group">
    <button :disabled="true" type="button" class="btn btn-primary btn-sm px-3">
      {{ count }}
    </button>
    <button type="button" class="btn btn-sm btn-primary" @click="emit('like')">
      <i class="bi bi-suit-heart-fill"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number;
}>();

const emit = defineEmits(["like"]);
</script>

<style scoped></style>
