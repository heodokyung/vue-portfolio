<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import AppContainer from '@/components/common/AppContainer.vue'
import AppSection from '@/components/common/AppSection.vue'
</script>

<template>
  <AppSection>
    <AppContainer class="not-found">
      <p>404</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <span>주소가 변경되었거나 아직 이관되지 않은 페이지입니다.</span>
      <AppButton to="/">홈으로 이동</AppButton>
    </AppContainer>
  </AppSection>
</template>

<style scoped lang="scss">
.not-found {
  display: grid;
  min-height: 50vh;
  place-content: center;
  justify-items: center;
  gap: 14px;
  text-align: center;
}

.not-found p {
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 900;
}

.not-found h1 {
  color: var(--color-heading);
  font-size: clamp(2rem, 5vw, 4rem);
}

.not-found span {
  color: var(--color-muted);
}
</style>
