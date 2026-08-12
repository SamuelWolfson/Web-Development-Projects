<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useDogsStore } from '@/stores/dogs'

const route = useRoute()
const dogsStore = useDogsStore()
  
  const pageTitle = computed(() => route.meta.title || 'Dog Explorer')
  const pageDescription = computed(() => route.meta.description || 'האפליקציה לגילוי וחיפוש גזעי כלבים')
</script>

<template>
  <header class="app-header">
    <div class="header-top">
      <div class="logo">
        <RouterLink to="/">🐶 אוהבים כלבים</RouterLink>
      </div>

      <nav class="nav-links">
        <RouterLink to="/">בית</RouterLink>
        <RouterLink to="/breeds">גזעים</RouterLink>
        <RouterLink to="/favorites">
          מועדפים ({{ dogsStore.favoritesCount || 0 }})
        </RouterLink>
      </nav>
    </div>

    <div class="header-info">
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageDescription }}</p>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1rem 2rem;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 0.8rem;
}

.logo a {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: #555;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-links a:hover {
  color: #42b983;
  background-color: #f0fdf4;
}

.nav-links a.router-link-active {
  color: #42b983;
  font-weight: bold;
  background-color: #e6f7f0;
}

.header-info {
  margin-top: 1rem;
  text-align: right;
}

.header-info h1 {
  margin: 0;
  font-size: 1.4rem;
  color: #2c3e50;
}

.header-info p {
  margin: 0.3rem 0 0 0;
  color: #666;
  font-size: 0.9rem;
}
</style>