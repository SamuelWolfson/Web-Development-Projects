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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; /* ממרכז את כל הרכיבים אופקית */
  width: 100%;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  color: #1f2937;
  box-sizing: border-box;
}

/* דואג שגם ההדר למעלה יישב ברוחב ובמרכז הנכון */
.app-container > :deep(header),
.app-container > .app-header {
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
}

.main-content-wrapper {
  width: 100%;
  display: flex;
  justify-content: center; /* ממרכז את קופסת התוכן */
  padding: 2.5rem 1.5rem;
  box-sizing: border-box;
}

.main-content {
  width: 100%;
  max-width: 1100px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05), 
              0 1px 3px 0 rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(229, 231, 235, 0.8);
  box-sizing: border-box;
  animation: fadeInContent 0.4s ease-out;
}

@keyframes fadeInContent {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>