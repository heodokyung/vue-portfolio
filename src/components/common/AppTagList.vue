<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <ul v-if="items.length" class="tag-list" aria-label="태그 목록">
    <li v-for="item in items" :key="item" class="tag-list__item">{{ item }}</li>
  </ul>
</template>

<style scoped lang="scss">
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-list__item {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 3px 9px;
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
  font-size: 0.78rem;
  font-weight: 700;
}
</style>
