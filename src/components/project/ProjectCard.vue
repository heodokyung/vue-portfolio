<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue'
import AppCard from '@/components/common/AppCard.vue'
import AppTagList from '@/components/common/AppTagList.vue'
import type { Project } from '@/types/portfolio'
import { getPlatformLabel } from '@/utils/text'

defineProps<{ project: Project }>()
</script>

<template>
  <RouterLink class="project-card-link" :to="`/projects/${project.id}`">
    <AppCard class="project-card">
      <div class="project-card__image">
        <img :src="project.thumbnail" :alt="`${project.title} 대표 이미지`" loading="lazy" />
      </div>
      <div class="project-card__body">
        <div class="project-card__meta">
          <AppBadge :label="getPlatformLabel(project.platform)" />
          <span>{{ project.period.label }}</span>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
        <AppTagList :items="project.tags.slice(0, 4)" />
      </div>
    </AppCard>
  </RouterLink>
</template>

<style scoped lang="scss">
.project-card-link {
  display: block;
  height: 100%;
}

.project-card {
  height: 100%;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.project-card-link:hover .project-card {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--color-primary) 55%, var(--color-border));
  box-shadow: var(--shadow-card);
}

.project-card__image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-surface-strong);
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__body {
  display: grid;
  gap: 14px;
  padding: 20px;
}

.project-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  color: var(--color-muted);
  font-size: 0.82rem;
  font-weight: 700;
}

.project-card h3 {
  color: var(--color-heading);
  font-size: 1.16rem;
  line-height: 1.35;
  letter-spacing: -0.03em;
}

.project-card p {
  display: -webkit-box;
  overflow: hidden;
  color: var(--color-muted);
  font-size: 0.94rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
