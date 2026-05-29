<script setup lang="ts">
import ProjectCard from '@/components/project/ProjectCard.vue'
import type { Project } from '@/types/portfolio'

defineProps<{
  projects: readonly Project[]
}>()
</script>

<template>
  <div class="project-grid" aria-live="polite">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<style scoped lang="scss">
.project-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(14px, 2vw, 20px);
  align-items: stretch;
}

@media (max-width: 1180px) {
  .project-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 860px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
