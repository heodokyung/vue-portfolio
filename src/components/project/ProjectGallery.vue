<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ProjectMedia } from '@/types/portfolio'

const props = defineProps<{ items: ProjectMedia[] }>()

const selectedIndex = ref(0)

const isMobileGallery = computed(() => props.items.length > 1 && props.items.every((item) => item.variant === 'mobile'))
const isWebGallery = computed(() => !isMobileGallery.value)
const selectedItem = computed(() => props.items[selectedIndex.value] ?? props.items[0])

watch(
  () => props.items,
  () => {
    selectedIndex.value = 0
  },
)
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

    <div v-else-if="isWebGallery" class="web-showcase">
      <p class="web-showcase__hint">PC 화면은 크게 보고, 필요한 경우 이미지를 눌러 원본 크기로 확인할 수 있습니다.</p>
      <figure v-if="selectedItem" class="web-showcase__lead">
        <a :href="selectedItem.src" target="_blank" rel="noreferrer noopener" class="web-showcase__browser">
          <span class="web-showcase__bar" aria-hidden="true"><i></i><i></i><i></i></span>
          <img :src="selectedItem.src" :alt="selectedItem.alt" loading="lazy" />
        </a>
        <figcaption>
          <strong>Screen {{ selectedIndex + 1 }}</strong>
          <span>{{ selectedItem.caption || selectedItem.alt }}</span>
        </figcaption>
      </figure>

      <div v-if="items.length > 1" class="web-showcase__thumbs" aria-label="PC 상세 화면 썸네일 목록">
        <button
          v-for="(item, index) in items"
          :key="item.src"
          type="button"
          :class="{ 'is-active': index === selectedIndex }"
          :aria-pressed="index === selectedIndex"
          @click="selectedIndex = index"
        >
          <img :src="item.src" :alt="`${item.alt} 썸네일`" loading="lazy" />
          <span>Screen {{ index + 1 }}</span>
        </button>
      </div>
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

.mobile-gallery__hint,
.web-showcase__hint {
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

.mobile-gallery__item figcaption strong,
.web-showcase__lead figcaption strong {
  color: var(--color-heading);
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.web-showcase {
  display: grid;
  gap: 14px;
  min-width: 0;
}

.web-showcase__lead {
  display: grid;
  gap: 12px;
  min-width: 0;
  margin: 0;
}

.web-showcase__browser {
  display: grid;
  overflow: hidden;
  min-width: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--color-grid-line) 58%, transparent) 1px, transparent 1px) 0 0 / 30px 30px,
    var(--color-surface-strong);
  box-shadow: var(--shadow-card);
}

.web-showcase__bar {
  display: flex;
  gap: 7px;
  padding: 13px 15px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-surface);
}

.web-showcase__bar i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-muted) 28%, transparent);
}

.web-showcase__browser img {
  display: block;
  width: 100%;
  max-height: min(82vh, 900px);
  object-fit: contain;
}

.web-showcase__lead figcaption {
  display: grid;
  gap: 5px;
  color: var(--color-muted);
  line-height: 1.55;
}

.web-showcase__thumbs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.web-showcase__thumbs button {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-muted);
  cursor: pointer;
  font: inherit;
  font-size: 0.78rem;
  font-weight: 900;
  text-align: left;
  transition:
    transform var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.web-showcase__thumbs button:hover,
.web-showcase__thumbs button:focus-visible,
.web-showcase__thumbs button.is-active {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--color-warm) 70%, var(--color-border));
  color: var(--color-heading);
  box-shadow: var(--shadow-soft);
}

.web-showcase__thumbs img {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  background: var(--color-surface-strong);
  object-fit: cover;
  object-position: top center;
}

@media (max-width: 900px) {
  .web-showcase__thumbs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 780px) {
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

  .web-showcase__thumbs {
    grid-template-columns: 1fr;
  }
}
</style>
