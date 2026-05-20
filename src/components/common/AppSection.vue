<script setup lang="ts">
defineProps<{
  id?: string
  tone?: 'default' | 'surface'
}>()
</script>

<template>
  <section :id="id" class="app-section" :class="tone && `app-section--${tone}`">
    <slot />
  </section>
</template>

<style scoped lang="scss">
.app-section {
  padding: clamp(56px, 8vw, 96px) 0;
}

.app-section--surface {
  background: var(--color-surface-strong);
}
</style>
