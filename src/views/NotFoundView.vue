<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
import { profile } from '@/data/profile'

const helpfulLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]
</script>

<template>
  <AppSection>
    <AppContainer class="not-found">
      <div class="not-found__visual" aria-hidden="true">
        <span>404</span>
        <i></i>
      </div>

      <div class="not-found__content">
        <p class="not-found__eyebrow">Page not found</p>
        <h1>페이지를 찾을 수 없습니다.</h1>
        <p class="not-found__description">
          주소가 변경되었거나 아직 신규 Vue 포트폴리오로 이관되지 않은 페이지입니다. 아래 링크로 이동하거나
          문의가 필요하면 메일을 보내 주세요.
        </p>

        <div class="not-found__actions">
          <AppButton to="/">홈으로 이동</AppButton>
          <AppButton to="/projects" variant="ghost">프로젝트 보기</AppButton>
          <AppButton :href="`mailto:${profile.email}`" variant="subtle">문의하기</AppButton>
        </div>

        <nav class="not-found__links" aria-label="추천 이동 링크">
          <RouterLink v-for="link in helpfulLinks" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
        </nav>
      </div>
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
.not-found {
  display: grid;
  grid-template-columns: minmax(240px, 0.78fr) minmax(0, 1fr);
  min-height: 58vh;
  gap: clamp(24px, 5vw, 64px);
  align-items: center;
}

.not-found__visual {
  position: relative;
  display: grid;
  min-height: clamp(220px, 34vw, 360px);
  place-items: center;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-primary) 18%, var(--color-border));
  border-radius: var(--radius-xl);
  background:
    radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent 34%),
    linear-gradient(135deg, color-mix(in srgb, var(--color-primary-soft) 78%, var(--color-surface)), var(--color-surface));
  box-shadow: var(--shadow-card);
}

.not-found__visual span {
  color: color-mix(in srgb, var(--color-primary-strong) 84%, var(--color-heading));
  font-size: clamp(4rem, 16vw, 9rem);
  font-weight: 950;
  line-height: 1;
  letter-spacing: -0.1em;
}

.not-found__visual i {
  position: absolute;
  right: -54px;
  bottom: -54px;
  width: 156px;
  height: 156px;
  border: 24px solid color-mix(in srgb, var(--color-primary) 18%, transparent);
  border-radius: 999px;
}

.not-found__content {
  display: grid;
  gap: 18px;
}

.not-found__eyebrow {
  color: var(--color-primary-strong);
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.not-found h1 {
  color: var(--color-heading);
  font-size: clamp(2.1rem, 5vw, 4rem);
  line-height: 1.1;
  letter-spacing: -0.06em;
}

.not-found__description {
  max-width: 680px;
  color: var(--color-muted);
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.78;
}

.not-found__actions,
.not-found__links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.not-found__actions {
  margin-top: 8px;
}

.not-found__links {
  margin-top: 8px;
  padding-top: 18px;
  border-top: 1px solid var(--color-border);
}

.not-found__links a {
  min-height: 38px;
  padding: 7px 12px;
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
  font-weight: 850;
}

@media (max-width: 820px) {
  .not-found {
    grid-template-columns: 1fr;
  }
}
</style>
