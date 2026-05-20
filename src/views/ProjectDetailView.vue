<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppButton from '@/components/common/AppButton.vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
import AppTagList from '@/components/common/AppTagList.vue'
import ProjectGallery from '@/components/project/ProjectGallery.vue'
import ProjectMetaList from '@/components/project/ProjectMetaList.vue'
import { projects } from '@/data/projects'
import { getPlatformLabel } from '@/utils/text'

const route = useRoute()
const project = computed(() => projects.find((item) => item.id === route.params.projectId))
const relatedProjects = computed(() => {
  if (!project.value) return []
  return projects
    .filter((item) => item.id !== project.value?.id && item.platform === project.value?.platform)
    .slice(0, 3)
})
</script>

<template>
  <template v-if="project">
    <section class="project-hero" :class="`project-hero--${project.platform}`">
      <AppContainer class="project-hero__inner">
        <div class="project-hero__content">
          <RouterLink class="project-hero__back" to="/projects">← 프로젝트 목록</RouterLink>
          <p class="project-hero__eyebrow">{{ getPlatformLabel(project.platform) }} Project</p>
          <h1>{{ project.title }}</h1>
          <p>{{ project.summary }}</p>
          <AppTagList :items="project.tags" />
        </div>
        <div class="project-hero__visual">
          <img :src="project.thumbnail" :alt="`${project.title} 대표 이미지`" />
        </div>
      </AppContainer>
    </section>

    <AppSection>
      <AppContainer class="detail-layout">
        <aside class="detail-layout__aside">
          <ProjectMetaList
            :items="[
              { label: '기간', value: project.period.label },
              { label: '역할', value: project.role },
              { label: '기여도', value: project.contribution ? `${project.contribution}%` : null },
              { label: '기술', value: project.stack },
              { label: '언어', value: project.locale.toUpperCase() },
            ]"
          />
          <AppButton to="/projects" variant="ghost">목록으로</AppButton>
        </aside>

        <article class="detail-layout__content flow">
          <section>
            <h2>문제 정의</h2>
            <p>{{ project.problem }}</p>
          </section>
          <section>
            <h2>해결 방법</h2>
            <ul class="check-list">
              <li v-for="item in project.solution" :key="item">{{ item }}</li>
            </ul>
          </section>
          <section>
            <h2>결과</h2>
            <ul class="check-list">
              <li v-for="item in project.result" :key="item">{{ item }}</li>
            </ul>
          </section>
          <section>
            <h2>이미지</h2>
            <ProjectGallery :items="project.media" />
          </section>
          <section v-if="relatedProjects.length">
            <h2>같은 유형의 프로젝트</h2>
            <div class="related-list">
              <RouterLink v-for="item in relatedProjects" :key="item.id" :to="`/projects/${item.id}`">
                {{ item.title }}
              </RouterLink>
            </div>
          </section>
        </article>
      </AppContainer>
    </AppSection>
  </template>

  <AppSection v-else>
    <AppContainer class="not-found-panel">
      <h1>프로젝트를 찾을 수 없습니다.</h1>
      <p>주소가 변경되었거나 아직 이관되지 않은 프로젝트일 수 있습니다.</p>
      <AppButton to="/projects">프로젝트 목록으로</AppButton>
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
.project-hero {
  padding: clamp(54px, 8vw, 96px) 0;
  background: linear-gradient(135deg, var(--color-primary-soft), var(--color-bg));
}

.project-hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
}

.project-hero__content {
  display: grid;
  gap: 16px;
}

.project-hero__back,
.project-hero__eyebrow {
  color: var(--color-primary-strong);
  font-weight: 900;
}

.project-hero__eyebrow {
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-hero h1 {
  color: var(--color-heading);
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.15;
  letter-spacing: -0.06em;
}

.project-hero__content > p {
  color: var(--color-muted);
  font-size: 1.08rem;
}

.project-hero__visual {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
}

.project-hero__visual img {
  width: 100%;
}

.project-hero--mobile .project-hero__visual {
  max-width: 360px;
  margin-inline: auto;
}

.detail-layout {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: clamp(24px, 5vw, 56px);
  align-items: start;
}

.detail-layout__aside {
  position: sticky;
  top: calc(var(--header-height) + 20px);
  display: grid;
  gap: 14px;
}

.detail-layout__content {
  min-width: 0;
}

.detail-layout__content section {
  padding: clamp(22px, 4vw, 32px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.detail-layout__content h2 {
  margin-bottom: 14px;
  color: var(--color-heading);
  font-size: 1.35rem;
  letter-spacing: -0.03em;
}

.check-list {
  display: grid;
  gap: 10px;
  padding-left: 1.2em;
  list-style: disc;
}

.check-list li {
  color: var(--color-muted);
}

.related-list {
  display: grid;
  gap: 8px;
}

.related-list a {
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  background: var(--color-surface-strong);
  color: var(--color-primary-strong);
  font-weight: 800;
}

.not-found-panel {
  display: grid;
  justify-items: start;
  gap: 16px;
  padding: clamp(32px, 6vw, 64px) 0;
}

.not-found-panel h1 {
  color: var(--color-heading);
}

.not-found-panel p {
  color: var(--color-muted);
}

@media (max-width: 900px) {
  .project-hero__inner,
  .detail-layout {
    grid-template-columns: 1fr;
  }

  .detail-layout__aside {
    position: static;
  }
}
</style>
