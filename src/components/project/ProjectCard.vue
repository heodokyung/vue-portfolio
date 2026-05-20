<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue'
import AppCard from '@/components/common/AppCard.vue'
import AppTagList from '@/components/common/AppTagList.vue'
import type { Project } from '@/types/portfolio'
import { getCategoryLabel, getPlatformLabel } from '@/utils/text'

defineProps<{ project: Project }>()
</script>

<template>
  <RouterLink class="project-card-link" :to="`/projects/${project.id}`" :aria-label="`${project.title} 상세 보기`">
    <AppCard class="project-card">
      <div class="project-card__image" :class="`project-card__image--${project.platform}`">
        <img :src="project.thumbnail" :alt="`${project.title} 대표 이미지`" loading="lazy" />
        <span v-if="project.featured" class="project-card__flag">Featured</span>
      </div>

      <div class="project-card__body">
        <div class="project-card__meta">
          <AppBadge :label="getPlatformLabel(project.platform)" />
          <span>{{ getCategoryLabel(project.category) }}</span>
          <span>{{ project.period.label }}</span>
        </div>

        <div class="project-card__heading">
          <p v-if="project.company" class="project-card__company">{{ project.company }}</p>
          <h3>{{ project.title }}</h3>
        </div>

        <p class="project-card__summary">{{ project.summary }}</p>

        <div class="project-card__footer">
          <AppTagList :items="project.tags.slice(0, 4)" />
          <span v-if="project.contribution" class="project-card__contribution">기여 {{ project.contribution }}%</span>
        </div>
      </div>
    </AppCard>
  </RouterLink>
</template>

<style scoped lang="scss">
.project-card-link {
  display: block;
  height: 100%;
  border-radius: var(--radius-lg);
}

.project-card {
  position: relative;
  height: 100%;
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    border-color var(--transition-base);
}

.project-card-link:hover .project-card,
.project-card-link:focus-visible .project-card {
  transform: translateY(-5px);
  border-color: color-mix(in srgb, var(--color-primary) 56%, var(--color-border));
  box-shadow: var(--shadow-card);
}

.project-card__image {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--color-primary-soft) 72%, transparent), transparent),
    var(--color-surface-strong);
}

.project-card__image--mobile {
  display: grid;
  place-items: center;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.project-card__image--mobile img {
  width: min(62%, 220px);
  object-fit: contain;
}

.project-card-link:hover .project-card__image img,
.project-card-link:focus-visible .project-card__image img {
  transform: scale(1.035);
}

.project-card__flag {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 6px 10px;
  border: 1px solid color-mix(in srgb, var(--color-primary) 24%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
  color: var(--color-primary-strong);
  font-size: 0.74rem;
  font-weight: 900;
  backdrop-filter: blur(12px);
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
  font-weight: 800;
}

.project-card__meta > span:not(:last-child)::after {
  margin-left: 8px;
  color: color-mix(in srgb, var(--color-muted) 42%, transparent);
  content: '•';
}

.project-card__heading {
  display: grid;
  gap: 5px;
}

.project-card__company {
  color: var(--color-primary-strong);
  font-size: 0.84rem;
  font-weight: 900;
}

.project-card h3 {
  color: var(--color-heading);
  font-size: clamp(1.1rem, 2vw, 1.22rem);
  line-height: 1.35;
  letter-spacing: -0.035em;
}

.project-card__summary {
  display: -webkit-box;
  min-height: 4.9em;
  overflow: hidden;
  color: var(--color-muted);
  font-size: 0.94rem;
  line-height: 1.65;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.project-card__footer {
  display: grid;
  gap: 12px;
  align-items: start;
  padding-top: 2px;
}

.project-card__contribution {
  justify-self: start;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--color-surface-strong);
  color: var(--color-muted);
  font-size: 0.78rem;
  font-weight: 850;
}

@media (max-width: 640px) {
  .project-card__summary {
    min-height: auto;
  }
}
</style>
