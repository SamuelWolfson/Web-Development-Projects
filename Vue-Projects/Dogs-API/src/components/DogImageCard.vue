<script setup>
import { ref } from 'vue'
import { useDogsStore } from '@/stores/dogs'

const props = defineProps({
  imageUrl: { type: String, required: true },
  breed: { type: String, required: false },
})

const dogsStore = useDogsStore()
const isPulsing = ref(false)

const handleFavoriteClick = () => {
  dogsStore.toggleFavorite({
    imageUrl: props.imageUrl,
    breed: props.breed
  })

  isPulsing.value = true
  setTimeout(() => {
    isPulsing.value = false
  }, 300)
}
</script>

<template>
  <div class="dog-card">
    <div class="image-container">
      <img :src="imageUrl" :alt="`${breed} כלב מגזע`" class="dog-image" />
      <button 
        @click="handleFavoriteClick" 
        class="btn-favorite"
        :class="{ 
          'is-active': dogsStore.isFavorite(imageUrl),
          'pulse-animation': isPulsing 
        }"
        >
          <svg class="heart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" stroke-width="1.5"/>
        </svg>
      </button>
    </div>

    <h3 class="breed-name">{{ breed }}</h3>
  </div>
</template>

<style scoped>
.dog-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.image-container {
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.dog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn-favorite {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s;
  padding: 0;
  z-index: 10;
}

.heart-icon {
  width: 26px;
  height: 26px;
  transition: fill 0.3s ease, stroke 0.3s ease;
}

.heart-icon path {
  stroke: #666;
  fill: none;
}

.btn-favorite:hover {
  background: white;
}

.btn-favorite:hover .heart-icon path {
  stroke: #ef4444;
  fill: #ef4444;
}

.btn-favorite.is-active .heart-icon path {
  stroke: #ef4444;
  fill: #ef4444;
}

@keyframes heart-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.35); }
  100% { transform: scale(1); }
}

.pulse-animation .heart-icon {
  animation: heart-pulse 0.3s ease-out;
}

.breed-name {
  text-transform: capitalize;
  font-size: 1.4rem;
  color: #333;
  margin: 0;
}
</style>