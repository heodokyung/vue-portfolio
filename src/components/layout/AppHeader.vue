<script setup lang="ts">
import AppContainer from '@/components/common/AppContainer.vue'
import { profile } from '@/data/profile'
import { ref } from 'vue'

const isOpen = ref(false)

const primaryLinks = [
  { label: 'Identity', to: '/#identity' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Work', to: '/#work' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Guide', to: '/#guide' },
  { label: 'Contact', to: '/#contact' },
]

const externalLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'Study', href: 'https://github.com/heodokyung/frontend-study' },
  { label: 'UI Guide', href: 'https://github.com/heodokyung/frontend-guide' },
]

const closeMenu = () => {
  isOpen.value = false
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="site-header">
    <AppContainer class="site-header__inner">
      <RouterLink class="site-header__brand" to="/" aria-label="홈으로 이동" @click="closeMenu">
        <span aria-hidden="true">HDK</span>
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
        <div class="site-header__nav-group" aria-label="페이지 섹션">
          <RouterLink v-for="link in primaryLinks" :key="link.to" :to="link.to" @click="closeMenu">
            {{ link.label }}
          </RouterLink>
        </div>
        <div class="site-header__nav-group site-header__nav-group--external" aria-label="외부 링크">
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
        </div>
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
  border-bottom: 1px solid rgb(255 255 255 / 10%);
  background: color-mix(in srgb, var(--color-code-bg) 92%, transparent);
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
  gap: 10px;
  color: #fff;
  font-size: 1rem;
  font-weight: 950;
  letter-spacing: -0.03em;
}

.site-header__brand span {
  display: grid;
  min-width: 46px;
  min-height: 36px;
  place-items: center;
  border: 1px solid rgb(255 255 255 / 22%);
  border-radius: 8px;
  background: rgb(255 255 255 / 6%);
  color: var(--color-warm);
  font-size: 0.94rem;
  letter-spacing: 0.06em;
}

.site-header__brand strong {
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-header__nav,
.site-header__nav-group {
  display: flex;
  align-items: center;
}

.site-header__nav {
  gap: 12px;
}

.site-header__nav-group {
  gap: 4px;
}

.site-header__nav-group--external {
  position: relative;
  padding-left: 12px;
}

.site-header__nav-group--external::before {
  position: absolute;
  top: 50%;
  left: 0;
  width: 1px;
  height: 18px;
  background: rgb(255 255 255 / 18%);
  content: '';
  transform: translateY(-50%);
}

.site-header__nav a {
  min-height: 38px;
  padding: 8px 10px;
  border-radius: 999px;
  color: rgb(226 232 240 / 76%);
  font-size: 0.84rem;
  font-weight: 850;
}

.site-header__nav a:hover,
.site-header__nav a.router-link-active {
  background: rgb(255 255 255 / 9%);
  color: #fff;
}

.site-header__nav-group--external a:hover {
  color: var(--color-warm);
}

.site-header__toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: 999px;
  background: rgb(255 255 255 / 8%);
}

.site-header__toggle span:not(.visually-hidden) {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  border-radius: 2px;
  background: #fff;
}

@media (max-width: 1080px) {
  .site-header__brand strong {
    display: none;
  }

  .site-header__nav a {
    padding-inline: 8px;
  }
}

@media (max-width: 860px) {
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
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: var(--radius-lg);
    background: var(--color-code-bg);
    box-shadow: var(--shadow-card);
  }

  .site-header__nav.is-open {
    display: flex;
  }

  .site-header__nav-group {
    display: grid;
    gap: 4px;
  }

  .site-header__nav-group--external {
    padding-top: 10px;
    padding-left: 0;
    border-top: 1px solid rgb(255 255 255 / 12%);
  }

  .site-header__nav-group--external::before {
    display: none;
  }

  .site-header__nav a {
    display: flex;
    align-items: center;
    min-height: 46px;
  }
}
</style>
