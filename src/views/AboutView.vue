<script setup lang="ts">
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
import AppSectionTitle from '@/components/common/AppSectionTitle.vue'
import { aboutItems } from '@/data/about'
import { careers } from '@/data/careers'
import { profile } from '@/data/profile'
import { skills } from '@/data/skills'

const groupedSkills = {
  frontend: skills.filter((skill) => skill.group === 'frontend'),
  workflow: skills.filter((skill) => skill.group === 'workflow'),
  collaboration: skills.filter((skill) => skill.group === 'collaboration'),
}
</script>

<template>
  <AppSection>
    <AppContainer>
      <AppSectionTitle
        eyebrow="About"
        :title="`${profile.nameKo} / ${profile.role}`"
        :description="profile.description"
      />
      <div class="about-grid">
        <article>
          <h2>경력</h2>
          <ol class="timeline">
            <li v-for="career in careers" :key="career.id">
              <span>{{ career.period }}</span>
              <strong>{{ career.company }}</strong>
              <p>{{ career.summary }}</p>
            </li>
          </ol>
        </article>
        <aside>
          <h2>기술</h2>
          <section v-for="(items, group) in groupedSkills" :key="group" class="skill-group">
            <h3>{{ group }}</h3>
            <ul>
              <li v-for="skill in items" :key="skill.id">{{ skill.name }}</li>
            </ul>
          </section>
        </aside>
      </div>
    </AppContainer>
  </AppSection>

  <AppSection tone="surface">
    <AppContainer>
      <AppSectionTitle eyebrow="History" title="자격/교육/활동" />
      <div class="about-card-list">
        <article v-for="item in aboutItems" :key="item.id">
          <span>{{ item.type }}</span>
          <h3>{{ item.title }}</h3>
          <p v-if="item.period">{{ item.period }}</p>
          <p v-if="item.organization">{{ item.organization }}</p>
          <p v-if="item.summary">{{ item.summary }}</p>
          <a v-if="item.url" :href="item.url" target="_blank" rel="noreferrer noopener">관련 링크</a>
        </article>
      </div>
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: clamp(24px, 5vw, 56px);
}

.about-grid article,
.about-grid aside,
.about-card-list article {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.about-grid article,
.about-grid aside {
  padding: clamp(20px, 4vw, 32px);
}

h2 {
  margin-bottom: 20px;
  color: var(--color-heading);
  font-size: 1.4rem;
}

.timeline {
  display: grid;
  gap: 18px;
}

.timeline li {
  padding-bottom: 18px;
  border-bottom: 1px solid var(--color-border);
}

.timeline li:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.timeline span,
.about-card-list span {
  color: var(--color-primary);
  font-size: 0.82rem;
  font-weight: 900;
  text-transform: uppercase;
}

.timeline strong {
  display: block;
  margin: 4px 0 8px;
  color: var(--color-heading);
  font-size: 1.1rem;
}

.timeline p,
.about-card-list p {
  color: var(--color-muted);
}

.skill-group + .skill-group {
  margin-top: 22px;
}

.skill-group h3 {
  margin-bottom: 10px;
  color: var(--color-primary-strong);
  font-size: 0.94rem;
  text-transform: capitalize;
}

.skill-group ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-group li {
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--color-primary-soft);
  color: var(--color-primary-strong);
  font-weight: 800;
}

.about-card-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.about-card-list article {
  display: grid;
  gap: 8px;
  padding: 20px;
}

.about-card-list h3 {
  color: var(--color-heading);
  line-height: 1.35;
}

.about-card-list a {
  color: var(--color-primary-strong);
  font-weight: 900;
}

@media (max-width: 980px) {
  .about-grid,
  .about-card-list {
    grid-template-columns: 1fr;
  }
}
</style>
