<script setup lang="ts">
import AppContainer from '@/components/common/AppContainer.vue'
import { ref } from 'vue'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <AppContainer class="site-header__inner">
      <RouterLink class="site-header__brand" to="/" @click="closeMenu" aria-label="홈으로 이동">
        HDK<span>Portfolio</span>
      </RouterLink>
      <button
        class="site-header__toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="site-navigation"
        @click="isOpen = !isOpen"
      >
        <span class="visually-hidden">메뉴 열기</span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <nav id="site-navigation" class="site-header__nav" :class="{ 'is-open': isOpen }" aria-label="주요 메뉴">
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/projects" @click="closeMenu">Projects</RouterLink>
        <RouterLink to="/about" @click="closeMenu">About</RouterLink>
        <a href="https://github.com/heodokyung" target="_blank" rel="noreferrer noopener" @click="closeMenu">GitHub</a>
      </nav>
    </AppContainer>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  min-height: var(--header-height);
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
  background: color-mix(in srgb, var(--color-bg) 88%, transparent);
  backdrop-filter: blur(18px);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--header-height);
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-heading);
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.site-header__brand span {
  color: var(--color-primary);
  font-size: 0.86rem;
  letter-spacing: 0;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.site-header__nav a {
  min-height: 40px;
  padding: 8px 12px;
  border-radius: 999px;
  color: var(--color-muted);
  font-size: 0.94rem;
  font-weight: 800;
}

.site-header__nav a:hover,
.site-header__nav a.router-link-active {
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
}

.site-header__toggle {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}

.site-header__toggle span:not(.visually-hidden) {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  border-radius: 2px;
  background: var(--color-heading);
}

@media (max-width: 760px) {
  .site-header__toggle {
    display: block;
  }

  .site-header__nav {
    position: absolute;
    top: calc(var(--header-height) - 4px);
    right: 12px;
    left: 12px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 12px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background: var(--color-surface);
    box-shadow: var(--shadow-card);
  }

  .site-header__nav.is-open {
    display: flex;
  }
}
</style>
