<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import AppContainer from '@/components/common/AppContainer.vue'
import { profile } from '@/data/profile'

const isOpen = ref(false)
const scrollProgress = ref(0)
const isAtTop = computed(() => scrollProgress.value <= 0.01)

const sectionLinks = [
  { label: 'Project', to: '/#projects' },
  { label: 'Career', to: '/#work' },
  { label: 'Skill', to: '/#skills' },
  { label: 'Contact', to: '/#contact' },
]

const externalLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'Study', href: 'https://github.com/heodokyung/frontend-study' },
  { label: 'Guide', href: 'https://github.com/heodokyung/frontend-guide' },
]

const closeMenu = () => {
  isOpen.value = false
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const updateScrollProgress = () => {
  const documentElement = document.documentElement
  const scrollableHeight = documentElement.scrollHeight - window.innerHeight

  if (scrollableHeight <= 0) {
    scrollProgress.value = 0
    return
  }

  const currentScroll = window.scrollY || documentElement.scrollTop
  scrollProgress.value = Math.min(1, Math.max(0, currentScroll / scrollableHeight))
}

onMounted(() => {
  updateScrollProgress()
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  window.addEventListener('resize', updateScrollProgress)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollProgress)
  window.removeEventListener('resize', updateScrollProgress)
})
</script>

<template>
  <header class="site-header" :class="{ 'is-at-top': isAtTop }" :style="{ '--scroll-progress': scrollProgress }">
    <AppContainer class="site-header__inner">
      <RouterLink class="site-header__brand" to="/" aria-label="홈으로 이동" @click="closeMenu">
        <span>HEO.D.K</span>
        <strong>UI Developer</strong>
      </RouterLink>

      <button
        class="site-header__toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="site-navigation"
        @click="toggleMenu"
        @keydown.esc="closeMenu"
      >
        <span class="visually-hidden">{{ isOpen ? '메뉴 닫기' : '메뉴 열기' }}</span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <nav id="site-navigation" class="site-header__nav" :class="{ 'is-open': isOpen }" aria-label="주요 메뉴">
        <RouterLink v-for="link in sectionLinks" :key="link.to" :to="link.to" @click="closeMenu">
          {{ link.label }}
        </RouterLink>
        <span class="site-header__divider" aria-hidden="true"></span>
        <a
          v-for="link in externalLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noreferrer noopener"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </nav>
    </AppContainer>

    <div class="site-header__progress" aria-hidden="true">
      <span></span>
    </div>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  min-height: var(--header-height);
  border-bottom: 2px solid var(--color-heading);
  background: rgb(255 255 255 / 94%);
  backdrop-filter: blur(12px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--header-height);
}

.site-header__brand {
  position: relative;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  min-height: 42px;
  padding: 8px 10px;
  color: var(--color-heading);
  font-weight: 950;
  letter-spacing: -0.02em;
  transition:
    padding 180ms ease,
    background-color 180ms ease;
}

.site-header__brand::before,
.site-header__brand::after {
  position: absolute;
  inset: -2px;
  opacity: 0;
  content: '';
  pointer-events: none;
  transition:
    opacity 180ms ease,
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.site-header__brand::before {
  border-top: 2px solid var(--color-heading);
  border-bottom: 2px solid var(--color-heading);
  transform: scale3d(0, 1, 1);
}

.site-header__brand::after {
  border-right: 2px solid var(--color-heading);
  border-left: 2px solid var(--color-heading);
  transform: scale3d(1, 0, 1);
}

.site-header.is-at-top .site-header__brand {
  min-height: 46px;
  padding: 9px 13px;
}

.site-header.is-at-top .site-header__brand:hover::before,
.site-header.is-at-top .site-header__brand:focus-visible::before,
.site-header.is-at-top .site-header__brand:hover::after,
.site-header.is-at-top .site-header__brand:focus-visible::after {
  opacity: 1;
  transform: scale3d(1, 1, 1);
}

.site-header__brand span {
  position: relative;
  z-index: 1;
  font-size: 1rem;
}

.site-header__brand span::after {
  position: absolute;
  right: 0;
  bottom: -7px;
  left: 0;
  height: 4px;
  background: var(--color-warm);
  content: '';
  transform: scaleX(0.75);
  transform-origin: left center;
  transition: transform 180ms ease;
}

.site-header.is-at-top .site-header__brand:hover span::after,
.site-header.is-at-top .site-header__brand:focus-visible span::after {
  transform: scaleX(1);
}

.site-header:not(.is-at-top) .site-header__brand span::after {
  transform: scaleX(0);
}

.site-header__brand strong {
  position: relative;
  z-index: 1;
  color: var(--color-primary-strong);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-header__nav {
  display: flex;
  gap: 3px;
  align-items: center;
}

.site-header__nav a {
  display: inline-flex;
  min-height: 38px;
  align-items: center;
  padding: 0 10px;
  border-radius: 999px;
  color: var(--color-muted);
  font-size: 0.9rem;
  font-weight: 850;
}

.site-header__nav a:hover,
.site-header__nav a:focus-visible,
.site-header__nav a.router-link-active {
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
}

.site-header__divider {
  width: 1px;
  height: 18px;
  margin: 0 8px;
  background: var(--color-border-strong);
}

.site-header__toggle {
  display: none;
  width: 42px;
  height: 42px;
  border: 2px solid var(--color-heading);
  border-radius: 14px;
  background: var(--color-warm);
}

.site-header__toggle span:not(.visually-hidden) {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  border-radius: 2px;
  background: var(--color-heading);
}

.site-header__progress {
  position: absolute;
  right: 0;
  bottom: -5px;
  left: 0;
  height: 5px;
  overflow: hidden;
  background: transparent;
  pointer-events: none;
}

.site-header__progress span {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--color-primary-strong);
  opacity: 0.86;
  transform: scaleX(var(--scroll-progress, 0));
  transform-origin: left center;
  transition: transform 80ms linear;
}

.site-header.is-at-top .site-header__progress span {
  opacity: 0;
}

@media (max-width: 960px) {
  .site-header__brand {
    padding-right: 8px;
    padding-left: 8px;
  }

  .site-header__brand strong {
    display: none;
  }

  .site-header__toggle {
    display: block;
  }

  .site-header__nav {
    position: absolute;
    top: calc(var(--header-height) + 10px);
    right: 12px;
    left: 12px;
    display: none;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    padding: 12px;
    border: 2px solid var(--color-heading);
    border-radius: var(--radius-lg);
    background: var(--color-surface);
    box-shadow: var(--shadow-flat);
  }

  .site-header__nav.is-open {
    display: grid;
  }

  .site-header__divider {
    display: none;
  }

  .site-header__nav a {
    justify-content: center;
    min-height: 44px;
    border: 1px solid var(--color-border);
    border-radius: 12px;
    background: var(--color-surface-strong);
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-header__brand,
  .site-header__brand::before,
  .site-header__brand::after,
  .site-header__brand span::after,
  .site-header__progress span {
    transition: none;
  }
}
</style>
