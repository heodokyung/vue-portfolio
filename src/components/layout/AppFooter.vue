<script setup lang="ts">
import AppContainer from '@/components/common/AppContainer.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <footer class="site-footer" aria-labelledby="site-footer-title">
    <AppContainer class="site-footer__inner">
      <div class="site-footer__brand-block">
        <strong id="site-footer-title">{{ profile.nameKo }} Portfolio</strong>
        <p>{{ profile.description }}</p>
      </div>

      <nav class="site-footer__nav" aria-label="푸터 메뉴">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#contact' }">Contact</RouterLink>
      </nav>

      <div class="site-footer__contact" aria-label="연락처와 외부 링크">
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <a :href="profile.github" target="_blank" rel="noreferrer noopener">GitHub</a>
      </div>
    </AppContainer>

    <AppContainer class="site-footer__bottom">
      <p>© {{ new Date().getFullYear() }} {{ profile.name }}. Built with Vue 3, Vite, TypeScript and SCSS.</p>
      <p>웹표준 · 접근성 · 반응형 UI를 기준으로 정리한 포트폴리오입니다.</p>
    </AppContainer>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  border-top: 1px solid var(--color-border);
  background: linear-gradient(180deg, var(--color-surface), color-mix(in srgb, var(--color-primary-soft) 24%, var(--color-surface)));
}

.site-footer__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(160px, 0.55fr) minmax(190px, 0.65fr);
  gap: clamp(24px, 5vw, 52px);
  padding: clamp(34px, 6vw, 58px) 0 28px;
}

.site-footer__brand-block {
  display: grid;
  gap: 10px;
}

.site-footer__brand-block strong {
  color: var(--color-heading);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  letter-spacing: -0.04em;
}

.site-footer__brand-block p,
.site-footer__bottom {
  color: var(--color-muted);
}

.site-footer__brand-block p {
  max-width: 620px;
  line-height: 1.75;
}

.site-footer__nav,
.site-footer__contact {
  display: grid;
  align-content: start;
  gap: 10px;
}

.site-footer__nav a,
.site-footer__contact a {
  width: fit-content;
  min-height: 34px;
  color: var(--color-muted);
  font-weight: 800;
}

.site-footer__nav a:hover,
.site-footer__contact a:hover {
  color: var(--color-primary-strong);
}

.site-footer__bottom {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 28px;
  border-top: 1px solid color-mix(in srgb, var(--color-border) 74%, transparent);
  font-size: 0.88rem;
}

@media (max-width: 860px) {
  .site-footer__inner {
    grid-template-columns: 1fr 1fr;
  }

  .site-footer__brand-block {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .site-footer__inner,
  .site-footer__bottom {
    display: grid;
  }

  .site-footer__inner {
    grid-template-columns: 1fr;
  }
}
</style>
