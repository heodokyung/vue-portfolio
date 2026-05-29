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
  border: 2px solid var(--color-heading);
  border-radius: 999px;
  font-weight: 950;
  line-height: 1.2;
  letter-spacing: -0.01em;
  box-shadow: var(--shadow-flat);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    background var(--transition-fast);
}

.app-button:hover,
.app-button:focus-visible {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 rgb(16 24 39 / 14%);
}

.app-button--md {
  padding: 9px 17px;
  font-size: 0.94rem;
}

.app-button--lg {
  min-height: 52px;
  padding: 14px 23px;
  font-size: 1rem;
}

.app-button--primary {
  background: var(--color-primary);
  color: #fff;
}

.app-button--ghost {
  background: var(--color-surface);
  color: var(--color-heading);
}

.app-button--subtle {
  background: var(--color-warm);
  color: var(--color-heading);
}
</style>
