<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useDogsStore } from '@/stores/dogs'

const route = useRoute()
const dogsStore = useDogsStore()
  
  const pageTitle = computed(() => route.meta.title || 'Dog Explorer')
  const pageDescription = computed(() => route.meta.description || 'מביעים אהבה לכלבים')
</script>

<template>
  <header class="app-header">
    <div class="header-top">
      <div class="logo">
        <RouterLink to="/" class="app-name">🐶 אוהבים כלבים 🐶</RouterLink>
      </div>

      <nav class="nav-links">
        <RouterLink to="/">בית</RouterLink>
        <RouterLink to="/breeds">גזעים</RouterLink>
        <RouterLink to="/favorites">
          מלובלבים ({{ dogsStore.favoritesCount || 0 }})
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
  width: 100%;
  box-sizing: border-box;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 5px;
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

.app-name {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.4rem;
  font-weight: 800;
  cursor: pointer;
  background: linear-gradient(135deg, #ff7e5f, #feb47b, #ff6b6b);
  -webkit-background-clip: text;
  background-clip: text; 
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 15px rgba(255, 126, 95, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  user-select: none;
}

.app-name:hover {
  transform: translateY(-4px) scale(1.06);
  filter: drop-shadow(0 8px 20px rgba(255, 107, 107, 0.5));
}

.nav-links {
  display: flex;
  gap: 12px;
  background: #f3f4f6;
  padding: 6px;
  border-radius: 16px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  position: relative;
  overflow: hidden;
}

.nav-links a:hover {
  color: #ff6b6b;
  background: rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.nav-links a.router-link-active {
  background: linear-gradient(135deg, #ff7e5f, #ff6b6b);
  color: #ffffff;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  transform: translateY(-2px);
}

.nav-links a:active {
  transform: translateY(1px) scale(0.97);
}

.header-info {
  margin-top: 1.5rem;
  text-align: right;
  padding: 16px 20px;
  background: linear-gradient(120deg, rgba(255, 126, 95, 0.05), rgba(254, 180, 123, 0.08));
  border-right: 5px solid #ff7e5f;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  animation: fadeIn 0.5s ease-in-out;
}

.header-info h1 {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2c3e50, #4b5563);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.header-info p {
  margin: 0.4rem 0 0 0;
  color: #6b7280;
  font-size: 0.95rem;
  font-weight: 500;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>