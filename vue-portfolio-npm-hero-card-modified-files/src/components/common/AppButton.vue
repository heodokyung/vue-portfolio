<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
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

const isExternalHref = computed(() => Boolean(props.href?.startsWith('http')))
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
    :target="isExternalHref ? '_blank' : undefined"
    :rel="isExternalHref ? 'noreferrer noopener' : undefined"
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
  border: 1px solid transparent;
  border-radius: 999px;
  font-weight: 800;
  line-height: 1.2;
  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
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
  box-shadow: 0 14px 30px color-mix(in srgb, var(--color-primary) 22%, transparent);
}

.app-button--primary:hover {
  background: var(--color-primary-strong);
}

.app-button--ghost {
  border-color: var(--color-border);
  background: var(--color-surface);
  color: var(--color-heading);
}

.app-button--ghost:hover {
  border-color: color-mix(in srgb, var(--color-primary) 44%, var(--color-border));
}

.app-button--subtle {
  border-color: color-mix(in srgb, var(--color-primary) 18%, transparent);
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
}
</style>
