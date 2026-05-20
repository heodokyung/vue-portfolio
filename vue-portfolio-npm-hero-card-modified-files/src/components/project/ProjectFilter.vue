<script setup lang="ts">
import type { ProjectFilterValue } from '@/types/portfolio'

const modelValue = defineModel<ProjectFilterValue>({ required: true })

const filters: { label: string; value: ProjectFilterValue }[] = [
  { label: '전체', value: 'all' },
  { label: '실무', value: 'work' },
  { label: '개인', value: 'side' },
  { label: '학습', value: 'study' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Responsive', value: 'responsive' },
]
</script>

<template>
  <div class="project-filter" role="group" aria-label="프로젝트 필터">
    <button
      v-for="filter in filters"
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
</template>

<style scoped lang="scss">
.project-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.project-filter__button {
  min-height: 40px;
  padding: 8px 14px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-muted);
  font-weight: 800;
}

.project-filter__button:hover,
.project-filter__button.is-active {
  border-color: var(--color-primary);
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
}
</style>
