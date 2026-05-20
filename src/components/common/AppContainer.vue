<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.app-container {
  width: min(100% - 32px, var(--container));
  margin-inline: auto;
}

@media (max-width: 640px) {
  .app-container {
    width: min(100% - 24px, var(--container));
  }
}
</style>
