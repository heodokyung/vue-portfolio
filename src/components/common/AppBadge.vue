<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="app-badge">{{ label }}</span>
</template>

<style scoped lang="scss">
.app-badge {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-muted);
  font-size: 0.78rem;
  font-weight: 700;
}
</style>
