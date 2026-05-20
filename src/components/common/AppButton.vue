<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'ghost' | 'subtle'
    size?: 'md' | 'lg'
  }>(),
  {
    variant: 'primary',
    size: 'md',
  },
)
</script>

<template>
  <RouterLink v-if="to" class="app-button" :class="[`app-button--${variant}`, `app-button--${size}`]" :to="to">
    <slot />
  </RouterLink>
  <a
    v-else-if="href"
    class="app-button"
    :class="[`app-button--${variant}`, `app-button--${size}`]"
    :href="href"
    target="_blank"
    rel="noreferrer noopener"
  >
    <slot />
  </a>
  <button v-else class="app-button" :class="[`app-button--${variant}`, `app-button--${size}`]" type="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  gap: 8px;
  border-radius: 999px;
  font-weight: 800;
  transition:
    transform 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;
}

.app-button:hover {
  transform: translateY(-1px);
}

.app-button--md {
  padding: 10px 18px;
  font-size: 0.95rem;
}

.app-button--lg {
  padding: 14px 24px;
  font-size: 1rem;
}

.app-button--primary {
  background: var(--color-primary);
  color: #fff;
}

.app-button--primary:hover {
  background: var(--color-primary-strong);
}

.app-button--ghost {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-heading);
}

.app-button--subtle {
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
}
</style>
