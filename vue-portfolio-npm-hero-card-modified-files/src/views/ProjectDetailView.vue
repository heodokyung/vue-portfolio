<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppButton from '@/components/common/AppButton.vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
import ProjectDetailTemplate from '@/components/project/ProjectDetailTemplate.vue'
import { projects } from '@/data/projects'

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
  <ProjectDetailTemplate v-if="project" :project="project" :related-projects="relatedProjects" />

  <AppSection v-else>
    <AppContainer class="not-found-panel">
      <h1>프로젝트를 찾을 수 없습니다.</h1>
      <p>주소가 변경되었거나 아직 이관되지 않은 프로젝트일 수 있습니다.</p>
      <AppButton to="/projects">프로젝트 목록으로</AppButton>
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
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
</style>
