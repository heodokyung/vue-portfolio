<script setup lang="ts">
import { computed, ref } from 'vue'
import AppButton from '@/components/common/AppButton.vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppLottieMotion from '@/components/common/AppLottieMotion.vue'
import ProjectGrid from '@/components/project/ProjectGrid.vue'
import { aboutItems } from '@/data/about'
import { careers } from '@/data/careers'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'
import type { Project } from '@/types/portfolio'

const totalProjects = projects.length
const workProjects = projects.filter((project) => project.category === 'work')
const mobileProjects = projects.filter((project) => project.platform === 'mobile')
const webProjects = projects.filter((project) => project.platform === 'web')
const responsiveProjects = projects.filter((project) => project.platform === 'responsive')
const coreSkills = skills
const visibleAboutItems = aboutItems

type HomeProjectFilter = 'all' | 'web' | 'mobile' | 'responsive' | 'backend' | 'study'

const selectedFilter = ref<HomeProjectFilter>('all')

const isBackendProject = (project: Project) =>
  [...project.stack, ...project.role, ...project.tags].some((item) => /back[- ]?end|backend/i.test(item))

const projectFilters: Array<{ label: string; value: HomeProjectFilter; count: number }> = [
  { label: 'All', value: 'all', count: totalProjects },
  { label: 'Web', value: 'web', count: webProjects.length },
  { label: 'Mobile', value: 'mobile', count: mobileProjects.length },
  { label: 'Responsive', value: 'responsive', count: responsiveProjects.length },
  { label: 'Back-end', value: 'backend', count: projects.filter(isBackendProject).length },
  { label: 'Study', value: 'study', count: projects.filter((project) => project.category !== 'work').length },
]

const getProjectTime = (project: Project) => {
  const end = project.period.end ?? '9999-12-31'
  const start = project.period.start ?? '0000-01-01'
  return `${end}-${start}`
}

const sortedProjects = computed(() => [...projects].sort((a, b) => getProjectTime(b).localeCompare(getProjectTime(a))))

const visibleProjects = computed(() =>
  sortedProjects.value.filter((project) => {
    if (selectedFilter.value === 'all') return true
    if (selectedFilter.value === 'backend') return isBackendProject(project)
    if (selectedFilter.value === 'study') return project.category !== 'work'
    return project.platform === selectedFilter.value
  }),
)

const processItems = [
  '시맨틱 마크업',
  '접근성 체크',
  '반응형 기준',
  'SCSS 컨벤션',
  '운영 영향 범위',
]

const identityCards = [
  {
    title: '마크업의 기준을 세웁니다',
    text: '화면을 예쁘게만 붙이는 것이 아니라, 제목 구조·역할·대체 텍스트·키보드 이동까지 함께 확인합니다.',
  },
  {
    title: '운영 화면을 이해합니다',
    text: '서비스는 한 번 만들고 끝나지 않기 때문에 수정이 반복되어도 흔들리지 않는 구조와 네이밍을 중요하게 봅니다.',
  },
  {
    title: 'Vue와 React 화면을 다룹니다',
    text: '퍼블리싱 경험을 바탕으로 컴포넌트 단위 화면 구현, 상태에 따른 UI 변화, 반응형 대응까지 연결합니다.',
  },
]

const studyLinks = [
  {
    title: 'Frontend Study',
    description: 'React, Vue, JavaScript 학습 기록을 한곳에 정리한 저장소입니다.',
    links: [{ label: 'Repo', href: 'https://github.com/heodokyung/frontend-study' }],
  },
  {
    title: 'Frontend Guide',
    description: '마크업 컨벤션, 접근성, SCSS 기준을 작업 가이드로 정리한 저장소입니다.',
    links: [{ label: 'Repo', href: 'https://github.com/heodokyung/frontend-guide' }],
  },
]

const getAboutTypeLabel = (type: string) => {
  if (type === 'certificate') return '자격증'
  if (type === 'activity') return '활동'
  return '교육'
}

const getSkillInitials = (name: string) =>
  name
    .replace(/&/g, ' ')
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')

const getAboutTypeClass = (type: string) => `about-list__type about-list__type--${type}`
</script>

<template>
  <main class="home-page" aria-labelledby="home-title">
    <section id="intro" class="hero" aria-labelledby="home-title">
      <AppContainer class="hero__inner">
        <div class="hero__content">
          <p class="eyebrow">UI Developer</p>
          <h1 id="home-title">백엔드에서 출발해, 화면의 완성도를 높이는 UI Developer입니다.</h1>
          <p class="hero__description">
            Java·ASP 기반 개발부터 웹표준, 접근성, 반응형 퍼블리싱, Vue·React 화면 구현까지 경험했습니다. 기획과 디자인 의도를 실제 사용자가 만나는 화면으로 옮기고, 오래 운영되는 서비스에서도 무너지지 않는 UI 구조를 고민합니다.
          </p>

          <div class="hero__actions" aria-label="주요 이동 링크">
            <AppButton to="/#projects" size="lg">프로젝트 보기</AppButton>
            <AppButton to="/#work" variant="ghost" size="lg">경력 보기</AppButton>
            <AppButton :href="profile.github" variant="subtle" size="lg">GitHub</AppButton>
          </div>

          <dl class="hero__stats" aria-label="포트폴리오 요약">
            <div>
              <dt>Project</dt>
              <dd>{{ totalProjects }}</dd>
            </div>
            <div>
              <dt>Career</dt>
              <dd>{{ careers.length }}</dd>
            </div>
            <div>
              <dt>Skill</dt>
              <dd>{{ coreSkills.length }}</dd>
            </div>
          </dl>
        </div>

        <aside class="flat-stage" aria-labelledby="flat-stage-title">
          <div class="flat-stage__chips" aria-hidden="true">
            <span>HTML</span>
            <span>a11y</span>
            <span>UI</span>
          </div>
          <div class="code-note">
            <span class="code-note__dot" aria-hidden="true"></span>
            <p>UI Developer</p>
            <code>&lt;section class="service-screen"&gt;</code>
            <code>  semantic · responsive · accessible</code>
            <code>  @media: mobile / tablet / desktop</code>
            <code>&lt;/section&gt;</code>
          </div>
          <div class="flat-stage__caption">
            <strong id="flat-stage-title">화면을 만들 때 먼저 보는 기준</strong>
            <p>구조, 접근성, 반응형, 운영 수정 가능성.</p>
          </div>
        </aside>
      </AppContainer>
    </section>

    <section id="identity" class="home-section" aria-labelledby="identity-title">
      <AppContainer>
        <div class="section-heading">
          <p>Strength</p>
          <h2 id="identity-title">화면의 첫인상보다, 오래 유지되는 구조를 먼저 봅니다.</h2>
        </div>

        <div class="identity-list">
          <article v-for="item in identityCards" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </AppContainer>
    </section>

    <section id="projects" class="home-section home-section--projects" aria-labelledby="projects-title">
      <AppContainer>
        <div class="project-board-head">
          <div>
            <p class="eyebrow">Project</p>
            <h2 id="projects-title">작업한 화면들</h2>
            <p>최신 작업부터 과거 프로젝트까지 한곳에서 볼 수 있도록 정리했습니다.</p>
          </div>
          <div class="project-board-head__count" aria-label="현재 표시 프로젝트 수">
            <strong>{{ visibleProjects.length }}</strong>
            <span>projects</span>
          </div>
        </div>

        <div class="project-filter" aria-label="프로젝트 필터">
          <button
            v-for="filter in projectFilters"
            :key="filter.value"
            type="button"
            :class="{ 'is-active': selectedFilter === filter.value }"
            :aria-pressed="selectedFilter === filter.value"
            @click="selectedFilter = filter.value"
          >
            <span>{{ filter.label }}</span>
            <strong>{{ filter.count }}</strong>
          </button>
        </div>

        <ProjectGrid :projects="visibleProjects" />
      </AppContainer>
    </section>

    <section id="work" class="home-section home-section--work" aria-labelledby="work-title">
      <AppContainer class="motion-layout">
        <div class="motion-layout__text">
          <p class="eyebrow">Career</p>
          <h2 id="work-title">백엔드 개발에서 퍼블리싱, 그리고 UI 개발까지 이어왔습니다.</h2>
          <p>
            Java·ASP 개발 경험을 시작으로 웹표준과 접근성 중심의 퍼블리싱을 거쳤고, 현재는 커머스와 금융 서비스에서 Vue·React 기반 화면 구현과 운영 개선을 맡고 있습니다.
          </p>
        </div>
        <AppLottieMotion src="/assets/lottie/career-road.json" label="자전거를 타고 이동하는 커리어 로드 모션" />
      </AppContainer>

      <AppContainer>
        <ol class="career-list" aria-label="경력 목록">
          <li v-for="career in careers" :key="career.id">
            <div class="career-list__period">{{ career.period }}</div>
            <div>
              <h3>{{ career.company }}</h3>
              <p>{{ career.summary }}</p>
              <ul>
                <li v-for="highlight in career.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
          </li>
        </ol>
      </AppContainer>
    </section>

    <section id="skills" class="home-section" aria-labelledby="skills-title">
      <AppContainer class="motion-layout motion-layout--reverse">
        <div class="motion-layout__text">
          <p class="eyebrow">Skill</p>
          <h2 id="skills-title">기술은 화면 품질을 지키는 기준입니다.</h2>
          <p>
            HTML, CSS, JavaScript부터 Vue, React, 협업 도구까지 실제 프로젝트에서 사용해온 기술을 빠짐없이 정리했습니다.
          </p>
        </div>
        <AppLottieMotion src="/assets/lottie/skill-coding.json" label="코딩 작업을 표현한 플랫 모션" />
      </AppContainer>

      <AppContainer>
        <div class="skill-grid">
          <article v-for="skill in coreSkills" :key="skill.id">
            <div class="skill-grid__icon" aria-hidden="true">
              <img v-if="skill.image" :src="skill.image" alt="" loading="lazy" />
              <span v-else>{{ getSkillInitials(skill.name) }}</span>
            </div>
            <div class="skill-grid__content">
              <h3>{{ skill.name }}</h3>
              <p>{{ skill.summary }}</p>
            </div>
          </article>
        </div>

        <div class="process-strip" aria-label="작업 기준">
          <span v-for="item in processItems" :key="item">{{ item }}</span>
        </div>
      </AppContainer>
    </section>

    <section id="about" class="home-section home-section--note" aria-labelledby="about-title">
      <AppContainer class="motion-layout">
        <div class="motion-layout__text">
          <p class="eyebrow">Learning</p>
          <h2 id="about-title">배운 것과 활동한 기록도 함께 남겼습니다.</h2>
          <p>
            자격증, 접근성 활동, React 학습, 웹표준 교육 등 기존 포트폴리오에 있던 이력은 빠짐없이 옮겼습니다.
          </p>
        </div>
        <AppLottieMotion src="/assets/lottie/about-note.json" label="노트북으로 기록하는 학습 모션" />
      </AppContainer>

      <AppContainer>
        <div class="about-list">
          <article v-for="item in visibleAboutItems" :key="item.id">
            <span :class="getAboutTypeClass(item.type)">{{ getAboutTypeLabel(item.type) }}</span>
            <div class="about-list__body">
              <h3>{{ item.title }}</h3>
              <p v-if="item.period">{{ item.period }}</p>
              <p v-if="item.summary">{{ item.summary }}</p>
              <div v-if="item.links?.length" class="about-list__links" aria-label="학습 결과 링크">
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
            </div>
          </article>
        </div>
      </AppContainer>
    </section>

    <section id="guide" class="home-section" aria-labelledby="guide-title">
      <AppContainer>
        <div class="section-heading">
          <p>Guide</p>
          <h2 id="guide-title">공부한 내용은 다시 작업 기준으로 정리합니다.</h2>
        </div>
        <div class="link-cards">
          <article v-for="link in studyLinks" :key="link.title">
            <strong>{{ link.title }}</strong>
            <span>{{ link.description }}</span>
            <div class="link-cards__actions">
              <a
                v-for="item in link.links"
                :key="item.href"
                :href="item.href"
                target="_blank"
                rel="noreferrer noopener"
              >
                {{ item.label }}
              </a>
            </div>
          </article>
        </div>
      </AppContainer>
    </section>

    <section id="contact" class="home-section home-section--contact" aria-labelledby="contact-title">
      <AppContainer class="contact-panel">
        <div>
          <p class="eyebrow">Contact</p>
          <h2 id="contact-title">서비스 화면을 함께 다듬을 UI Developer가 필요하다면 연락 주세요.</h2>
          <p>채용, 프로젝트 협업, 포트폴리오 검토 관련 연락을 편하게 남겨주세요.</p>
        </div>
        <div class="contact-panel__actions">
          <AppButton :href="`mailto:${profile.email}`" size="lg">메일 보내기</AppButton>
          <AppButton :href="profile.github" variant="subtle" size="lg">GitHub 보기</AppButton>
        </div>
      </AppContainer>
    </section>
  </main>
</template>

<style scoped lang="scss">
.home-page {
  background: var(--color-bg);
}

.hero,
.home-section {
  padding: clamp(44px, 7vw, 82px) 0;
}

.hero {
  border-bottom: 2px solid var(--color-heading);
  background:
    linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px) 0 0 / 40px 40px,
    linear-gradient(0deg, var(--color-grid-line) 1px, transparent 1px) 0 0 / 40px 40px,
    var(--color-bg-soft);
}

.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(320px, 0.95fr);
  gap: clamp(32px, 7vw, 76px);
  align-items: center;
}

.hero__content,
.motion-layout__text,
.section-heading,
.contact-panel > div:first-child {
  display: grid;
  gap: 14px;
}

.eyebrow,
.section-heading > p {
  color: var(--color-primary-strong);
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero h1,
.section-heading h2,
.motion-layout h2,
.project-board-head h2,
.contact-panel h2 {
  color: var(--color-heading);
  letter-spacing: -0.055em;
}

.hero h1 {
  max-width: 11.2em;
  font-size: clamp(2.1rem, 4.3vw, 3.15rem);
  line-height: 1.03;
}

.hero__description,
.motion-layout p:not(.eyebrow),
.project-board-head p,
.contact-panel p,
.flat-stage__caption p {
  max-width: 720px;
  color: var(--color-muted);
  font-size: clamp(0.98rem, 1.35vw, 1.08rem);
  line-height: 1.82;
}

.hero__actions,
.contact-panel__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  max-width: 560px;
  margin: 8px 0 0;
}

.hero__stats div,
.identity-list article,
.skill-grid article,
.about-list article,
.link-cards article,
.contact-panel {
  border: 2px solid var(--color-heading);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-flat);
}

.hero__stats div {
  padding: 14px 16px;
}

.hero__stats dt {
  color: var(--color-muted);
  font-size: 0.76rem;
  font-weight: 850;
}

.hero__stats dd {
  margin: 4px 0 0;
  color: var(--color-heading);
  font-size: clamp(1.45rem, 3vw, 2.05rem);
  font-weight: 950;
  letter-spacing: -0.045em;
}

.flat-stage {
  position: relative;
  display: grid;
  gap: 18px;
  padding: clamp(22px, 4vw, 34px);
  border: 2px solid var(--color-heading);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  box-shadow: var(--shadow-pop);
}

.flat-stage::before,
.flat-stage::after {
  position: absolute;
  border: 2px solid var(--color-heading);
  border-radius: 999px;
  content: '';
}

.flat-stage::before {
  top: 28px;
  right: 28px;
  width: 52px;
  height: 52px;
  background: var(--color-accent);
}

.flat-stage::after {
  right: 92px;
  bottom: 32px;
  width: 28px;
  height: 28px;
  background: var(--color-warm);
}

.flat-stage__chips {
  position: absolute;
  top: -18px;
  right: 22px;
  display: flex;
  gap: 8px;
}

.flat-stage__chips span {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  padding: 0 12px;
  border: 2px solid var(--color-heading);
  border-radius: 999px;
  background: var(--color-warm);
  color: var(--color-heading);
  font-size: 0.78rem;
  font-weight: 950;
}

.flat-stage__chips span:nth-child(2) {
  background: var(--color-accent-soft);
}

.flat-stage__chips span:nth-child(3) {
  background: var(--color-lavender-soft);
}

.code-note {
  display: grid;
  gap: 12px;
  padding: clamp(18px, 4vw, 28px);
  border: 2px solid var(--color-heading);
  border-radius: 22px;
  background:
    linear-gradient(90deg, var(--color-code-line) 1px, transparent 1px) 0 0 / 26px 26px,
    linear-gradient(0deg, var(--color-code-line) 1px, transparent 1px) 0 0 / 26px 26px,
    var(--color-code-bg);
  color: var(--color-code-text);
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  font-size: 0.9rem;
}

.code-note__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #7e8da8;
  box-shadow: 18px 0 0 #7e8da8, 36px 0 0 #7e8da8;
}

.code-note p {
  margin: 2px 0 0;
  color: var(--color-warm);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.flat-stage__caption {
  display: grid;
  gap: 6px;
}

.flat-stage__caption strong {
  color: var(--color-heading);
  font-size: clamp(1.22rem, 2.2vw, 1.7rem);
  letter-spacing: -0.045em;
}

.section-heading {
  margin-bottom: clamp(22px, 4vw, 34px);
}

.section-heading h2,
.motion-layout h2,
.project-board-head h2,
.contact-panel h2 {
  max-width: 760px;
  font-size: clamp(1.4rem, 2.35vw, 2rem);
  line-height: 1.18;
}

.identity-list,
.skill-grid,
.about-list,
.link-cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.identity-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.about-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.identity-list article,
.skill-grid article,
.about-list article,
.link-cards article {
  display: grid;
  gap: 10px;
  padding: clamp(18px, 2.4vw, 24px);
}

.skill-grid article {
  grid-template-columns: 54px minmax(0, 1fr);
  align-items: start;
}

.skill-grid__icon {
  display: grid;
  width: 54px;
  height: 54px;
  place-items: center;
  border: 2px solid var(--color-heading);
  border-radius: 16px;
  background: var(--color-surface);
  box-shadow: 4px 4px 0 var(--color-heading);
  color: var(--color-primary-strong);
  font-size: 0.86rem;
  font-weight: 950;
}

.skill-grid__icon img {
  display: block;
  max-width: 30px;
  max-height: 30px;
  object-fit: contain;
}

.skill-grid__content {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.identity-list article:nth-child(1),
.skill-grid article:nth-child(4n + 1) {
  background: var(--color-warm-soft);
}

.identity-list article:nth-child(2),
.skill-grid article:nth-child(4n + 2) {
  background: var(--color-accent-soft);
}

.identity-list article:nth-child(3),
.skill-grid article:nth-child(4n + 3) {
  background: var(--color-lavender-soft);
}

.identity-list h3,
.skill-grid h3,
.about-list h3,
.link-cards strong {
  color: var(--color-heading);
  font-size: 1.06rem;
  line-height: 1.35;
}

.identity-list p,
.skill-grid p,
.about-list p,
.link-cards span,
.career-list p,
.career-list li {
  color: var(--color-muted);
  line-height: 1.7;
}

.home-section--projects {
  border-top: 2px solid var(--color-heading);
  border-bottom: 2px solid var(--color-heading);
  background: var(--color-surface-strong);
}

.project-board-head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: end;
  margin-bottom: 20px;
}

.project-board-head__count {
  display: grid;
  min-width: 124px;
  min-height: 104px;
  place-items: center;
  padding: 16px;
  border: 2px solid var(--color-heading);
  border-radius: var(--radius-md);
  background: var(--color-warm);
  color: var(--color-heading);
  box-shadow: var(--shadow-flat);
}

.project-board-head__count strong {
  font-size: 2.1rem;
  font-weight: 950;
  line-height: 1;
}

.project-board-head__count span {
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
  padding: 10px;
  border: 2px solid var(--color-heading);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
}

.project-filter button {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  min-height: 38px;
  padding: 7px 12px;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  background: var(--color-surface-strong);
  color: var(--color-heading);
  font-weight: 900;
  cursor: pointer;
}

.project-filter button strong {
  display: grid;
  min-width: 24px;
  height: 24px;
  place-items: center;
  border-radius: 999px;
  background: var(--color-warm-soft);
  color: var(--color-heading);
  font-size: 0.76rem;
}

.project-filter button.is-active {
  border-color: var(--color-heading);
  background: var(--color-heading);
  color: #fff;
}

.project-filter button.is-active strong {
  background: var(--color-warm);
  color: var(--color-heading);
}

.motion-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(240px, 0.62fr);
  gap: clamp(24px, 6vw, 70px);
  align-items: center;
}

.motion-layout--reverse {
  direction: rtl;
}

.motion-layout--reverse > * {
  direction: ltr;
}

.career-list {
  display: grid;
  gap: 0;
  margin: clamp(24px, 4vw, 40px) 0 0;
  padding: 0;
  list-style: none;
}

.career-list > li {
  position: relative;
  display: grid;
  grid-template-columns: 170px minmax(0, 1fr);
  gap: clamp(20px, 4vw, 40px);
  padding: 24px 0 24px 26px;
  border-left: 2px solid var(--color-heading);
}

.career-list > li::before {
  position: absolute;
  top: 30px;
  left: -9px;
  width: 14px;
  height: 14px;
  border: 2px solid var(--color-heading);
  border-radius: 50%;
  background: var(--color-warm);
  content: '';
}

.career-list__period {
  color: var(--color-primary-strong);
  font-weight: 950;
}

.career-list h3 {
  margin-bottom: 8px;
  color: var(--color-heading);
  font-size: 1.2rem;
}

.career-list ul {
  display: grid;
  gap: 6px;
  margin: 12px 0 0;
  padding-left: 1.1em;
}

.process-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.process-strip span {
  display: inline-flex;
  width: fit-content;
  min-height: 28px;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid var(--color-heading);
  border-radius: 999px;
  background: var(--color-warm);
  color: var(--color-heading);
  font-size: 0.78rem;
  font-weight: 950;
}

.about-list article {
  grid-template-columns: 58px minmax(0, 1fr);
  align-items: start;
}

.about-list__type {
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

.about-list__type--activity {
  background: var(--color-accent-soft);
}

.about-list__type--education {
  background: var(--color-lavender-soft);
}

.about-list__body {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.about-list__links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
}

.about-list__links a {
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

.about-list__links a:hover,
.about-list__links a:focus-visible {
  background: var(--color-heading);
  color: #fff;
}

.home-section--note {
  background: var(--color-bg-soft);
}

.link-cards {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.link-cards article {
  align-content: start;
}

.link-cards__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.link-cards__actions a {
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
  transition:
    background var(--transition-fast),
    color var(--transition-fast);
}

.link-cards__actions a:hover,
.link-cards__actions a:focus-visible {
  background: var(--color-heading);
  color: #fff;
}

.home-section--contact {
  padding-bottom: clamp(64px, 10vw, 110px);
}

.contact-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: clamp(20px, 5vw, 52px);
  align-items: center;
  padding: clamp(24px, 4.5vw, 42px);
  background: var(--color-warm-soft);
}

@media (max-width: 980px) {
  .hero__inner,
  .motion-layout,
  .contact-panel,
  .project-board-head {
    grid-template-columns: 1fr;
  }

  .motion-layout--reverse {
    direction: ltr;
  }

  .identity-list,
  .skill-grid,
  .about-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-board-head__count {
    width: fit-content;
  }
}

@media (max-width: 640px) {
  .hero,
  .home-section {
    padding: 40px 0;
  }

  .hero h1 {
    font-size: clamp(2rem, 11vw, 2.75rem);
  }

  .hero__stats,
  .identity-list,
  .skill-grid,
  .about-list,
  .link-cards {
    grid-template-columns: 1fr;
  }

  .skill-grid article,
  .about-list article {
    grid-template-columns: 50px minmax(0, 1fr);
  }

  .skill-grid__icon {
    width: 50px;
    height: 50px;
  }

  .about-list__type {
    width: 50px;
    height: 50px;
    font-size: 0.7rem;
  }

  .project-filter {
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  .project-filter button {
    flex: 0 0 auto;
  }

  .career-list > li {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .contact-panel__actions,
  .hero__actions {
    align-items: stretch;
  }

  .contact-panel__actions > *,
  .hero__actions > * {
    width: 100%;
  }
}
</style>
