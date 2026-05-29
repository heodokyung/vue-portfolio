<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
import AppSectionTitle from '@/components/common/AppSectionTitle.vue'
import AppTagList from '@/components/common/AppTagList.vue'
import { aboutItems } from '@/data/about'
import { careers } from '@/data/careers'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend UI',
    description: 'Vue, React, TypeScript, JavaScript를 활용해 데이터와 화면 구조를 분리한 UI를 구현합니다.',
    items: skills.filter((skill) => skill.group === 'frontend'),
  },
  {
    id: 'workflow',
    title: 'Workflow',
    description: 'Git 기반 형상관리, Jira/Confluence 기반 이슈 추적, 운영 배포 흐름을 이해하고 협업합니다.',
    items: skills.filter((skill) => skill.group === 'workflow'),
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: '디자인 산출물, 요구사항, 운영 이슈를 화면 구현 기준으로 정리해 커뮤니케이션합니다.',
    items: skills.filter((skill) => skill.group === 'collaboration'),
  },
]

const aboutStats = [
  { label: '경력 구간', value: `${careers.length}`, description: '운영·개편·구축 경험' },
  { label: '실무 프로젝트', value: `${projects.filter((project) => project.category === 'work').length}+`, description: '커머스·금융·공공' },
  { label: '대표 사례', value: `${projects.filter((project) => project.featured).length}`, description: '상세 케이스 스터디' },
]

const workingPrinciples = [
  {
    title: '구조 먼저 설계합니다',
    description: '화면을 빠르게 만드는 것보다 데이터, 컴포넌트, 스타일 책임을 분리해 이후 수정 비용을 줄이는 방식을 선호합니다.',
  },
  {
    title: '접근성과 반응형을 기본값으로 둡니다',
    description: '시맨틱 마크업, 키보드 이동, 대체 텍스트, 모바일 터치 영역을 초기 구현 단계부터 함께 확인합니다.',
  },
  {
    title: '운영 환경의 안정성을 봅니다',
    description: 'Jira, Slack, GitLab, Jenkins 같은 협업·배포 흐름 안에서 이슈 대응과 히스토리 관리까지 고려합니다.',
  },
]

const primaryCareers = careers

const getAboutTypeLabel = (type: string) => {
  if (type === 'certificate') return '자격증'
  if (type === 'activity') return '활동'
  return '교육'
}

const getAboutTypeClass = (type: string) => `about-card-list__type about-card-list__type--${type}`

const getSkillInitials = (name: string) =>
  name
    .replace(/&/g, ' ')
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
</script>

<template>
  <section class="about-hero" aria-labelledby="about-hero-title">
    <AppContainer class="about-hero__inner">
      <div class="about-hero__content">
        <p class="about-hero__eyebrow">About</p>
        <h1 id="about-hero-title">{{ profile.nameKo }} / {{ profile.role }}</h1>
        <p>{{ profile.description }}</p>

        <div class="about-hero__actions" aria-label="프로필 주요 링크">
          <AppButton to="/projects">프로젝트 보기</AppButton>
          <AppButton :href="`mailto:${profile.email}`" variant="subtle">메일 보내기</AppButton>
        </div>

        <AppTagList :items="profile.keywords" />
      </div>

      <aside class="about-hero__panel" aria-labelledby="about-panel-title">
        <h2 id="about-panel-title">작업 기준</h2>
        <ul>
          <li v-for="principle in workingPrinciples" :key="principle.title">
            <strong>{{ principle.title }}</strong>
            <span>{{ principle.description }}</span>
          </li>
        </ul>
      </aside>
    </AppContainer>
  </section>

  <AppSection>
    <AppContainer>
      <dl class="about-stats" aria-label="경력 요약 지표">
        <div v-for="stat in aboutStats" :key="stat.label">
          <dt>{{ stat.label }}</dt>
          <dd>{{ stat.value }}</dd>
          <span>{{ stat.description }}</span>
        </div>
      </dl>
    </AppContainer>
  </AppSection>

  <AppSection tone="surface">
    <AppContainer>
      <AppSectionTitle
        eyebrow="Career"
        title="백엔드 개발부터 UI 개발까지 이어온 경력입니다."
        description="Java·ASP 기반 웹 개발, 웹표준과 접근성 중심의 퍼블리싱, 금융·커머스 UI 운영과 Vue·React 화면 구현까지의 흐름을 모두 담았습니다."
      />

      <ol class="career-timeline">
        <li v-for="career in primaryCareers" :key="career.id" class="career-timeline__item">
          <div class="career-timeline__period">{{ career.period }}</div>
          <article class="career-timeline__card">
            <div class="career-timeline__head">
              <div>
                <h3>{{ career.company }}</h3>
                <p v-if="career.department || career.position">
                  <span v-if="career.department">{{ career.department }}</span>
                  <span v-if="career.department && career.position"> · </span>
                  <span v-if="career.position">{{ career.position }}</span>
                </p>
              </div>
            </div>
            <p class="career-timeline__summary">{{ career.summary }}</p>
            <ul class="career-timeline__highlights" aria-label="주요 역할">
              <li v-for="highlight in career.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </article>
        </li>
      </ol>
    </AppContainer>
  </AppSection>

  <AppSection>
    <AppContainer>
      <AppSectionTitle
        eyebrow="Skills"
        title="화면 구현, 스타일 구조화, 협업 흐름을 함께 다룹니다."
        description="기술 목록을 단순 나열하지 않고 실제 업무에서 어떤 기준으로 사용하는지 드러나도록 정리했습니다."
      />

      <div class="skill-matrix">
        <article v-for="group in skillGroups" :key="group.id" class="skill-matrix__group">
          <div class="skill-matrix__head">
            <h3>{{ group.title }}</h3>
            <p>{{ group.description }}</p>
          </div>
          <ul>
            <li v-for="skill in group.items" :key="skill.id">
              <img v-if="skill.image" :src="skill.image" :alt="`${skill.name} 아이콘`" loading="lazy" />
              <span v-else class="skill-matrix__fallback" aria-hidden="true">{{ getSkillInitials(skill.name) }}</span>
              <div>
                <strong>{{ skill.name }}</strong>
                <span>{{ skill.summary }}</span>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </AppContainer>
  </AppSection>

  <AppSection tone="surface">
    <AppContainer>
      <AppSectionTitle
        eyebrow="History"
        title="자격, 교육, 접근성 활동 전체 이력"
        description="웹표준과 접근성 기반을 쌓아온 이력과 프론트엔드 학습 이력을 함께 정리했습니다."
      />
      <div class="about-card-list">
        <article v-for="item in aboutItems" :key="item.id">
          <span :class="getAboutTypeClass(item.type)">{{ getAboutTypeLabel(item.type) }}</span>
          <h3>{{ item.title }}</h3>
          <p v-if="item.period" class="about-card-list__meta">{{ item.period }}</p>
          <p v-if="item.organization" class="about-card-list__meta">{{ item.organization }}</p>
          <p v-if="item.summary">{{ item.summary }}</p>
          <div v-if="item.links?.length || item.url" class="about-card-list__links" aria-label="관련 링크">
            <a v-if="item.url" :href="item.url" target="_blank" rel="noreferrer noopener">관련 링크</a>
            <a
              v-for="link in item.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer noopener"
            >
              {{ link.label }}
            </a>
          </div>
        </article>
      </div>
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
.about-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(64px, 9vw, 124px) 0 clamp(48px, 7vw, 92px);
  background:
    linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px) 0 0 / 40px 40px,
    linear-gradient(0deg, var(--color-grid-line) 1px, transparent 1px) 0 0 / 40px 40px,
    var(--color-bg-soft);
}

.about-hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
  gap: clamp(28px, 6vw, 72px);
  align-items: center;
}

.about-hero__content {
  display: grid;
  gap: 22px;
}

.about-hero__eyebrow {
  color: var(--color-primary-strong);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-hero h1 {
  max-width: 820px;
  color: var(--color-heading);
  font-size: clamp(2.2rem, 5.8vw, 4.6rem);
  line-height: 1.08;
  letter-spacing: -0.07em;
}

.about-hero__content > p:not(.about-hero__eyebrow) {
  max-width: 720px;
  color: var(--color-muted);
  font-size: clamp(1.04rem, 2vw, 1.2rem);
  line-height: 1.78;
}

.about-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.about-hero__panel {
  padding: clamp(22px, 4vw, 32px);
  border: 1px solid color-mix(in srgb, var(--color-border) 88%, transparent);
  border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
  box-shadow: var(--shadow-card);
  backdrop-filter: blur(18px);
}

.about-hero__panel h2 {
  margin-bottom: 18px;
  color: var(--color-heading);
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  letter-spacing: -0.04em;
}

.about-hero__panel ul {
  display: grid;
  gap: 12px;
}

.about-hero__panel li {
  display: grid;
  gap: 6px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
}

.about-hero__panel strong {
  color: var(--color-primary-strong);
  font-weight: 900;
}

.about-hero__panel span {
  color: var(--color-muted);
  font-size: 0.92rem;
  line-height: 1.62;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.about-stats div,
.career-timeline__card,
.skill-matrix__group,
.about-card-list article {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.about-stats div {
  padding: 22px;
}

.about-stats dt {
  color: var(--color-muted);
  font-size: 0.86rem;
  font-weight: 800;
}

.about-stats dd {
  margin-top: 8px;
  color: var(--color-heading);
  font-size: clamp(1.7rem, 4vw, 2.5rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
}

.about-stats span {
  display: block;
  margin-top: 10px;
  color: var(--color-muted);
  line-height: 1.5;
}

.career-timeline {
  display: grid;
  gap: 18px;
}

.career-timeline__item {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
}

.career-timeline__period {
  position: sticky;
  top: calc(var(--header-height) + 18px);
  padding: 12px 0;
  color: var(--color-primary-strong);
  font-size: 0.9rem;
  font-weight: 900;
}

.career-timeline__card {
  display: grid;
  gap: 16px;
  padding: clamp(20px, 4vw, 30px);
}

.career-timeline__head {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;
}

.career-timeline h3 {
  color: var(--color-heading);
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  letter-spacing: -0.035em;
}

.career-timeline__head p {
  margin-top: 6px;
  color: var(--color-muted);
  font-weight: 800;
}

.career-timeline__summary {
  color: var(--color-muted);
  line-height: 1.75;
}

.career-timeline__highlights {
  display: grid;
  gap: 9px;
}

.career-timeline__highlights li {
  position: relative;
  padding-left: 20px;
  color: var(--color-text);
  line-height: 1.65;
}

.career-timeline__highlights li::before {
  position: absolute;
  top: 0.72em;
  left: 0;
  width: 7px;
  height: 7px;
  transform: translateY(-50%);
  border-radius: 999px;
  background: var(--color-primary);
  content: '';
}

.skill-matrix {
  display: grid;
  gap: 18px;
}

.skill-matrix__group {
  display: grid;
  grid-template-columns: minmax(220px, 0.34fr) minmax(0, 1fr);
  gap: 20px;
  padding: clamp(20px, 4vw, 28px);
}

.skill-matrix__head h3 {
  color: var(--color-heading);
  font-size: 1.2rem;
  letter-spacing: -0.03em;
}

.skill-matrix__head p {
  margin-top: 8px;
  color: var(--color-muted);
  line-height: 1.65;
}

.skill-matrix ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.skill-matrix li {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding: 14px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface-strong);
}

.skill-matrix img,
.skill-matrix__fallback {
  width: 42px;
  height: 42px;
}

.skill-matrix img {
  object-fit: contain;
}

.skill-matrix__fallback {
  display: grid;
  place-items: center;
  border: 1px solid var(--color-heading);
  border-radius: 12px;
  background: var(--color-warm-soft);
  color: var(--color-primary-strong);
  font-size: 0.78rem;
  font-weight: 950;
}

.skill-matrix strong {
  display: block;
  color: var(--color-heading);
  font-weight: 900;
}

.skill-matrix span {
  display: block;
  margin-top: 5px;
  color: var(--color-muted);
  font-size: 0.88rem;
  line-height: 1.55;
}

.about-card-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.about-card-list article {
  display: grid;
  gap: 8px;
  padding: 20px;
}

.about-card-list__type {
  display: inline-grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border: 2px solid var(--color-heading);
  border-radius: 999px;
  background: var(--color-warm);
  color: var(--color-heading);
  font-size: 0.76rem;
  font-weight: 950;
  line-height: 1;
}

.about-card-list__type--activity {
  background: var(--color-accent-soft);
}

.about-card-list__type--education {
  background: var(--color-lavender-soft);
}

.about-card-list h3 {
  color: var(--color-heading);
  line-height: 1.35;
}

.about-card-list p {
  color: var(--color-muted);
  line-height: 1.62;
}

.about-card-list__meta {
  font-size: 0.9rem;
  font-weight: 800;
}

.about-card-list a {
  color: var(--color-primary-strong);
  font-weight: 900;
}


.about-card-list__links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.about-card-list__links a {
  display: inline-flex;
  min-height: 32px;
  align-items: center;
  padding: 6px 11px;
  border: 1px solid var(--color-heading);
  border-radius: 999px;
  background: var(--color-surface-strong);
  color: var(--color-heading);
  font-size: 0.82rem;
  font-weight: 950;
}

.about-card-list__links a:hover,
.about-card-list__links a:focus-visible {
  background: var(--color-heading);
  color: #fff;
}

@media (max-width: 980px) {
  .about-hero__inner,
  .career-timeline__item,
  .skill-matrix__group {
    grid-template-columns: 1fr;
  }

  .career-timeline__period {
    position: static;
    padding: 0;
  }

  .about-card-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .about-stats,
  .skill-matrix ul,
  .about-card-list {
    grid-template-columns: 1fr;
  }

  .about-hero__actions :deep(.app-button) {
    width: 100%;
  }

  .skill-matrix li {
    grid-template-columns: 36px minmax(0, 1fr);
  }

  .skill-matrix img,
  .skill-matrix__fallback {
    width: 36px;
    height: 36px;
  }
}


</style>
