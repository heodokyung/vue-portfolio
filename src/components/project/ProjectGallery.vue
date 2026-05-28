<script setup lang="ts">
import { computed } from 'vue'
import type { ProjectMedia } from '@/types/portfolio'

const props = defineProps<{ items: ProjectMedia[] }>()

const isMobileGallery = computed(() => props.items.length > 1 && props.items.every((item) => item.variant === 'mobile'))
const isWebGallery = computed(() => !isMobileGallery.value)
</script>

<template>
  <div v-if="items.length" class="project-gallery">
    <div v-if="isMobileGallery" class="mobile-gallery">
      <p class="mobile-gallery__hint">좌우로 넘기며 주요 모바일 화면 흐름을 확인할 수 있습니다.</p>
      <div class="mobile-gallery__rail" tabindex="0" aria-label="모바일 프로젝트 화면 가로 스크롤 갤러리">
        <figure v-for="(item, index) in items" :key="item.src" class="mobile-gallery__item">
          <div class="mobile-gallery__phone">
            <span class="mobile-gallery__notch" aria-hidden="true"></span>
            <img :src="item.src" :alt="item.alt" loading="lazy" />
          </div>
          <figcaption>
            <strong>Screen {{ index + 1 }}</strong>
            <span v-if="item.caption">{{ item.caption }}</span>
          </figcaption>
        </figure>
      </div>
    </div>

    <div v-else-if="isWebGallery" class="web-gallery">
      <figure
        v-for="(item, index) in items"
        :key="item.src"
        class="web-gallery__item"
        :class="{ 'web-gallery__item--lead': index === 0 }"
      >
        <div class="web-gallery__browser">
          <div class="web-gallery__bar" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img :src="item.src" :alt="item.alt" loading="lazy" />
        </div>
        <figcaption v-if="item.caption">{{ item.caption }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-gallery {
  display: grid;
  min-width: 0;
}

.mobile-gallery {
  display: grid;
  gap: 12px;
  min-width: 0;
}

.mobile-gallery__hint {
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
  font-size: 0.84rem;
  font-weight: 900;
}

.mobile-gallery__rail {
  display: grid;
  grid-auto-columns: minmax(210px, 258px);
  grid-auto-flow: column;
  gap: 16px;
  min-width: 0;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  padding: 6px 4px 18px;
  scroll-padding-inline: 4px;
  scroll-snap-type: inline mandatory;
  scrollbar-width: thin;
}

.mobile-gallery__item {
  display: grid;
  gap: 12px;
  min-width: 0;
  margin: 0;
  scroll-snap-align: start;
}

.mobile-gallery__phone {
  position: relative;
  display: grid;
  min-height: 430px;
  place-items: center;
  padding: 26px 15px 18px;
  border: 10px solid #111827;
  border-radius: 32px;
  background:
    linear-gradient(180deg, #111827, #0f172a),
    var(--color-surface);
  box-shadow: 0 18px 42px rgb(15 23 42 / 18%);
}

.mobile-gallery__notch {
  position: absolute;
  top: 11px;
  left: 50%;
  width: 54px;
  height: 5px;
  border-radius: 999px;
  background: rgb(255 255 255 / 22%);
  transform: translateX(-50%);
}

.mobile-gallery__phone img {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 374px;
  border-radius: 16px;
  object-fit: contain;
}

.mobile-gallery__item figcaption {
  display: grid;
  gap: 4px;
  min-height: 72px;
  color: var(--color-muted);
  font-size: 0.86rem;
  line-height: 1.55;
}

.mobile-gallery__item figcaption strong {
  color: var(--color-heading);
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.web-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.web-gallery__item {
  min-width: 0;
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.web-gallery__item--lead {
  grid-column: 1 / -1;
}

.web-gallery__browser {
  overflow: hidden;
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--color-grid-line) 58%, transparent) 1px, transparent 1px) 0 0 / 30px 30px,
    var(--color-surface-strong);
}

.web-gallery__bar {
  display: flex;
  gap: 7px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-surface);
}

.web-gallery__bar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-muted) 28%, transparent);
}

.web-gallery__browser img {
  display: block;
  width: 100%;
  max-height: 720px;
  object-fit: contain;
}

.web-gallery__item:not(.web-gallery__item--lead) .web-gallery__browser img {
  max-height: 420px;
}

.web-gallery__item figcaption {
  padding: 14px 18px;
  color: var(--color-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

@media (max-width: 780px) {
  .web-gallery {
    grid-template-columns: 1fr;
  }

  .mobile-gallery__rail {
    grid-auto-columns: minmax(188px, 236px);
  }

  .mobile-gallery__phone {
    min-height: 390px;
    border-width: 8px;
    border-radius: 28px;
  }

  .mobile-gallery__phone img {
    max-height: 336px;
  }
}

@media (max-width: 430px) {
  .mobile-gallery__rail {
    grid-auto-columns: minmax(176px, 78vw);
  }

  .mobile-gallery__phone {
    min-height: 372px;
  }
}
</style>
