<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    label: string
    loop?: boolean
    autoplay?: boolean
  }>(),
  {
    loop: true,
    autoplay: true,
  },
)

const container = ref<HTMLElement | null>(null)
let animation: { destroy: () => void } | null = null

onMounted(async () => {
  if (!container.value) return

  try {
    const lottie = await import('lottie-web')
    animation = lottie.default.loadAnimation({
      container: container.value,
      renderer: 'svg',
      loop: props.loop,
      autoplay: props.autoplay,
      path: props.src,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
      },
    })
  } catch {
    animation = null
  }
})

onBeforeUnmount(() => {
  animation?.destroy()
})
</script>

<template>
  <div class="lottie-motion" role="img" :aria-label="label">
    <div ref="container" class="lottie-motion__stage" aria-hidden="true"></div>
    <span class="visually-hidden">{{ label }}</span>
  </div>
</template>

<style scoped lang="scss">
.lottie-motion {
  position: relative;
  display: grid;
  min-height: 180px;
  place-items: center;
  overflow: hidden;
}

.lottie-motion__stage {
  width: min(100%, 360px);
  min-height: 180px;
}

.lottie-motion__stage:empty::before {
  display: grid;
  width: min(100%, 260px);
  min-height: 180px;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--color-primary) 22%, transparent);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--color-grid-line) 70%, transparent) 1px, transparent 1px) 0 0 / 24px 24px,
    var(--color-code-bg);
  color: var(--color-code-text);
  content: '</>';
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  font-size: 1.8rem;
  font-weight: 900;
}

@media (prefers-reduced-motion: reduce) {
  .lottie-motion__stage {
    animation: none;
  }
}
</style>
