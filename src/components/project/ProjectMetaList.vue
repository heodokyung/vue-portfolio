<script setup lang="ts">
defineProps<{
  items: { label: string; value?: string | number | string[] | null }[]
}>()
</script>

<template>
  <dl class="meta-list">
    <template v-for="item in items" :key="item.label">
      <div v-if="item.value !== undefined && item.value !== null && item.value !== ''" class="meta-list__item">
        <dt>{{ item.label }}</dt>
        <dd v-if="Array.isArray(item.value)">{{ item.value.join(', ') }}</dd>
        <dd v-else>{{ item.value }}</dd>
      </div>
    </template>
  </dl>
</template>

<style scoped lang="scss">
.meta-list {
  display: grid;
  gap: 12px;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
}

.meta-list__item {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 12px;
}

dt {
  color: var(--color-muted);
  font-size: 0.85rem;
  font-weight: 800;
}

dd {
  margin: 0;
  color: var(--color-heading);
  font-weight: 700;
}

@media (max-width: 520px) {
  .meta-list__item {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
