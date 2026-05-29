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
const projectSourceKey = 'portfolio:project-detail-source'

const guideLinks = [
  { label: 'UI Guide', href: 'https://github.com/heodokyung/frontend-guide' },
  { label: 'Study Log', href: 'https://github.com/heodokyung/frontend-study' },
]

const platformLabel = computed(() => getPlatformLabel(props.project.platform))
const categoryLabel = computed(() => getCategoryLabel(props.project.category))

const visualFrameLabel = computed(() => {
  if (props.project.platform === 'mobile') return 'Mobile UI'
  if (props.project.platform === 'responsive') return 'Responsive UI'
  return 'Web UI'
})

const platformFocus = computed(() => {
  if (props.project.platform === 'mobile') {
    return '작은 화면에서 정보가 잘 읽히고, 터치 조작이 편한 흐름을 중심으로 구성한 모바일 UI 프로젝트입니다.'
  }

  if (props.project.platform === 'responsive') {
    return '데스크톱과 모바일을 함께 고려해 콘텐츠 구조와 반응형 흐름을 맞춘 프로젝트입니다.'
  }

  return 'PC 화면의 탐색 흐름, 콘텐츠 가독성, 운영 화면 확장성을 중심으로 작업한 웹 UI 프로젝트입니다.'
})

const overviewItems = computed(() => [
  { label: '유형', value: `${categoryLabel.value} · ${platformLabel.value}` },
  { label: '역할', value: props.project.role.join(', ') },
  { label: '기간', value: props.project.period.label },
  { label: '기여도', value: props.project.contribution ? `${props.project.contribution}%` : '협업 프로젝트' },
])

const caseStudyItems = computed(() => [
  {
    number: '01',
    title: '문제 정의',
    description: props.project.problem,
    items: [] as string[],
  },
  {
    number: '02',
    title: '해결 방법',
    description: '',
    items: props.project.solution,
  },
  {
    number: '03',
    title: '결과',
    description: '',
    items: props.project.result,
  },
])

const visibleCaseStudyItems = computed(() =>
  caseStudyItems.value.filter((item) => Boolean(item.description) || item.items.length > 0),
)

const galleryDescription = computed(() => {
  if (props.project.platform === 'mobile') return '모바일 화면은 좌우로 넘기며 주요 흐름을 확인할 수 있습니다.'
  if (props.project.platform === 'responsive') return '반응형 화면은 대표 이미지를 크게 보고, 필요한 화면을 썸네일로 전환할 수 있습니다.'
  return '웹 화면은 크게 보여주고, 이미지를 누르면 원본 크기로 열립니다.'
})

const getStoredProjectSource = () => {
  if (typeof window === 'undefined') {
    return { fullPath: '/#projects', name: 'home', scrollY: 0 }
  }

  try {
    const source = JSON.parse(sessionStorage.getItem(projectSourceKey) || 'null') as {
      fullPath?: string
      name?: string
      scrollY?: number
    } | null

    if (source?.fullPath && ['home', 'projects'].includes(source.name || '')) {
      return { fullPath: source.fullPath, name: source.name || 'home', scrollY: source.scrollY ?? 0 }
    }
  } catch {
    // ignore broken session storage data
  }

  return { fullPath: '/#projects', name: 'home', scrollY: 0 }
}

const returnTargetLabel = computed(() => {
  const source = getStoredProjectSource()
  return source.name === 'projects' ? '프로젝트 목록 위치로' : '홈의 프로젝트 위치로'
})

const goBackToPreviousList = async () => {
  const source = getStoredProjectSource()
  await router.push(source.fullPath)

  if (typeof window !== 'undefined' && source.scrollY > 0) {
    window.requestAnimationFrame(() => window.scrollTo({ top: source.scrollY, behavior: 'auto' }))
  }
}
</script>

<template>
  <section class="project-hero" :class="`project-hero--${project.platform}`" aria-labelledby="project-title">
    <AppContainer class="project-hero__inner">
      <div class="project-hero__content">
        <nav class="project-breadcrumb" aria-label="프로젝트 경로">
          <RouterLink to="/#projects">Project</RouterLink>
          <span aria-hidden="true">/</span>
          <span>{{ project.title }}</span>
        </nav>

        <div class="project-hero__badges" aria-label="프로젝트 분류">
          <AppBadge :label="platformLabel" />
          <AppBadge :label="categoryLabel" />
        </div>

        <div class="project-hero__heading">
          <p v-if="project.company" class="project-hero__company">{{ project.company }}</p>
          <h1 id="project-title">{{ project.title }}</h1>
        </div>

        <p class="project-hero__summary">{{ project.summary }}</p>
        <AppTagList :items="project.tags" />

        <div class="project-hero__actions" aria-label="프로젝트 상세 액션">
          <AppButton variant="ghost" @click="goBackToPreviousList">{{ returnTargetLabel }}</AppButton>
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
          <p class="aside-card__label">Focus</p>
          <p>{{ platformFocus }}</p>
        </div>

        <div class="project-links" aria-label="프로젝트 관련 링크">
          <a
            v-for="link in project.links ?? []"
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

        <AppButton variant="ghost" @click="goBackToPreviousList">{{ returnTargetLabel }}</AppButton>
      </aside>

      <article class="detail-layout__content">
        <section class="detail-section detail-section--overview" aria-labelledby="overview-title">
          <p class="section-kicker">Overview</p>
          <h2 id="overview-title">프로젝트 개요</h2>
          <p>{{ project.summary }}</p>

          <dl class="overview-grid">
            <div v-for="item in overviewItems" :key="item.label" class="overview-grid__item">
              <dt>{{ item.label }}</dt>
              <dd>{{ item.value }}</dd>
            </div>
          </dl>
        </section>

        <section v-if="visibleCaseStudyItems.length" class="case-process" aria-label="프로젝트 케이스 스터디">
          <article v-for="item in visibleCaseStudyItems" :key="item.title" class="case-process__item">
            <span>{{ item.number }}</span>
            <div>
              <h2>{{ item.title }}</h2>
              <p v-if="item.description">{{ item.description }}</p>
              <ul v-if="item.items.length" class="check-list">
                <li v-for="caseItem in item.items" :key="caseItem">{{ caseItem }}</li>
              </ul>
            </div>
          </article>
        </section>

        <section class="detail-section" aria-labelledby="stack-title">
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

        <section v-if="project.media.length" class="detail-section detail-section--gallery" aria-labelledby="gallery-title">
          <div class="gallery-heading-row">
            <div>
              <p class="section-kicker">Gallery</p>
              <h2 id="gallery-title">화면 미리보기</h2>
            </div>
            <p class="gallery-description">{{ galleryDescription }}</p>
          </div>
          <ProjectGallery :items="project.media" />
        </section>
      </article>
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
.project-hero {
  padding: clamp(38px, 6vw, 66px) 0;
  border-bottom: 2px solid var(--color-heading);
  background:
    linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px) 0 0 / 40px 40px,
    linear-gradient(0deg, var(--color-grid-line) 1px, transparent 1px) 0 0 / 40px 40px,
    var(--color-bg-soft);
}

.project-hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(300px, 0.9fr);
  gap: clamp(24px, 5vw, 50px);
  align-items: center;
}

.project-hero__content {
  display: grid;
  gap: 16px;
}

.project-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--color-muted);
  font-size: 0.88rem;
  font-weight: 850;
}

.project-breadcrumb a,
.project-hero__company {
  color: var(--color-primary-strong);
  font-weight: 950;
}

.project-hero__badges,
.project-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.project-hero__heading {
  display: grid;
  gap: 8px;
}

.project-hero h1 {
  max-width: 13em;
  color: var(--color-heading);
  font-size: clamp(1.8rem, 3.6vw, 2.8rem);
  line-height: 1.14;
  letter-spacing: -0.06em;
  overflow-wrap: anywhere;
}

.project-hero__summary {
  max-width: 64ch;
  color: var(--color-muted);
  font-size: clamp(0.98rem, 1.35vw, 1.06rem);
  line-height: 1.76;
}

.project-hero__visual {
  overflow: hidden;
  margin: 0;
  border: 2px solid var(--color-heading);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-flat);
}

.project-hero__visual-label {
  padding: 14px 16px 0;
  color: var(--color-primary-strong);
  font-size: 0.76rem;
  font-weight: 950;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.project-preview-frame {
  display: flex;
  gap: 6px;
  padding: 12px 16px;
  border-bottom: 2px solid var(--color-heading);
}

.project-preview-frame span {
  width: 10px;
  height: 10px;
  border: 2px solid var(--color-heading);
  border-radius: 50%;
  background: var(--color-warm);
}

.project-preview-frame span:nth-child(2) {
  background: var(--color-accent);
}

.project-preview-frame span:nth-child(3) {
  background: var(--color-lavender);
}

.project-hero__visual img {
  display: block;
  width: 100%;
  min-height: 260px;
  background: #172033;
  object-fit: cover;
  object-position: center;
}

.project-hero__visual--mobile img {
  min-height: 360px;
  object-fit: cover;
}

.detail-layout {
  display: grid;
  grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
  gap: clamp(20px, 4vw, 42px);
  align-items: start;
}

.detail-layout__aside {
  position: sticky;
  top: calc(var(--header-height) + 18px);
  display: grid;
  gap: 12px;
  align-self: start;
}

.detail-layout__content {
  display: grid;
  min-width: 0;
  gap: 18px;
}

.aside-card,
.project-links,
.detail-section,
.case-process {
  border: 2px solid var(--color-heading);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-flat);
}

.aside-card,
.project-links {
  display: grid;
  gap: 8px;
  padding: 14px;
}

.aside-card__label,
.section-kicker {
  color: var(--color-primary-strong);
  font-size: 0.76rem;
  font-weight: 950;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.aside-card p:not(.aside-card__label) {
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.68;
}

.project-links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  padding: 0 12px;
  border: 1px solid var(--color-border-strong);
  border-radius: 12px;
  background: var(--color-surface-strong);
  color: var(--color-primary-strong);
  font-weight: 900;
}

.project-links a::after {
  content: '↗';
}

.detail-section {
  display: grid;
  gap: 14px;
  padding: clamp(18px, 2.6vw, 26px);
}

.detail-section h2,
.case-process h2 {
  color: var(--color-heading);
  font-size: clamp(1.18rem, 2vw, 1.45rem);
  line-height: 1.28;
  letter-spacing: -0.04em;
}

.detail-section > p:not(.section-kicker),
.gallery-description,
.case-process p,
.check-list li,
.role-list li {
  color: var(--color-muted);
  line-height: 1.7;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin: 0;
}

.overview-grid__item {
  display: grid;
  gap: 5px;
  min-height: auto;
  padding: 13px;
  border: 1px solid var(--color-border-strong);
  border-radius: 12px;
  background: var(--color-surface-strong);
}

.overview-grid dt {
  color: var(--color-muted);
  font-size: 0.78rem;
  font-weight: 850;
}

.overview-grid dd {
  margin: 0;
  color: var(--color-heading);
  font-size: 0.94rem;
  font-weight: 900;
  line-height: 1.42;
}

.case-process {
  overflow: hidden;
}

.case-process__item {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 12px 16px;
  padding: 18px 20px;
  border-bottom: 2px solid var(--color-heading);
}

.case-process__item:last-child {
  border-bottom: 0;
}

.case-process__item > span {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 2px solid var(--color-heading);
  border-radius: 12px;
  background: var(--color-warm);
  color: var(--color-heading);
  font-size: 0.78rem;
  font-weight: 950;
}

.case-process__item > div {
  display: grid;
  gap: 8px;
}

.check-list,
.role-list {
  display: grid;
  gap: 7px;
  margin: 0;
  padding-left: 1.1em;
}

.stack-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr);
  gap: 14px;
}

.stack-panel > div {
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--color-border-strong);
  border-radius: 12px;
  background: var(--color-surface-strong);
}

.stack-panel h3 {
  color: var(--color-heading);
  font-size: 0.98rem;
}

.gallery-heading-row {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(250px, 0.7fr);
  gap: clamp(14px, 4vw, 36px);
  align-items: end;
}

@media (max-width: 1100px) {
  .overview-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .project-hero__inner,
  .detail-layout,
  .stack-panel,
  .gallery-heading-row {
    grid-template-columns: 1fr;
  }

  .detail-layout__aside {
    position: static;
  }
}

@media (max-width: 640px) {
  .project-hero {
    padding-top: 34px;
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

  .case-process__item {
    grid-template-columns: 1fr;
    padding: 17px;
  }
}
</style>
