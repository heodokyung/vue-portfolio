<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ProjectMedia } from '@/types/portfolio'

const props = defineProps<{ items: ProjectMedia[] }>()

const selectedIndex = ref(0)

const isMobileGallery = computed(() => props.items.length > 1 && props.items.every((item) => item.variant === 'mobile'))
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
      <div class="gallery-toolbar">
        <p>Mobile Flow</p>
        <span>좌우로 넘겨 화면 흐름을 확인합니다.</span>
      </div>

      <div class="mobile-gallery__rail" tabindex="0" aria-label="모바일 프로젝트 화면 가로 스크롤 갤러리">
        <figure v-for="(item, index) in items" :key="item.src" class="mobile-gallery__item">
          <div class="mobile-gallery__phone">
            <span class="mobile-gallery__notch" aria-hidden="true"></span>
            <img :src="item.src" :alt="item.alt" loading="lazy" />
          </div>
          <figcaption>
            <strong>{{ String(index + 1).padStart(2, '0') }}</strong>
            <span v-if="item.caption">{{ item.caption }}</span>
          </figcaption>
        </figure>
      </div>
    </div>

    <div v-else class="web-showcase">
      <div class="gallery-toolbar">
        <p>Web Screen Viewer</p>
        <span>이미지를 누르면 원본 크기로 열립니다.</span>
      </div>

      <figure v-if="selectedItem" class="web-showcase__lead">
        <a :href="selectedItem.src" target="_blank" rel="noreferrer noopener" class="web-showcase__browser">
          <span class="web-showcase__bar" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="web-showcase__stage">
            <img :src="selectedItem.src" :alt="selectedItem.alt" loading="lazy" />
          </span>
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
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
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

.mobile-gallery,
.web-showcase {
  display: grid;
  gap: 14px;
  min-width: 0;
}

.gallery-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border: 2px solid var(--color-heading);
  border-radius: 14px;
  background: var(--color-warm-soft);
}

.gallery-toolbar p {
  color: var(--color-heading);
  font-weight: 950;
}

.gallery-toolbar span {
  color: var(--color-muted);
  font-size: 0.86rem;
  font-weight: 850;
}

.mobile-gallery__rail {
  display: grid;
  grid-auto-columns: minmax(208px, 252px);
  grid-auto-flow: column;
  gap: 18px;
  min-width: 0;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  padding: 8px 4px 18px;
  scroll-padding-inline: 4px;
  scroll-snap-type: inline mandatory;
  scrollbar-width: thin;
}

.mobile-gallery__item {
  display: grid;
  gap: 10px;
  min-width: 0;
  margin: 0;
  scroll-snap-align: start;
}

.mobile-gallery__phone {
  position: relative;
  display: grid;
  min-height: 366px;
  place-items: center;
  padding: 26px 14px 16px;
  border: 2px solid var(--color-heading);
  border-radius: 30px;
  background: #172033;
  box-shadow: var(--shadow-flat);
}

.mobile-gallery__notch {
  position: absolute;
  top: 12px;
  left: 50%;
  width: 54px;
  height: 5px;
  border-radius: 999px;
  background: rgb(255 255 255 / 26%);
  transform: translateX(-50%);
}

.mobile-gallery__phone img {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 326px;
  border-radius: 16px;
  object-fit: contain;
}

.mobile-gallery__item figcaption,
.web-showcase__lead figcaption {
  display: grid;
  gap: 5px;
  min-height: 54px;
  color: var(--color-muted);
  font-size: 0.86rem;
  line-height: 1.55;
}

.mobile-gallery__item figcaption strong,
.web-showcase__lead figcaption strong {
  color: var(--color-primary-strong);
  font-size: 0.8rem;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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
  border: 2px solid var(--color-heading);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-flat);
}

.web-showcase__bar {
  display: flex;
  gap: 7px;
  align-items: center;
  padding: 12px 14px;
  border-bottom: 2px solid var(--color-heading);
  background: var(--color-surface);
}

.web-showcase__bar i {
  width: 11px;
  height: 11px;
  border: 2px solid var(--color-heading);
  border-radius: 50%;
  background: var(--color-coral);
}

.web-showcase__bar i:nth-child(2) {
  background: var(--color-warm);
}

.web-showcase__bar i:nth-child(3) {
  background: var(--color-accent);
}

.web-showcase__stage {
  display: grid;
  place-items: start center;
  min-height: 360px;
  background: var(--color-bg-soft);
}

.web-showcase__stage img {
  display: block;
  width: 100%;
  height: auto;
  background: #fff;
  object-fit: contain;
  object-position: top center;
}

.web-showcase__thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(112px, 1fr));
  gap: 10px;
}

.web-showcase__thumbs button {
  display: grid;
  gap: 8px;
  min-width: 0;
  padding: 8px;
  border: 1px solid var(--color-border-strong);
  border-radius: 14px;
  background: var(--color-surface);
  color: var(--color-muted);
  cursor: pointer;
  font: inherit;
  font-size: 0.78rem;
  font-weight: 950;
  text-align: left;
  transition:
    transform var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.web-showcase__thumbs button:hover,
.web-showcase__thumbs button:focus-visible,
.web-showcase__thumbs button.is-active {
  transform: translate(-2px, -2px);
  border-color: var(--color-heading);
  color: var(--color-heading);
  box-shadow: var(--shadow-flat);
}

.web-showcase__thumbs img {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  background: var(--color-surface-strong);
  object-fit: cover;
  object-position: top center;
}

@media (max-width: 780px) {
  .mobile-gallery__rail {
    grid-auto-columns: minmax(180px, 224px);
  }

  .mobile-gallery__phone {
    min-height: 350px;
  }

  .mobile-gallery__phone img {
    max-height: 306px;
  }

  .web-showcase__stage {
    min-height: 300px;
  }
}

@media (max-width: 430px) {
  .gallery-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .mobile-gallery__rail {
    grid-auto-columns: minmax(176px, 78vw);
  }
}
</style>
