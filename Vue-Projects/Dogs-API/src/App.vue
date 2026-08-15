<script setup>

import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'

</script>

<template>

  <div class="app-container">

    <AppHeader />

    <RouterView class="main-content" />

  </div>

</template>

<style scoped>
.app-container {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
}

</style>