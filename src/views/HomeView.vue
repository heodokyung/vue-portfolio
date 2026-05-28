<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppLottieMotion from '@/components/common/AppLottieMotion.vue'
import ProjectGrid from '@/components/project/ProjectGrid.vue'
import { aboutItems } from '@/data/about'
import { careers } from '@/data/careers'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

const featuredProjects = projects.filter((project) => project.featured).slice(0, 6)
const workProjects = projects.filter((project) => project.category === 'work')
const mobileProjects = projects.filter((project) => project.platform === 'mobile')
const responsiveProjects = projects.filter((project) => project.platform === 'responsive')
const coreSkills = skills.filter((skill) => ['frontend', 'workflow'].includes(skill.group)).slice(0, 8)
const visibleAboutItems = aboutItems.slice(0, 5)

const heroTitle = '웹을 만드는 기준을 화면으로 구현하는 UI Developer'
const heroDescription =
  '웹표준과 접근성, 마크업 컨벤션, 반응형 UI를 기반으로 운영 서비스의 화면을 안정적으로 만들고 개선합니다. 퍼블리셔의 꼼꼼함 위에 JavaScript 인터랙션과 Vue·React 화면 구현 경험을 더해, 오래 유지되는 UI 구조를 지향합니다.'

const heroStats = [
  { label: '실무 프로젝트', value: `${workProjects.length}+`, description: '커머스·금융·공공·브랜드 운영/개편' },
  { label: 'UI 경력 흐름', value: '10y+', description: '마크업, 접근성, 운영 UI, Vue/React 대응' },
  { label: '대표 사례', value: `${featuredProjects.length}`, description: '현재 포트폴리오에서 먼저 보여줄 케이스' },
]

const identityCards = [
  {
    title: 'Markup Convention',
    code: '<main> · <section> · aria',
    description: '화면을 만들기 전에 구조, 네이밍, 상태 클래스, 대체 텍스트, 키보드 이동 기준을 먼저 잡습니다.',
  },
  {
    title: 'Responsive UI',
    code: '@media · clamp · grid',
    description: '모바일, 태블릿, 데스크톱에서 정보 밀도와 터치 영역이 무너지지 않도록 레이아웃을 조정합니다.',
  },
  {
    title: 'Vue · React Screen',
    code: 'props · data · component',
    description: '정적인 퍼블리싱 산출물을 실제 데이터와 라우팅 흐름에 맞는 화면 단위로 연결합니다.',
  },
]

const projectSegments = [
  {
    title: '운영/개편 실무',
    count: workProjects.length,
    description: '이미 운영 중인 서비스의 기존 UX를 지키면서 변경 요청과 신규 화면을 안정적으로 반영한 경험입니다.',
  },
  {
    title: '모바일 UI',
    count: mobileProjects.length,
    description: '세로 화면의 정보 밀도, 터치 영역, 스크롤 흐름, 이미지 비율을 중심으로 정리한 프로젝트입니다.',
  },
  {
    title: '반응형/웹 UI',
    count: responsiveProjects.length + projects.filter((project) => project.platform === 'web').length,
    description: 'PC 웹, 반응형 웹, 금융/공공/브랜드 사이트의 화면 구조와 콘텐츠 가독성을 다룬 프로젝트입니다.',
  },
]

const processItems = ['웹표준 구조 확인', '접근성/대체 텍스트 점검', 'SCSS 네이밍 정리', '반응형 QA', '운영 반영 히스토리 관리']

const studyLinks = [
  {
    title: 'Frontend Study',
    value: 'github.com/heodokyung/frontend-study',
    href: 'https://github.com/heodokyung/frontend-study',
    description: 'Vue, React, UI 개발 학습과 실험 기록을 분리해 관리하는 저장소입니다.',
  },
  {
    title: 'Frontend Guide',
    value: 'github.com/heodokyung/frontend-guide',
    href: 'https://github.com/heodokyung/frontend-guide',
    description: '마크업 컨벤션, 접근성, SCSS/CSS 기준을 정리하는 가이드 저장소입니다.',
  },
]

const contactItems = [
  {
    title: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: '포트폴리오 검토, 채용, 프로젝트 협업 관련 연락을 받을 수 있습니다.',
  },
  {
    title: 'GitHub',
    value: 'github.com/heodokyung',
    href: profile.github,
    description: 'Vue, React, UI 구조화 관련 저장소와 작업 흐름을 확인할 수 있습니다.',
  },
  ...studyLinks,
]
</script>

<template>
  <main class="one-page" aria-labelledby="home-title">
    <section id="intro" class="hero-lab" aria-labelledby="home-title">
      <AppContainer class="hero-lab__inner">
        <div class="hero-lab__content">
          <p class="hero-lab__eyebrow">Markup Convention · Accessible UI · Responsive Screen</p>
          <h1 id="home-title">{{ heroTitle }}</h1>
          <p class="hero-lab__description">{{ heroDescription }}</p>

          <div class="hero-lab__actions" aria-label="주요 이동 링크">
            <AppButton to="/#projects" size="lg">프로젝트 보기</AppButton>
            <AppButton to="/#work" variant="ghost" size="lg">경력 흐름 보기</AppButton>
            <AppButton :href="profile.github" variant="subtle" size="lg">GitHub</AppButton>
          </div>

          <dl class="hero-lab__stats" aria-label="포트폴리오 요약 지표">
            <div v-for="stat in heroStats" :key="stat.label">
              <dt>{{ stat.label }}</dt>
              <dd>{{ stat.value }}</dd>
              <span>{{ stat.description }}</span>
            </div>
          </dl>
        </div>

        <aside class="ui-blueprint" aria-labelledby="blueprint-title">
          <div class="ui-blueprint__code" aria-hidden="true">
            <div class="ui-blueprint__dots"><span></span><span></span><span></span></div>
            <p>UI BLUEPRINT</p>
            <code>&lt;ProjectCard</code>
            <code>  role="link"</code>
            <code>  :alt="screen.description"</code>
            <code>  @media="mobile / tablet / desktop"</code>
            <code>/&gt;</code>
          </div>
          <div class="ui-blueprint__note">
            <strong id="blueprint-title">나는 화면을 코드의 기준으로 정리합니다.</strong>
            <p>화면을 예쁘게 옮기는 것에서 끝내지 않고, 다음 사람이 수정할 수 있는 구조와 사용자가 접근할 수 있는 흐름으로 만듭니다.</p>
          </div>
        </aside>
      </AppContainer>
    </section>

    <section id="identity" class="portfolio-section portfolio-section--identity" aria-labelledby="identity-title">
      <AppContainer>
        <div class="section-heading section-heading--split">
          <div>
            <p>Identity</p>
            <h2 id="identity-title">퍼블리셔의 꼼꼼함과 UI 개발자의 구조화 사이에서 일합니다.</h2>
          </div>
          <p>
            이 포트폴리오는 순수 프론트엔드 엔지니어를 과장해 보이기보다, 웹표준과 접근성을 지키고 Vue/React 화면 구현까지 대응하는 실무형 UI 개발자라는 방향에 맞춰 구성했습니다.
          </p>
        </div>

        <div class="identity-cards">
          <article v-for="item in identityCards" :key="item.title">
            <code>{{ item.code }}</code>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </AppContainer>
    </section>

    <section id="projects" class="portfolio-section" aria-labelledby="projects-title">
      <AppContainer>
        <div class="section-heading section-heading--split">
          <div>
            <p>Project Board</p>
            <h2 id="projects-title">같은 프로젝트처럼 보이지 않도록, 작업 성격을 먼저 구분합니다.</h2>
          </div>
          <p>
            대표 프로젝트는 단순 썸네일 나열이 아니라 운영/개편, 모바일 UI, 웹/반응형 UI처럼 어떤 문제를 다뤘는지 먼저 보이도록 재구성했습니다.
          </p>
        </div>

        <div class="project-segments" aria-label="프로젝트 유형 구분">
          <article v-for="segment in projectSegments" :key="segment.title">
            <span>{{ segment.count }}</span>
            <h3>{{ segment.title }}</h3>
            <p>{{ segment.description }}</p>
          </article>
        </div>

        <div class="section-toolbar">
          <strong>Featured Case Studies</strong>
          <AppButton to="/projects" variant="subtle">전체 아카이브 보기</AppButton>
        </div>
        <ProjectGrid :projects="featuredProjects" />
      </AppContainer>
    </section>

    <section id="work" class="portfolio-section portfolio-section--dark" aria-labelledby="work-title">
      <AppContainer>
        <div class="motion-panel motion-panel--work">
          <div class="motion-panel__text">
            <p>Career Road</p>
            <h2 id="work-title">지금까지 지나온 길을 한 화면에서 확인할 수 있게 정리했습니다.</h2>
            <p>
              홈에서는 더 이상 일부 경력만 보여주지 않습니다. 전체 경력 흐름을 한 페이지 안에서 보여주고, About은 보조 상세 페이지로만 남깁니다.
            </p>
          </div>
          <AppLottieMotion src="/assets/lottie/career-road.json" label="자전거를 타고 이동하는 경력 흐름 모션" />
        </div>

        <ol class="career-road" aria-label="전체 경력 흐름">
          <li v-for="career in careers" :key="career.id">
            <span>{{ career.period }}</span>
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

    <section id="skills" class="portfolio-section" aria-labelledby="skills-title">
      <AppContainer>
        <div class="motion-panel motion-panel--skill">
          <AppLottieMotion src="/assets/lottie/skill-coding.json" label="코딩 화면을 다루는 UI 개발 모션" />
          <div class="motion-panel__text">
            <p>Skill & Standard</p>
            <h2 id="skills-title">기술명보다, 화면 품질을 만드는 기준을 먼저 보여줍니다.</h2>
            <p>
              HTML/CSS/SCSS/JavaScript를 기반으로 웹표준, 접근성, 반응형 QA, Vue·React 화면 구현까지 이어지는 작업 기준을 정리했습니다.
            </p>
          </div>
        </div>

        <div class="skill-board">
          <article v-for="skill in coreSkills" :key="skill.id">
            <img v-if="skill.image" :src="skill.image" :alt="`${skill.name} 아이콘`" loading="lazy" />
            <div>
              <h3>{{ skill.name }}</h3>
              <p>{{ skill.summary }}</p>
            </div>
          </article>
        </div>
      </AppContainer>
    </section>

    <section id="about" class="portfolio-section portfolio-section--compact" aria-labelledby="about-title">
      <AppContainer>
        <div class="motion-panel motion-panel--about">
          <div class="motion-panel__text">
            <p>Certificate & Learning</p>
            <h2 id="about-title">자격증, 접근성 활동, 학습 기록도 같은 흐름 안에서 보여줍니다.</h2>
            <p>
              별도 탭으로 숨기기보다, UI 개발자로서의 기준을 만든 과정으로 이어지게 구성했습니다.
            </p>
          </div>
          <AppLottieMotion src="/assets/lottie/about-note.json" label="노트북으로 기록하고 학습하는 모션" />
        </div>

        <div class="about-strip">
          <article v-for="item in visibleAboutItems" :key="item.id">
            <span>{{ item.type }}</span>
            <h3>{{ item.title }}</h3>
            <p v-if="item.period">{{ item.period }}</p>
            <p v-if="item.summary">{{ item.summary }}</p>
            <a v-if="item.url" :href="item.url" target="_blank" rel="noreferrer noopener">바로가기</a>
          </article>
        </div>
      </AppContainer>
    </section>

    <section id="guide" class="portfolio-section portfolio-section--guide" aria-labelledby="guide-title">
      <AppContainer>
        <div class="section-heading section-heading--split">
          <div>
            <p>Study & Guide</p>
            <h2 id="guide-title">GitHub는 유지하고, 학습과 작업 가이드는 별도 링크로 구분합니다.</h2>
          </div>
          <p>
            포트폴리오 안에서 나라는 사람의 기준이 보이도록, 코드 저장소와 학습/가이드 저장소의 역할을 분리했습니다.
          </p>
        </div>
        <div class="resource-grid">
          <a v-for="link in studyLinks" :key="link.title" :href="link.href" target="_blank" rel="noreferrer noopener">
            <span>{{ link.title }}</span>
            <strong>{{ link.value }}</strong>
            <p>{{ link.description }}</p>
          </a>
        </div>
      </AppContainer>
    </section>

    <section id="contact" class="portfolio-section portfolio-section--contact" aria-labelledby="contact-title">
      <AppContainer>
        <div class="contact-panel">
          <div>
            <p>Contact</p>
            <h2 id="contact-title">웹표준과 UI 구조를 함께 보는 작업자가 필요하다면 연락 주세요.</h2>
            <p>
              반응형 UI, 접근성 점검, SCSS 구조화, Vue3/React 화면 구현, 기존 서비스 개편 업무를 중심으로 협업할 수 있습니다.
            </p>
            <div class="contact-panel__actions">
              <AppButton :href="`mailto:${profile.email}`" size="lg">메일 보내기</AppButton>
              <AppButton to="/#projects" variant="ghost" size="lg">프로젝트 다시 보기</AppButton>
            </div>
          </div>

          <ul class="contact-list" aria-label="연락 가능한 채널">
            <li v-for="item in contactItems" :key="item.title">
              <span>{{ item.title }}</span>
              <a :href="item.href" :target="item.href.startsWith('http') ? '_blank' : undefined" rel="noreferrer noopener">
                {{ item.value }}
              </a>
              <p>{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </AppContainer>
    </section>
  </main>
</template>

<style scoped lang="scss">
.one-page {
  background:
    radial-gradient(circle at 8% 4%, color-mix(in srgb, var(--color-warm) 10%, transparent), transparent 28%),
    radial-gradient(circle at 92% 18%, color-mix(in srgb, var(--color-accent) 10%, transparent), transparent 30%),
    var(--color-bg);
}

.hero-lab {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: clamp(76px, 10vw, 138px) 0 clamp(54px, 8vw, 96px);
  background:
    linear-gradient(90deg, rgb(255 255 255 / 7%) 1px, transparent 1px) 0 0 / 36px 36px,
    linear-gradient(180deg, #111827 0%, #172033 78%, var(--color-bg) 78%);
  color: #f8fafc;
}

.hero-lab::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 16% 20%, rgb(244 183 64 / 18%), transparent 28%),
    radial-gradient(circle at 84% 18%, rgb(24 160 168 / 22%), transparent 30%);
  content: '';
}

.hero-lab__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(330px, 0.94fr);
  gap: clamp(30px, 6vw, 78px);
  align-items: center;
}

.hero-lab__content {
  display: grid;
  gap: 24px;
}

.hero-lab__eyebrow,
.section-heading > p,
.motion-panel__text > p,
.contact-panel > div > p {
  color: var(--color-warm);
  font-weight: 950;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-lab h1 {
  max-width: 900px;
  color: #fff;
  font-size: clamp(2.8rem, 7.6vw, 5.7rem);
  line-height: 0.98;
  letter-spacing: -0.085em;
}

.hero-lab__description {
  max-width: 760px;
  color: rgb(226 232 240 / 86%);
  font-size: clamp(1.05rem, 1.8vw, 1.22rem);
  line-height: 1.82;
}

.hero-lab__actions,
.contact-panel__actions,
.section-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.hero-lab__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  max-width: 820px;
}

.hero-lab__stats div {
  padding: 18px;
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: var(--radius-md);
  background: rgb(255 255 255 / 7%);
  backdrop-filter: blur(12px);
}

.hero-lab__stats dt {
  color: rgb(226 232 240 / 72%);
  font-size: 0.82rem;
  font-weight: 850;
}

.hero-lab__stats dd {
  margin-top: 8px;
  color: #fff;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 950;
  line-height: 1;
}

.hero-lab__stats span {
  display: block;
  margin-top: 8px;
  color: rgb(226 232 240 / 72%);
  font-size: 0.82rem;
  line-height: 1.5;
}

.ui-blueprint {
  display: grid;
  gap: 18px;
  padding: clamp(20px, 4vw, 34px);
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 34px;
  background: rgb(248 250 252 / 9%);
  box-shadow: 0 28px 80px rgb(0 0 0 / 28%);
  backdrop-filter: blur(18px);
}

.ui-blueprint__code {
  display: grid;
  gap: 10px;
  overflow: hidden;
  padding: 22px;
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 26px;
  background:
    linear-gradient(90deg, rgb(255 255 255 / 8%) 1px, transparent 1px) 0 0 / 22px 22px,
    #07111f;
  color: var(--color-code-text);
}

.ui-blueprint__dots {
  display: flex;
  gap: 7px;
  margin-bottom: 4px;
}

.ui-blueprint__dots span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgb(255 255 255 / 38%);
}

.ui-blueprint__code p {
  color: var(--color-warm);
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.12em;
}

.ui-blueprint__code code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace;
  font-size: clamp(0.82rem, 1.35vw, 0.98rem);
  line-height: 1.55;
  white-space: normal;
}

.ui-blueprint__note {
  display: grid;
  gap: 8px;
}

.ui-blueprint__note strong {
  color: #fff;
  font-size: clamp(1.28rem, 2.6vw, 1.75rem);
  letter-spacing: -0.045em;
}

.ui-blueprint__note p {
  color: rgb(226 232 240 / 78%);
  line-height: 1.72;
}

.portfolio-section {
  padding: clamp(64px, 9vw, 112px) 0;
  scroll-margin-top: calc(var(--header-height) + 16px);
}

.portfolio-section--identity {
  padding-top: clamp(42px, 7vw, 84px);
}

.portfolio-section--dark {
  background:
    linear-gradient(90deg, rgb(255 255 255 / 6%) 1px, transparent 1px) 0 0 / 34px 34px,
    #172033;
  color: #e5edf5;
}

.portfolio-section--guide {
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--color-grid-line) 58%, transparent) 1px, transparent 1px) 0 0 / 36px 36px,
    var(--color-surface-strong);
}

.section-heading {
  display: grid;
  gap: 14px;
  margin-bottom: clamp(24px, 4vw, 36px);
}

.section-heading--split {
  grid-template-columns: minmax(0, 0.92fr) minmax(300px, 0.68fr);
  gap: clamp(20px, 5vw, 64px);
  align-items: end;
}

.section-heading h2,
.motion-panel h2,
.contact-panel h2 {
  color: var(--color-heading);
  font-size: clamp(2rem, 5vw, 3.7rem);
  line-height: 1.04;
  letter-spacing: -0.075em;
}

.portfolio-section--dark .section-heading h2,
.portfolio-section--dark .motion-panel h2 {
  color: #fff;
}

.section-heading > p:last-child,
.motion-panel__text > p:last-child,
.contact-panel > div > p:not(:first-child) {
  color: var(--color-muted);
  line-height: 1.78;
}

.portfolio-section--dark .motion-panel__text > p:last-child {
  color: rgb(226 232 240 / 76%);
}

.identity-cards,
.project-segments,
.skill-board,
.about-strip,
.resource-grid {
  display: grid;
  gap: 16px;
}

.identity-cards {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.identity-cards article,
.project-segments article,
.skill-board article,
.about-strip article,
.resource-grid a,
.contact-list li {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.identity-cards article,
.project-segments article,
.resource-grid a,
.contact-list li {
  display: grid;
  gap: 12px;
  padding: 22px;
}

.identity-cards code {
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--color-code-bg);
  color: var(--color-code-text);
  font-size: 0.8rem;
  font-weight: 900;
}

.identity-cards h3,
.project-segments h3,
.skill-board h3,
.about-strip h3,
.resource-grid strong {
  color: var(--color-heading);
  font-size: 1.1rem;
  letter-spacing: -0.025em;
}

.identity-cards p,
.project-segments p,
.skill-board p,
.about-strip p,
.resource-grid p,
.contact-list p {
  color: var(--color-muted);
  line-height: 1.68;
}

.project-segments {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 24px;
}

.project-segments span {
  width: fit-content;
  color: var(--color-primary-strong);
  font-size: 2rem;
  font-weight: 950;
  line-height: 1;
}

.section-toolbar {
  justify-content: space-between;
  margin-bottom: 18px;
}

.section-toolbar strong {
  color: var(--color-heading);
  font-size: 1.1rem;
}

.motion-panel {
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(280px, 0.72fr);
  gap: clamp(24px, 5vw, 58px);
  align-items: center;
  margin-bottom: clamp(24px, 5vw, 44px);
}

.motion-panel--skill,
.motion-panel--about {
  grid-template-columns: minmax(260px, 0.62fr) minmax(0, 1fr);
}

.motion-panel__text {
  display: grid;
  gap: 14px;
}

.career-road {
  position: relative;
  display: grid;
  gap: 18px;
  max-width: 980px;
}

.career-road::before {
  position: absolute;
  top: 12px;
  bottom: 12px;
  left: 11px;
  width: 2px;
  background: rgb(255 255 255 / 14%);
  content: '';
}

.career-road li {
  position: relative;
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr);
  gap: 24px;
  padding-left: 42px;
}

.career-road li::before {
  position: absolute;
  top: 8px;
  left: 4px;
  width: 16px;
  height: 16px;
  border: 3px solid var(--color-warm);
  border-radius: 50%;
  background: #172033;
  content: '';
}

.career-road span {
  color: var(--color-warm);
  font-weight: 900;
}

.career-road h3 {
  color: #fff;
  font-size: 1.18rem;
}

.career-road p,
.career-road ul {
  margin-top: 8px;
  color: rgb(226 232 240 / 78%);
  line-height: 1.74;
}

.career-road ul {
  display: grid;
  gap: 4px;
  padding-left: 18px;
}

.skill-board {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.skill-board article {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 16px;
  align-items: center;
  padding: 18px;
}

.skill-board img {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.about-strip {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.about-strip article {
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 18px;
}

.about-strip span,
.resource-grid span,
.contact-list span {
  color: var(--color-primary-strong);
  font-size: 0.78rem;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-strip a,
.resource-grid a {
  color: inherit;
}

.about-strip a {
  width: fit-content;
  color: var(--color-primary-strong);
  font-weight: 900;
}

.resource-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.resource-grid a {
  color: inherit;
  transition:
    transform var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.resource-grid a:hover,
.resource-grid a:focus-visible {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--color-primary) 38%, var(--color-border));
  box-shadow: var(--shadow-card);
}

.contact-panel {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(320px, 1.08fr);
  gap: clamp(24px, 5vw, 56px);
  align-items: center;
  padding: clamp(30px, 5vw, 56px);
  border: 1px solid color-mix(in srgb, var(--color-primary) 24%, var(--color-border));
  border-radius: var(--radius-xl);
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--color-grid-line) 58%, transparent) 1px, transparent 1px) 0 0 / 34px 34px,
    var(--color-surface);
  box-shadow: var(--shadow-card);
}

.contact-list {
  display: grid;
  gap: 12px;
}

.contact-list a {
  width: fit-content;
  color: var(--color-heading);
  font-weight: 950;
  overflow-wrap: anywhere;
}

.contact-list a:hover,
.contact-list a:focus-visible {
  color: var(--color-primary-strong);
}

@media (max-width: 1080px) {
  .about-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 920px) {
  .hero-lab__inner,
  .section-heading--split,
  .motion-panel,
  .motion-panel--skill,
  .motion-panel--about,
  .contact-panel {
    grid-template-columns: 1fr;
  }

  .ui-blueprint {
    order: -1;
  }

  .identity-cards,
  .project-segments,
  .resource-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .hero-lab {
    padding-top: 52px;
  }

  .hero-lab__stats,
  .skill-board,
  .about-strip {
    grid-template-columns: 1fr;
  }

  .career-road li {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .hero-lab__actions,
  .contact-panel__actions,
  .section-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .hero-lab__actions > *,
  .contact-panel__actions > *,
  .section-toolbar > * {
    width: 100%;
  }

  .contact-panel {
    padding: 22px;
  }
}
</style>
