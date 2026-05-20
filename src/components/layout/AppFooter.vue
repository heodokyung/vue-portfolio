<script setup lang="ts">
import AppContainer from '@/components/common/AppContainer.vue'
</script>

<template>
  <footer class="site-footer">
    <AppContainer class="site-footer__inner">
      <p>© {{ new Date().getFullYear() }} Heo Do Kyung. Built with Vue 3.</p>
      <a href="mailto:gjehrud@gmail.com">gjehrud@gmail.com</a>
    </AppContainer>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
}

.site-footer__inner {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  color: var(--color-muted);
  font-size: 0.92rem;
}

.site-footer a {
  color: var(--color-primary-strong);
  font-weight: 800;
}

@media (max-width: 640px) {
  .site-footer__inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
