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
const workProjectCount = projects.filter((project) => project.category === 'work').length
const coreSkills = skills.filter((skill) => ['frontend', 'workflow'].includes(skill.group)).slice(0, 8)
const recentCareers = careers.slice(0, 3)

const heroStats = [
  { label: '실무 프로젝트', value: `${workProjectCount}+`, description: '운영·개편 중심 경험' },
  { label: '대표 프로젝트', value: `${featuredProjects.length}`, description: 'Vue/React/반응형 사례' },
  { label: '핵심 역량', value: '4', description: '표준·접근성·SCSS·컴포넌트' },
]

const heroChecklist = ['시맨틱 마크업', '공통 컴포넌트', '반응형 UI', '운영 가능한 SCSS']

const strengthItems = [
  {
    title: '웹표준과 접근성',
    description: '시맨틱 구조, 키보드 이동, 대체 텍스트, 색 대비를 화면 설계 단계에서 함께 점검합니다.',
  },
  {
    title: 'SCSS/CSS 구조화',
    description: '반복되는 스타일을 토큰과 공통 패턴으로 정리해 유지보수 비용을 낮춥니다.',
  },
  {
    title: 'Vue3/React UI 개발',
    description: '데이터와 화면을 분리하고 재사용 가능한 컴포넌트 단위로 UI를 구현합니다.',
  },
  {
    title: '운영·개편·협업 경험',
    description: '커머스, 금융, 공공 프로젝트에서 기존 화면을 안정적으로 개선한 경험이 있습니다.',
  },
]
</script>

<template>
  <section class="hero" aria-labelledby="home-hero-title">
    <AppContainer class="hero__inner">
      <div class="hero__content">
        <p class="hero__eyebrow">{{ profile.role }}</p>
        <h1 id="home-hero-title">{{ profile.headline }}</h1>
        <p class="hero__description">{{ profile.description }}</p>

        <div class="hero__actions" aria-label="주요 이동 링크">
          <AppButton to="/projects" size="lg">프로젝트 보기</AppButton>
          <AppButton :href="profile.github" variant="ghost" size="lg">GitHub 보기</AppButton>
          <AppButton :href="`mailto:${profile.email}`" variant="subtle" size="lg">Contact</AppButton>
        </div>

        <dl class="hero__stats" aria-label="포트폴리오 요약 지표">
          <div v-for="stat in heroStats" :key="stat.label" class="hero__stat">
            <dt>{{ stat.label }}</dt>
            <dd>{{ stat.value }}</dd>
            <span>{{ stat.description }}</span>
          </div>
        </dl>
      </div>

      <aside class="hero__panel" aria-labelledby="hero-panel-title">
        <div class="hero__panel-head">
          <p class="hero__panel-kicker">Portfolio System</p>
          <h2 id="hero-panel-title">운영 가능한 UI 구조</h2>
          <p>프로젝트 데이터, 공통 컴포넌트, 반응형 스타일을 분리해 확장 가능한 포트폴리오로 구성합니다.</p>
        </div>

        <ul class="hero__checklist" aria-label="핵심 구현 기준">
          <li v-for="item in heroChecklist" :key="item">{{ item }}</li>
        </ul>

        <div class="hero__keywords" aria-label="주요 키워드">
          <span v-for="keyword in profile.keywords" :key="keyword">{{ keyword }}</span>
        </div>
      </aside>
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
        <article v-for="item in strengthItems" :key="item.title">
          <strong>{{ item.title }}</strong>
          <p>{{ item.description }}</p>
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
  isolation: isolate;
  overflow: hidden;
  padding: clamp(72px, 10vw, 136px) 0 clamp(56px, 8vw, 112px);
  background:
    radial-gradient(circle at 82% 20%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 30%),
    linear-gradient(180deg, color-mix(in srgb, var(--color-primary-soft) 42%, var(--color-bg)), var(--color-bg) 78%);
}

.hero::before,
.hero::after {
  position: absolute;
  z-index: -1;
  border-radius: 999px;
  content: '';
}

.hero::before {
  top: 10%;
  right: max(-180px, -10vw);
  width: min(48vw, 560px);
  height: min(48vw, 560px);
  background: radial-gradient(circle, color-mix(in srgb, var(--color-accent) 20%, transparent), transparent 68%);
}

.hero::after {
  bottom: -220px;
  left: max(-220px, -14vw);
  width: min(52vw, 620px);
  height: min(52vw, 620px);
  background: radial-gradient(circle, color-mix(in srgb, var(--color-primary) 14%, transparent), transparent 70%);
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.16fr) minmax(320px, 0.84fr);
  gap: clamp(32px, 6vw, 78px);
  align-items: center;
}

.hero__content,
.hero__panel,
.hero__panel-head {
  display: grid;
}

.hero__content {
  gap: 24px;
}

.hero__eyebrow,
.hero__panel-kicker {
  color: var(--color-primary-strong);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 880px;
  color: var(--color-heading);
  font-size: clamp(2.45rem, 6.8vw, 5.1rem);
  line-height: 1.04;
  letter-spacing: -0.075em;
}

.hero__description {
  max-width: 690px;
  color: var(--color-muted);
  font-size: clamp(1.05rem, 2vw, 1.24rem);
  line-height: 1.78;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  max-width: 760px;
  margin-top: 8px;
}

.hero__stat {
  min-width: 0;
  padding: 18px;
  border: 1px solid color-mix(in srgb, var(--color-border) 80%, transparent);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
  box-shadow: var(--shadow-soft);
}

.hero__stat dt {
  color: var(--color-muted);
  font-size: 0.82rem;
  font-weight: 800;
}

.hero__stat dd {
  margin-top: 6px;
  color: var(--color-heading);
  font-size: clamp(1.45rem, 3vw, 2.1rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
}

.hero__stat span {
  display: block;
  margin-top: 8px;
  color: var(--color-muted);
  font-size: 0.82rem;
  line-height: 1.45;
}

.hero__panel {
  gap: 22px;
  padding: clamp(22px, 4vw, 34px);
  border: 1px solid color-mix(in srgb, var(--color-border) 90%, transparent);
  border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
  box-shadow: var(--shadow-card);
  backdrop-filter: blur(18px);
}

.hero__panel-head {
  gap: 10px;
}

.hero__panel-head h2 {
  color: var(--color-heading);
  font-size: clamp(1.45rem, 3vw, 2rem);
  letter-spacing: -0.05em;
}

.hero__panel-head p:last-child {
  color: var(--color-muted);
  line-height: 1.7;
}

.hero__checklist {
  display: grid;
  gap: 10px;
}

.hero__checklist li {
  position: relative;
  min-height: 44px;
  padding: 12px 14px 12px 42px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-heading);
  font-weight: 850;
}

.hero__checklist li::before {
  position: absolute;
  top: 50%;
  left: 14px;
  display: grid;
  width: 18px;
  height: 18px;
  place-items: center;
  transform: translateY(-50%);
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
  font-size: 0.75rem;
  font-weight: 900;
  content: '✓';
}

.hero__keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 2px;
}

.hero__keywords span {
  padding: 8px 11px;
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
  font-size: 0.82rem;
  font-weight: 800;
}

.strength-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
  line-height: 1.68;
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

@media (max-width: 1080px) {
  .strength-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .hero__inner,
  .skill-list {
    grid-template-columns: 1fr;
  }

  .hero__panel {
    order: -1;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 52px;
  }

  .hero__stats,
  .strength-grid {
    grid-template-columns: 1fr;
  }

  .section-head-row {
    display: grid;
  }
}
</style>
