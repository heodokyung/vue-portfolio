<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AppBadge from '@/components/common/AppBadge.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
import AppTagList from '@/components/common/AppTagList.vue'
import ProjectGallery from '@/components/project/ProjectGallery.vue'
import ProjectMetaList from '@/components/project/ProjectMetaList.vue'
import type { Project } from '@/types/portfolio'
import { getCategoryLabel, getPlatformLabel } from '@/utils/text'

const props = defineProps<{
  project: Project
}>()

const router = useRouter()

const guideLinks = [
  { label: 'Markup Guide', href: 'https://github.com/heodokyung/frontend-guide' },
  { label: 'UI Study Log', href: 'https://github.com/heodokyung/frontend-study' },
  { label: 'GitHub', href: 'https://github.com/heodokyung' },
]

const platformLabel = computed(() => getPlatformLabel(props.project.platform))
const categoryLabel = computed(() => getCategoryLabel(props.project.category))

const visualFrameLabel = computed(() => {
  if (props.project.platform === 'mobile') return 'Mobile UI Preview'
  if (props.project.platform === 'responsive') return 'Responsive UI Preview'
  return 'Web UI Preview'
})

const platformFocus = computed(() => {
  if (props.project.platform === 'mobile') {
    return '작은 화면의 정보 밀도, 터치 영역, 스크롤 흐름, 운영 중 변경 안정성을 중심으로 설계한 모바일 UI 프로젝트입니다.'
  }

  if (props.project.platform === 'responsive') {
    return '데스크톱과 모바일 환경을 함께 고려해 콘텐츠 구조, 컴포넌트 재사용성, 반응형 레이아웃 균형을 맞춘 프로젝트입니다.'
  }

  return '데스크톱 웹 사용자의 탐색 흐름, 콘텐츠 가독성, 운영 화면 확장성을 중심으로 구성한 웹 UI 프로젝트입니다.'
})

const overviewItems = computed(() => [
  { label: '프로젝트 유형', value: `${categoryLabel.value} · ${platformLabel.value}` },
  { label: '담당 역할', value: props.project.role.join(', ') },
  { label: '참여 기간', value: props.project.period.label },
  { label: '기여도', value: props.project.contribution ? `${props.project.contribution}%` : '협업 프로젝트' },
])

const caseStudyItems = computed(() => [
  {
    number: '01',
    title: '문제 정의',
    tone: 'problem',
    description: props.project.problem,
    items: [] as string[],
  },
  {
    number: '02',
    title: '해결 방법',
    tone: 'solution',
    description: '',
    items: props.project.solution,
  },
  {
    number: '03',
    title: '결과',
    tone: 'result',
    description: '',
    items: props.project.result,
  },
])

const visibleCaseStudyItems = computed(() =>
  caseStudyItems.value.filter((item) => Boolean(item.description) || item.items.length > 0),
)

const galleryDescription = computed(() => {
  if (props.project.platform === 'mobile') {
    return '모바일 화면은 좌우로 넘기는 스냅 갤러리로 먼저 흐름을 보고, 각 화면은 디바이스 프레임 안에서 확인할 수 있게 구성했습니다.'
  }

  if (props.project.platform === 'responsive') {
    return '반응형 프로젝트는 첫 화면을 크게 보여준 뒤, 주요 화면을 브라우저 프레임 카드로 나누어 확인할 수 있게 구성했습니다.'
  }

  return '웹 프로젝트는 큰 대표 화면과 이어지는 브라우저 프레임 갤러리로 구성해, 상세 이미지의 가독성을 우선했습니다.'
})

const goBackToPreviousList = () => {
  if (window.history.state?.back) {
    router.back()
    return
  }

  router.push('/#projects')
}
</script>

<template>
  <section class="project-hero" :class="`project-hero--${project.platform}`" aria-labelledby="project-title">
    <AppContainer class="project-hero__inner">
      <div class="project-hero__content">
        <nav class="project-breadcrumb" aria-label="프로젝트 경로">
          <RouterLink to="/#projects">Home Projects</RouterLink>
          <span aria-hidden="true">/</span>
          <span>{{ project.title }}</span>
        </nav>

        <div class="project-hero__badges" aria-label="프로젝트 분류">
          <AppBadge :label="platformLabel" />
          <AppBadge :label="categoryLabel" />
          <span v-if="project.featured" class="project-featured-badge">Featured Case</span>
        </div>

        <div class="project-hero__heading">
          <p v-if="project.company" class="project-hero__company">{{ project.company }}</p>
          <h1 id="project-title">{{ project.title }}</h1>
        </div>

        <p class="project-hero__summary">{{ project.summary }}</p>
        <AppTagList :items="project.tags" />

        <div class="project-hero__actions" aria-label="프로젝트 상세 액션">
          <AppButton variant="ghost" @click="goBackToPreviousList">이전 목록 위치로</AppButton>
          <AppButton to="/#projects" variant="subtle">홈 프로젝트 섹션</AppButton>
          <AppButton v-if="project.links?.[0]" :href="project.links[0].href" variant="subtle">
            {{ project.links[0].label }}
          </AppButton>
        </div>
      </div>

      <figure class="project-hero__visual" :class="`project-hero__visual--${project.platform}`">
        <figcaption class="project-hero__visual-label">{{ visualFrameLabel }}</figcaption>
        <div class="project-preview-frame" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img :src="project.thumbnail" :alt="`${project.title} 대표 이미지`" />
      </figure>
    </AppContainer>
  </section>

  <AppSection>
    <AppContainer class="detail-layout">
      <aside class="detail-layout__aside" aria-label="프로젝트 핵심 정보와 바로가기">
        <ProjectMetaList
          :items="[
            { label: '기간', value: project.period.label },
            { label: '역할', value: project.role },
            { label: '기여도', value: project.contribution ? `${project.contribution}%` : null },
            { label: '기술', value: project.stack },
            { label: '언어', value: project.locale.toUpperCase() },
          ]"
        />

        <div class="aside-card">
          <p class="aside-card__label">Platform Focus</p>
          <p>{{ platformFocus }}</p>
        </div>

        <div class="project-links" aria-label="프로젝트 관련 링크">
          <a
            v-for="link in project.links"
            :key="`${link.type}-${link.href}`"
            :href="link.href"
            target="_blank"
            rel="noreferrer noopener"
          >
            {{ link.label }}
          </a>
          <a v-for="link in guideLinks" :key="link.href" :href="link.href" target="_blank" rel="noreferrer noopener">
            {{ link.label }}
          </a>
        </div>

        <AppButton variant="ghost" @click="goBackToPreviousList">이전 목록 위치로</AppButton>
      </aside>

      <article class="detail-layout__content">
        <section id="overview" class="detail-section detail-section--overview" aria-labelledby="overview-title">
          <p class="section-kicker">Overview</p>
          <h2 id="overview-title">운영 가능한 UI 구조를 중심으로 정리한 프로젝트입니다.</h2>
          <p>{{ platformFocus }}</p>

          <dl class="overview-grid">
            <div v-for="item in overviewItems" :key="item.label" class="overview-grid__item">
              <dt>{{ item.label }}</dt>
              <dd>{{ item.value }}</dd>
            </div>
          </dl>
        </section>

        <div v-if="visibleCaseStudyItems.length" id="case-study" class="case-study-grid" aria-label="프로젝트 케이스 스터디">
          <section
            v-for="item in visibleCaseStudyItems"
            :key="item.title"
            class="case-card"
            :class="`case-card--${item.tone}`"
          >
            <p class="case-card__number">{{ item.number }}</p>
            <h2>{{ item.title }}</h2>
            <p v-if="item.description">{{ item.description }}</p>
            <ul v-if="item.items.length" class="check-list">
              <li v-for="caseItem in item.items" :key="caseItem">{{ caseItem }}</li>
            </ul>
          </section>
        </div>

        <section id="responsibility" class="detail-section" aria-labelledby="stack-title">
          <p class="section-kicker">Stack & Responsibility</p>
          <h2 id="stack-title">기술 스택과 담당 범위</h2>
          <div class="stack-panel">
            <div>
              <h3>기술 스택</h3>
              <AppTagList :items="project.stack" />
            </div>
            <div>
              <h3>담당 역할</h3>
              <ul class="role-list">
                <li v-for="role in project.role" :key="role">{{ role }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section v-if="project.media.length" id="gallery" class="detail-section detail-section--gallery" aria-labelledby="gallery-title">
          <p class="section-kicker">Gallery</p>
          <h2 id="gallery-title">프로젝트 이미지</h2>
          <p class="gallery-description">{{ galleryDescription }}</p>
          <ProjectGallery :items="project.media" />
        </section>

      </article>
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
.project-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(56px, 9vw, 108px) 0;
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--color-grid-line) 55%, transparent) 1px, transparent 1px) 0 0 / 36px 36px,
    linear-gradient(135deg, #f8fbfd 0%, var(--color-primary-soft) 48%, var(--color-bg) 100%);
}

.project-hero::after {
  position: absolute;
  inset: auto -8% -42% auto;
  width: min(46vw, 520px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-accent) 13%, transparent);
  content: '';
}

.project-hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(280px, 0.98fr);
  gap: clamp(28px, 5vw, 68px);
  align-items: center;
}

.project-hero__content {
  display: grid;
  gap: 18px;
}

.project-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  color: var(--color-muted);
  font-size: 0.9rem;
  font-weight: 800;
}

.project-breadcrumb a {
  color: var(--color-primary-strong);
}

.project-hero__badges,
.project-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.project-featured-badge {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 4px 10px;
  border: 1px solid color-mix(in srgb, var(--color-accent) 28%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-accent) 10%, var(--color-surface));
  color: var(--color-primary-strong);
  font-size: 0.78rem;
  font-weight: 900;
}

.project-hero__heading {
  display: grid;
  gap: 8px;
}

.project-hero__company {
  color: var(--color-primary-strong);
  font-size: 0.98rem;
  font-weight: 900;
}

.project-hero h1 {
  max-width: 12em;
  color: var(--color-heading);
  font-size: clamp(2.1rem, 5.4vw, 4.25rem);
  line-height: 1.08;
  letter-spacing: -0.065em;
  overflow-wrap: anywhere;
}

.project-hero__summary {
  max-width: 62ch;
  color: var(--color-muted);
  font-size: clamp(1rem, 1.6vw, 1.12rem);
  line-height: 1.78;
}

.project-hero__visual {
  position: relative;
  overflow: hidden;
  margin: 0;
  border: 1px solid color-mix(in srgb, var(--color-border) 82%, var(--color-surface));
  border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
  box-shadow: var(--shadow-card);
}

.project-hero__visual-label {
  padding: 16px 20px 0;
  color: var(--color-muted);
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-preview-frame {
  display: flex;
  gap: 6px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--color-border);
}

.project-preview-frame span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color-muted) 28%, transparent);
}

.project-hero__visual img {
  display: block;
  width: 100%;
  background: var(--color-surface-strong);
}

.project-hero__visual--mobile {
  max-width: 390px;
  margin-inline: auto;
}

.project-hero__visual--mobile img {
  padding: clamp(18px, 4vw, 34px);
  object-fit: contain;
}

.detail-layout {
  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
  gap: clamp(24px, 5vw, 58px);
  align-items: start;
}

.detail-layout__aside {
  position: sticky;
  top: calc(var(--header-height) + 20px);
  display: grid;
  gap: 14px;
}

.aside-card,
.project-links,
.detail-section,
.case-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.aside-card,
.project-links {
  display: grid;
  gap: 8px;
  padding: 16px;
}


.aside-card__label,
.section-kicker,
.case-card__number {
  color: var(--color-primary-strong);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.aside-card p:not(.aside-card__label) {
  color: var(--color-muted);
  font-size: 0.92rem;
  line-height: 1.7;
}

.project-links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 42px;
  padding: 0 12px;
  border-radius: var(--radius-sm);
  background: var(--color-surface-strong);
  color: var(--color-primary-strong);
  font-weight: 900;
}

.project-links a::after {
  content: '↗';
}

.detail-layout__content {
  display: grid;
  min-width: 0;
  gap: 20px;
}

.detail-section {
  display: grid;
  gap: 16px;
  padding: clamp(22px, 4vw, 34px);
  scroll-margin-top: calc(var(--header-height) + 16px);
}

.case-study-grid,
#case-study,
#related {
  scroll-margin-top: calc(var(--header-height) + 16px);
}

.detail-section h2,
.case-card h2 {
  color: var(--color-heading);
  font-size: clamp(1.35rem, 2.4vw, 1.78rem);
  line-height: 1.28;
  letter-spacing: -0.04em;
}

.detail-section > p:not(.section-kicker),
.gallery-description,
.case-card > p:not(.case-card__number),
.related-description {
  color: var(--color-muted);
  line-height: 1.78;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
}

.overview-grid__item {
  display: grid;
  gap: 6px;
  min-height: 112px;
  padding: 18px;
  border-radius: var(--radius-md);
  background: var(--color-surface-strong);
}

.overview-grid dt {
  color: var(--color-muted);
  font-size: 0.82rem;
  font-weight: 800;
}

.overview-grid dd {
  margin: 0;
  color: var(--color-heading);
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.45;
}

.case-study-grid {
  display: grid;
  grid-auto-columns: minmax(260px, 1fr);
  grid-auto-flow: column;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 6px;
  scroll-snap-type: inline mandatory;
  scrollbar-width: thin;
}

.case-card {
  position: relative;
  display: grid;
  align-content: start;
  gap: 12px;
  min-width: 0;
  padding: clamp(18px, 2.4vw, 24px);
  scroll-snap-align: start;
}

.case-card::before {
  position: absolute;
  top: 28px;
  right: -12px;
  width: 24px;
  height: 2px;
  background: color-mix(in srgb, var(--color-warm) 70%, var(--color-border));
  content: '';
}

.case-card:last-child::before {
  display: none;
}

.case-card--problem {
  background: linear-gradient(180deg, color-mix(in srgb, var(--color-primary-soft) 64%, var(--color-surface)), var(--color-surface));
}

.case-card--solution {
  background: linear-gradient(180deg, color-mix(in srgb, var(--color-accent) 9%, var(--color-surface)), var(--color-surface));
}

.case-card--result {
  background: linear-gradient(180deg, color-mix(in srgb, var(--color-primary) 8%, var(--color-surface)), var(--color-surface));
}

.check-list,
.role-list {
  display: grid;
  gap: 10px;
  padding-left: 1.2em;
}

.check-list li,
.role-list li {
  color: var(--color-muted);
  line-height: 1.7;
}

.stack-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr);
  gap: 18px;
}

.stack-panel > div {
  display: grid;
  gap: 12px;
  padding: 18px;
  border-radius: var(--radius-md);
  background: var(--color-surface-strong);
}

.stack-panel h3 {
  color: var(--color-heading);
  font-size: 1rem;
}


@media (max-width: 900px) {
  .project-hero__inner,
  .detail-layout,
  .stack-panel {
    grid-template-columns: 1fr;
  }

  .detail-layout__aside {
    position: static;
    order: 2;
  }
}

@media (max-width: 640px) {
  .project-hero {
    padding-top: 40px;
  }

  .project-hero__actions {
    align-items: stretch;
  }

  .project-hero__actions > * {
    width: 100%;
  }

  .overview-grid {
    grid-template-columns: 1fr;
  }

  .project-hero h1 {
    font-size: 2.15rem;
  }

  .detail-section,
  .case-card {
    border-radius: var(--radius-md);
  }
}
</style>
