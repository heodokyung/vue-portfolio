<script setup lang="ts">
import { computed, ref } from 'vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
import AppSectionTitle from '@/components/common/AppSectionTitle.vue'
import ProjectFilter from '@/components/project/ProjectFilter.vue'
import ProjectGrid from '@/components/project/ProjectGrid.vue'
import { projects } from '@/data/projects'
import type { ProjectCategory, ProjectFilterValue, ProjectPlatform } from '@/types/portfolio'
import { getProjectFilterLabel } from '@/utils/text'

const currentFilter = ref<ProjectFilterValue>('all')
const categoryFilters: ProjectCategory[] = ['work', 'side', 'study']
const platformFilters: ProjectPlatform[] = ['web', 'mobile', 'responsive']

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') return projects
  if (categoryFilters.includes(currentFilter.value as ProjectCategory)) {
    return projects.filter((project) => project.category === currentFilter.value)
  }
  if (platformFilters.includes(currentFilter.value as ProjectPlatform)) {
    return projects.filter((project) => project.platform === currentFilter.value)
  }
  return projects
})

const archiveStats = computed(() => [
  { label: '전체 프로젝트', value: projects.length },
  { label: '실무 프로젝트', value: projects.filter((project) => project.category === 'work').length },
  { label: '대표 프로젝트', value: projects.filter((project) => project.featured).length },
  { label: '반응형/모바일', value: projects.filter((project) => project.platform !== 'web').length },
])

const currentFilterLabel = computed(() => getProjectFilterLabel(currentFilter.value))
</script>

<template>
  <AppSection>
    <AppContainer>
      <div class="projects-hero">
        <AppSectionTitle
          eyebrow="Projects"
          title="프로젝트 아카이브"
          description="실무 운영, 개편, 금융, 커머스, 개인 학습 프로젝트를 데이터 기반으로 정리했습니다. 필터는 프로젝트 성격과 화면 환경을 분리해 빠르게 탐색할 수 있도록 구성했습니다."
        />

        <dl class="projects-hero__stats" aria-label="프로젝트 아카이브 요약">
          <div v-for="stat in archiveStats" :key="stat.label">
            <dt>{{ stat.label }}</dt>
            <dd>{{ stat.value }}</dd>
          </div>
        </dl>
      </div>

      <ProjectFilter v-model="currentFilter" />

      <div class="projects-result" role="status" aria-live="polite">
        <p>
          <strong>{{ currentFilterLabel }}</strong> 기준으로
          <strong>{{ filteredProjects.length }}</strong>
          개의 프로젝트를 보여주고 있습니다.
        </p>
        <button v-if="currentFilter !== 'all'" type="button" @click="currentFilter = 'all'">전체 보기로 초기화</button>
      </div>

      <ProjectGrid :projects="filteredProjects" />
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
.projects-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 380px);
  gap: clamp(20px, 4vw, 44px);
  align-items: end;
  margin-bottom: 24px;
}

.projects-hero :deep(.section-title) {
  margin-bottom: 0;
}

.projects-hero__stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.projects-hero__stats div {
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.projects-hero__stats dt {
  color: var(--color-muted);
  font-size: 0.8rem;
  font-weight: 800;
}

.projects-hero__stats dd {
  margin-top: 6px;
  color: var(--color-heading);
  font-size: clamp(1.45rem, 3vw, 2rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
}

.projects-result {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding: 14px 18px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-muted);
  box-shadow: var(--shadow-soft);
}

.projects-result p {
  line-height: 1.55;
}

.projects-result strong {
  color: var(--color-primary-strong);
  font-weight: 900;
}

.projects-result button {
  min-height: 38px;
  flex: 0 0 auto;
  padding: 8px 12px;
  border: 1px solid color-mix(in srgb, var(--color-primary) 20%, transparent);
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
  font-weight: 850;
}

.projects-result button:hover,
.projects-result button:focus-visible {
  border-color: var(--color-primary);
}

@media (max-width: 860px) {
  .projects-hero {
    grid-template-columns: 1fr;
    align-items: start;
  }
}

@media (max-width: 560px) {
  .projects-hero__stats {
    grid-template-columns: 1fr;
  }

  .projects-result {
    align-items: stretch;
    flex-direction: column;
  }

  .projects-result button {
    width: 100%;
  }
}
</style>
