<script setup lang="ts">
import ProjectCard from '@/components/project/ProjectCard.vue'
import type { Project } from '@/types/portfolio'

defineProps<{ projects: Project[] }>()
</script>

<template>
  <div v-if="projects.length" class="project-grid">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
  <div v-else class="project-grid__empty" role="status">
    조건에 맞는 프로젝트가 없습니다.
  </div>
</template>

<style scoped lang="scss">
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.project-grid__empty {
  padding: 32px;
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  color: var(--color-muted);
  text-align: center;
}

@media (max-width: 980px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
