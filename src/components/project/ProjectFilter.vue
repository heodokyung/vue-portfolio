<script setup lang="ts">
import type { ProjectFilterValue } from '@/types/portfolio'

const modelValue = defineModel<ProjectFilterValue>({ required: true })

const filterGroups: { title: string; description: string; filters: { label: string; value: ProjectFilterValue }[] }[] = [
  {
    title: '프로젝트 유형',
    description: '실무, 개인, 학습 프로젝트를 구분합니다.',
    filters: [
      { label: '전체', value: 'all' },
      { label: '실무', value: 'work' },
      { label: '개인', value: 'side' },
      { label: '학습', value: 'study' },
    ],
  },
  {
    title: '화면 환경',
    description: '웹, 모바일, 반응형 프로젝트를 구분합니다.',
    filters: [
      { label: 'Web', value: 'web' },
      { label: 'Mobile', value: 'mobile' },
      { label: 'Responsive', value: 'responsive' },
    ],
  },
]
</script>

<template>
  <div class="project-filter" aria-label="프로젝트 필터">
    <div v-for="group in filterGroups" :key="group.title" class="project-filter__group">
      <div class="project-filter__head">
        <strong>{{ group.title }}</strong>
        <span>{{ group.description }}</span>
      </div>

      <div class="project-filter__buttons" role="group" :aria-label="group.title">
        <button
          v-for="filter in group.filters"
          :key="filter.value"
          class="project-filter__button"
          :class="{ 'is-active': modelValue === filter.value }"
          type="button"
          :aria-pressed="modelValue === filter.value"
          @click="modelValue = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-filter {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 14px;
  margin-bottom: 24px;
}

.project-filter__group {
  display: grid;
  gap: 14px;
  padding: 18px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
  box-shadow: var(--shadow-soft);
}

.project-filter__head {
  display: grid;
  gap: 4px;
}

.project-filter__head strong {
  color: var(--color-heading);
  font-size: 0.98rem;
}

.project-filter__head span {
  color: var(--color-muted);
  font-size: 0.86rem;
  line-height: 1.5;
}

.project-filter__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-filter__button {
  min-height: 40px;
  padding: 8px 14px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-muted);
  font-weight: 800;
  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.project-filter__button:hover,
.project-filter__button:focus-visible,
.project-filter__button.is-active {
  border-color: var(--color-primary);
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
}

.project-filter__button:hover,
.project-filter__button:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 10px 20px color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.project-filter__button.is-active {
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--color-primary) 34%, transparent);
}

@media (max-width: 820px) {
  .project-filter {
    grid-template-columns: 1fr;
  }
}
</style>
