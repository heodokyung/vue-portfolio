<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
import AppSectionTitle from '@/components/common/AppSectionTitle.vue'
import ProjectGrid from '@/components/project/ProjectGrid.vue'
import { careers } from '@/data/careers'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

const featuredProjects = projects.filter((project) => project.featured).slice(0, 6)
const coreSkills = skills.filter((skill) => ['frontend', 'workflow'].includes(skill.group)).slice(0, 8)
const recentCareers = careers.slice(0, 3)
</script>

<template>
  <section class="hero">
    <AppContainer class="hero__inner">
      <div class="hero__content">
        <p class="hero__eyebrow">{{ profile.role }}</p>
        <h1>{{ profile.headline }}</h1>
        <p>{{ profile.description }}</p>
        <div class="hero__actions">
          <AppButton to="/projects" size="lg">프로젝트 보기</AppButton>
          <AppButton :href="profile.github" variant="ghost" size="lg">GitHub 보기</AppButton>
        </div>
      </div>
      <div class="hero__panel" aria-label="핵심 역량 요약">
        <span v-for="keyword in profile.keywords" :key="keyword">{{ keyword }}</span>
      </div>
    </AppContainer>
  </section>

  <AppSection>
    <AppContainer>
      <AppSectionTitle
        eyebrow="Strength"
        title="화면을 그리는 것보다 운영 가능한 UI 구조를 중요하게 봅니다."
        description="반복되는 버튼, 타이틀, 카드, 리스트 구조는 공통 컴포넌트로 정리하고, 접근성과 반응형을 초기 설계 단계에서 함께 고려합니다."
      />
      <div class="strength-grid">
        <article>
          <strong>UI 구조화</strong>
          <p>프로젝트별로 흩어진 UI를 공통 컴포넌트와 스타일 토큰으로 정리합니다.</p>
        </article>
        <article>
          <strong>웹표준/접근성</strong>
          <p>시맨틱 마크업, 키보드 접근, 대체 텍스트, 색 대비를 함께 점검합니다.</p>
        </article>
        <article>
          <strong>운영/개편 경험</strong>
          <p>커머스, 금융, 공공 프로젝트에서 운영 중인 화면 개선과 신규 구축을 경험했습니다.</p>
        </article>
      </div>
    </AppContainer>
  </AppSection>

  <AppSection tone="surface">
    <AppContainer>
      <div class="section-head-row">
        <AppSectionTitle eyebrow="Featured" title="대표 프로젝트" />
        <AppButton to="/projects" variant="subtle">전체 보기</AppButton>
      </div>
      <ProjectGrid :projects="featuredProjects" />
    </AppContainer>
  </AppSection>

  <AppSection>
    <AppContainer>
      <AppSectionTitle eyebrow="Stack" title="주요 기술과 협업 도구" />
      <ul class="skill-list">
        <li v-for="skill in coreSkills" :key="skill.id">
          <img v-if="skill.image" :src="skill.image" :alt="`${skill.name} 아이콘`" loading="lazy" />
          <div>
            <strong>{{ skill.name }}</strong>
            <p>{{ skill.summary }}</p>
          </div>
        </li>
      </ul>
    </AppContainer>
  </AppSection>

  <AppSection tone="surface">
    <AppContainer>
      <AppSectionTitle eyebrow="Career" title="최근 경력 요약" />
      <ol class="career-list">
        <li v-for="career in recentCareers" :key="career.id">
          <span>{{ career.period }}</span>
          <strong>{{ career.company }}</strong>
          <p>{{ career.summary }}</p>
        </li>
      </ol>
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  overflow: hidden;
  padding: clamp(72px, 10vw, 132px) 0;
}

.hero::before {
  position: absolute;
  inset: -20% 0 auto auto;
  width: min(52vw, 560px);
  height: min(52vw, 560px);
  border-radius: 999px;
  background: radial-gradient(circle, color-mix(in srgb, var(--color-primary) 22%, transparent), transparent 68%);
  content: '';
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.7fr);
  gap: clamp(32px, 6vw, 72px);
  align-items: center;
}

.hero__content {
  display: grid;
  gap: 22px;
}

.hero__eyebrow {
  color: var(--color-primary);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 860px;
  color: var(--color-heading);
  font-size: clamp(2.4rem, 7vw, 5rem);
  line-height: 1.05;
  letter-spacing: -0.07em;
}

.hero__content > p:not(.hero__eyebrow) {
  max-width: 680px;
  color: var(--color-muted);
  font-size: clamp(1.05rem, 2vw, 1.22rem);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero__panel {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: flex-start;
  padding: clamp(22px, 4vw, 32px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--color-surface) 86%, transparent);
  box-shadow: var(--shadow-card);
}

.hero__panel span {
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
  font-weight: 800;
}

.strength-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.strength-grid article,
.career-list li,
.skill-list li {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.strength-grid article {
  padding: 24px;
}

.strength-grid strong,
.career-list strong,
.skill-list strong {
  display: block;
  margin-bottom: 8px;
  color: var(--color-heading);
  font-size: 1.08rem;
}

.strength-grid p,
.career-list p,
.skill-list p {
  color: var(--color-muted);
}

.section-head-row {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;
}

.skill-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.skill-list li {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 16px;
  align-items: center;
  padding: 18px;
}

.skill-list img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.career-list {
  display: grid;
  gap: 14px;
}

.career-list li {
  padding: 20px;
}

.career-list span {
  display: block;
  margin-bottom: 4px;
  color: var(--color-primary);
  font-weight: 800;
}

@media (max-width: 900px) {
  .hero__inner,
  .strength-grid,
  .skill-list {
    grid-template-columns: 1fr;
  }
}
</style>
