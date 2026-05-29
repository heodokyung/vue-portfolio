<script setup lang="ts">
import AppContainer from '@/components/common/AppContainer.vue'
import { profile } from '@/data/profile'

const pageLinks = [
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
</script>

<template>
  <footer class="site-footer" aria-labelledby="site-footer-title">
    <AppContainer class="site-footer__inner">
      <div class="site-footer__brand-block">
        <strong id="site-footer-title">{{ profile.nameKo }} · UI Developer</strong>
        <p>백엔드 개발 경험에서 출발해 웹표준, 접근성, 반응형 UI, Vue·React 화면 구현까지 이어온 작업을 담았습니다.</p>
      </div>

      <nav class="site-footer__nav" aria-label="푸터 섹션 메뉴">
        <RouterLink v-for="link in pageLinks" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
      </nav>

      <div class="site-footer__contact" aria-label="연락처와 외부 링크">
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <a v-for="link in externalLinks" :key="link.href" :href="link.href" target="_blank" rel="noreferrer noopener">
          {{ link.label }}
        </a>
      </div>
    </AppContainer>

    <AppContainer class="site-footer__bottom">
      <p>© {{ new Date().getFullYear() }} {{ profile.name }}.</p>
      <p>Semantic Markup · Accessible UI · Responsive Layout</p>
    </AppContainer>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  border-top: 2px solid var(--color-heading);
  background: var(--color-surface);
  color: var(--color-muted);
}

.site-footer__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(150px, 0.45fr) minmax(220px, 0.7fr);
  gap: clamp(24px, 5vw, 52px);
  padding: clamp(34px, 6vw, 58px) 0 28px;
}

.site-footer__brand-block {
  display: grid;
  gap: 10px;
}

.site-footer__brand-block strong {
  color: var(--color-heading);
  font-size: clamp(1.15rem, 2vw, 1.42rem);
  letter-spacing: -0.04em;
}

.site-footer__brand-block p {
  max-width: 650px;
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
  color: var(--color-heading);
  font-weight: 850;
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
  border-top: 1px solid var(--color-border);
  color: var(--color-muted);
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
