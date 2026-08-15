<script setup>
import { computed } from 'vue'

const props = defineProps({
  breed: {
    type: String,
    required: true
  }
})

</script>

<template>
  <router-link :to="`/breeds/${breed}`" class="breed-card-link">
    <div class="breed-card">
      <h3 class="breed-name">{{ breed }}</h3>
    </div>
  </router-link>
</template>

<style scoped>
.breed-card-link {
  text-decoration: none;
  display: flex;
  height: 100%;
}

.breed-card {
  background: white;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.breed-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.breed-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: #2563eb;
  margin: 0;
  text-transform: capitalize;
  word-break: break-word;
}
</style>