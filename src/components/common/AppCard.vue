<template>
  <article class="app-card">
    <slot />
  </article>
</template>

<style scoped lang="scss">
.app-card {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}
</style>
