<script setup lang="ts">
import AppCard from '@/components/common/AppCard.vue'
import AppTagList from '@/components/common/AppTagList.vue'
import type { Project } from '@/types/portfolio'
import { getCategoryLabel, getPlatformLabel } from '@/utils/text'

defineProps<{ project: Project }>()
</script>

<template>
  <RouterLink class="project-card-link" :to="`/projects/${project.id}`" :aria-label="`${project.title} 상세 보기`">
    <AppCard class="project-card" :class="`project-card--${project.platform}`">
      <div class="project-card__image" :class="`project-card__image--${project.platform}`">
        <img class="project-card__thumbnail" :src="project.thumbnail" :alt="`${project.title} 대표 이미지`" loading="lazy" />
        <span class="project-card__type">{{ getPlatformLabel(project.platform) }}</span>
      </div>

      <div class="project-card__body">
        <div class="project-card__meta">
          <span>{{ getCategoryLabel(project.category) }}</span>
          <span>{{ project.period.label }}</span>
        </div>

        <div class="project-card__heading">
          <p v-if="project.company" class="project-card__company">{{ project.company }}</p>
          <h3>{{ project.title }}</h3>
        </div>

        <p class="project-card__summary">{{ project.summary }}</p>

        <div class="project-card__footer">
          <AppTagList :items="project.tags.slice(0, 3)" />
          <span v-if="project.contribution" class="project-card__contribution">{{ project.contribution }}%</span>
        </div>
      </div>
    </AppCard>
  </RouterLink>
</template>

<style scoped lang="scss">
.project-card-link {
  display: block;
  height: 100%;
  border-radius: var(--radius-md);
}

.project-card {
  position: relative;
  overflow: hidden;
  height: 100%;
  border: 2px solid var(--color-heading);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-flat);
  transition:
    box-shadow var(--transition-base),
    border-color var(--transition-base),
    background var(--transition-base);
}

.project-card::before {
  position: absolute;
  inset: 0 0 auto;
  z-index: 1;
  height: 7px;
  background: var(--color-warm);
  content: '';
}

.project-card--mobile::before {
  background: var(--color-accent);
}

.project-card--responsive::before {
  background: var(--color-lavender);
}

.project-card-link:is(:hover, :focus-visible) .project-card {
  border-color: var(--color-primary-strong);
  box-shadow: var(--shadow-flat);
}

.project-card__image {
  position: relative;
  overflow: hidden;
  margin: 14px 14px 0;
  aspect-ratio: 16 / 10.2;
  border: 2px solid var(--color-heading);
  border-radius: 14px;
  background:
    linear-gradient(90deg, rgb(255 255 255 / 8%) 1px, transparent 1px) 0 0 / 28px 28px,
    linear-gradient(0deg, rgb(255 255 255 / 8%) 1px, transparent 1px) 0 0 / 28px 28px,
    #182033;
  transform: translateZ(0);
  isolation: isolate;
}

.project-card__thumbnail {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0) scale(1.02);
  transform-origin: 50% 32%;
  transition: transform 680ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.project-card__image--mobile {
  display: grid;
  place-items: center;
  background: #172033;
}

.project-card__image--mobile .project-card__thumbnail {
  width: 124%;
  height: 124%;
  object-fit: cover;
  object-position: center;
  transform: translate3d(0, 0, 0) scale(1.04);
  transform-origin: center;
}

.project-card-link:hover .project-card__thumbnail,
.project-card-link:focus-visible .project-card__thumbnail,
.project-card-link:focus-within .project-card__thumbnail {
  transform: translate3d(0, 0, 0) scale(1.14);
}

.project-card-link:hover .project-card__image--mobile .project-card__thumbnail,
.project-card-link:focus-visible .project-card__image--mobile .project-card__thumbnail,
.project-card-link:focus-within .project-card__image--mobile .project-card__thumbnail {
  transform: translate3d(0, 0, 0) scale(1.18);
}

.project-card__type {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  padding: 6px 10px;
  border: 2px solid var(--color-heading);
  border-radius: 999px;
  background: var(--color-warm);
  color: var(--color-heading);
  font-size: 0.72rem;
  font-weight: 950;
}

.project-card--mobile .project-card__type {
  background: var(--color-accent-soft);
}

.project-card--responsive .project-card__type {
  background: var(--color-lavender-soft);
}

.project-card__body {
  display: grid;
  gap: 10px;
  padding: 16px;
}

.project-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  color: var(--color-muted);
  font-size: 0.78rem;
  font-weight: 850;
}

.project-card__meta > span:not(:last-child)::after {
  margin-left: 8px;
  color: var(--color-border-strong);
  content: '•';
}

.project-card__heading {
  display: grid;
  gap: 5px;
}

.project-card__company {
  color: var(--color-primary-strong);
  font-size: 0.8rem;
  font-weight: 950;
}

.project-card h3 {
  color: var(--color-heading);
  font-size: clamp(0.98rem, 1.35vw, 1.08rem);
  line-height: 1.36;
  letter-spacing: -0.035em;
  overflow-wrap: anywhere;
}

.project-card__summary {
  display: -webkit-box;
  min-height: 4.25em;
  overflow: hidden;
  color: var(--color-muted);
  font-size: 0.86rem;
  line-height: 1.58;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.project-card__footer {
  display: grid;
  gap: 10px;
  align-items: start;
}

.project-card__contribution {
  justify-self: start;
  padding: 5px 9px;
  border: 1px solid var(--color-heading);
  border-radius: 999px;
  background: var(--color-warm-soft);
  color: var(--color-heading);
  font-size: 0.74rem;
  font-weight: 950;
}

@media (max-width: 640px) {
  .project-card__image--mobile .project-card__thumbnail {
    width: 128%;
    height: 128%;
    transform: translate3d(0, 0, 0) scale(1.03);
  }

  .project-card-link:hover .project-card__image--mobile .project-card__thumbnail,
  .project-card-link:focus-visible .project-card__image--mobile .project-card__thumbnail,
  .project-card-link:focus-within .project-card__image--mobile .project-card__thumbnail {
    transform: translate3d(0, 0, 0) scale(1.12);
  }

  .project-card__summary {
    min-height: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card__thumbnail {
    transition-duration: 220ms;
  }

  .project-card-link:hover .project-card__thumbnail,
  .project-card-link:focus-visible .project-card__thumbnail,
  .project-card-link:focus-within .project-card__thumbnail {
    transform: translate3d(0, 0, 0) scale(1.06);
  }

  .project-card-link:hover .project-card__image--mobile .project-card__thumbnail,
  .project-card-link:focus-visible .project-card__image--mobile .project-card__thumbnail,
  .project-card-link:focus-within .project-card__image--mobile .project-card__thumbnail {
    transform: translate3d(0, 0, 0) scale(1.08);
  }
}
</style>
