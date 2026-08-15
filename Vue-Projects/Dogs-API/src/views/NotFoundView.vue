<script setup>

import { RouterLink } from 'vue-router'

</script>

<template>

  <div class="not-found-container">
    <h1 class="error-code">404</h1>
    <h2>עמוד לא נמצא</h2>
    <p>המקור שחיפשת אינו קיים או שהועבר לכתובת אחרת</p>
    <RouterLink to="/" class="home-link">חזור לדף הבית</RouterLink>
  </div>

</template>

<style scoped>

.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 60vh;
  padding: 20px;
}

.error-code {
  font-size: 5rem;
  font-weight: bold;
  color: #e74c3c;
  margin: 0;
}

h2 {
  font-size: 2rem;
  margin-top: 10px;
  color: #2c3e50;
}

p {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 25px;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.home-link:hover {
  background-color: #369b6e;
}

</style>
