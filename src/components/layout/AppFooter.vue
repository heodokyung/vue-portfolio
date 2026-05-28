<script setup lang="ts">
import AppContainer from '@/components/common/AppContainer.vue'
import { profile } from '@/data/profile'

const pageLinks = [
  { label: 'Identity', to: '/#identity' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Work', to: '/#work' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Guide', to: '/#guide' },
  { label: 'Contact', to: '/#contact' },
]

const externalLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'Frontend Study', href: 'https://github.com/heodokyung/frontend-study' },
  { label: 'Frontend Guide', href: 'https://github.com/heodokyung/frontend-guide' },
]
</script>

<template>
  <footer class="site-footer" aria-labelledby="site-footer-title">
    <AppContainer class="site-footer__inner">
      <div class="site-footer__brand-block">
        <strong id="site-footer-title">{{ profile.nameKo }} UI Developer Portfolio</strong>
        <p>
          웹표준, 접근성, 반응형 UI, 마크업 컨벤션, Vue·React 화면 구현 경험을 한 페이지 흐름으로 정리한 포트폴리오입니다.
        </p>
      </div>

      <nav class="site-footer__nav" aria-label="푸터 섹션 메뉴">
        <RouterLink v-for="link in pageLinks" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
        <RouterLink to="/projects">Project Archive</RouterLink>
      </nav>

      <div class="site-footer__contact" aria-label="연락처와 외부 링크">
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <a v-for="link in externalLinks" :key="link.href" :href="link.href" target="_blank" rel="noreferrer noopener">
          {{ link.label }}
        </a>
      </div>
    </AppContainer>

    <AppContainer class="site-footer__bottom">
      <p>© {{ new Date().getFullYear() }} {{ profile.name }}. Built with Vue 3, Vite, TypeScript and SCSS.</p>
      <p>Markup Convention · Accessible UI · Responsive Layout</p>
    </AppContainer>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  border-top: 1px solid rgb(255 255 255 / 10%);
  background:
    linear-gradient(90deg, rgb(255 255 255 / 6%) 1px, transparent 1px) 0 0 / 34px 34px,
    var(--color-code-bg);
  color: rgb(226 232 240 / 78%);
}

.site-footer__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.42fr) minmax(160px, 0.52fr) minmax(210px, 0.7fr);
  gap: clamp(24px, 5vw, 52px);
  padding: clamp(34px, 6vw, 58px) 0 28px;
}

.site-footer__brand-block {
  display: grid;
  gap: 10px;
}

.site-footer__brand-block strong {
  color: #fff;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  letter-spacing: -0.04em;
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
  color: rgb(226 232 240 / 76%);
  font-weight: 800;
}

.site-footer__nav a:hover,
.site-footer__contact a:hover {
  color: var(--color-warm);
}

.site-footer__bottom {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 28px;
  border-top: 1px solid rgb(255 255 255 / 10%);
  color: rgb(226 232 240 / 62%);
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
