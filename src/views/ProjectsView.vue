<script setup lang="ts">
import { computed, ref } from 'vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
import AppSectionTitle from '@/components/common/AppSectionTitle.vue'
import ProjectFilter from '@/components/project/ProjectFilter.vue'
import type { ProjectFilterValue } from '@/types/portfolio'
import ProjectGrid from '@/components/project/ProjectGrid.vue'
import { projects } from '@/data/projects'

const currentFilter = ref<ProjectFilterValue>('all')

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') return projects
  if (currentFilter.value === 'work' || currentFilter.value === 'side') {
    return projects.filter((project) => project.category === currentFilter.value)
  }
  return projects.filter((project) => project.platform === currentFilter.value)
})
</script>

<template>
  <AppSection>
    <AppContainer>
      <AppSectionTitle
        eyebrow="Projects"
        title="프로젝트 아카이브"
        description="기존 37개 개별 상세 페이지를 데이터 기반 구조로 통합하기 위한 1차 프로젝트 목록입니다."
      />
      <ProjectFilter v-model="currentFilter" />
      <ProjectGrid :projects="filteredProjects" />
    </AppContainer>
  </AppSection>
</template>
