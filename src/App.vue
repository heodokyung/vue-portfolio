<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <a class="skip-link" href="#main-content">본문 바로가기</a>
  <AppHeader />
  <main id="main-content" class="page" tabindex="-1">
    <RouterView />
  </main>
  <AppFooter />
</template>
