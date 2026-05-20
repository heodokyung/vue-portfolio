<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="section-title">
    <p v-if="eyebrow" class="section-title__eyebrow">{{ eyebrow }}</p>
    <h2 class="section-title__heading">{{ title }}</h2>
    <p v-if="description" class="section-title__description">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  max-width: 720px;
  margin-bottom: clamp(24px, 4vw, 40px);
}

.section-title__eyebrow {
  margin-bottom: 8px;
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-title__heading {
  color: var(--color-heading);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  line-height: 1.2;
  letter-spacing: -0.04em;
}

.section-title__description {
  margin-top: 14px;
  color: var(--color-muted);
  font-size: clamp(1rem, 2vw, 1.12rem);
}
</style>
