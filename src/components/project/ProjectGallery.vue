<script setup lang="ts">
import type { ProjectMedia } from '@/types/portfolio'

defineProps<{ items: ProjectMedia[] }>()
</script>

<template>
  <div v-if="items.length" class="project-gallery">
    <figure v-for="item in items" :key="item.src" class="project-gallery__item">
      <img :src="item.src" :alt="item.alt" loading="lazy" />
      <figcaption v-if="item.caption">{{ item.caption }}</figcaption>
    </figure>
  </div>
</template>

<style scoped lang="scss">
.project-gallery {
  display: grid;
  gap: 18px;
}

.project-gallery__item {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
}

.project-gallery__item img {
  width: 100%;
  background: var(--color-surface-strong);
}

.project-gallery__item figcaption {
  padding: 12px 16px;
  color: var(--color-muted);
  font-size: 0.9rem;
}
</style>
