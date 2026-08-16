<script setup>
import { ref, computed } from 'vue'
import { useDogsStore } from '@/stores/dogs'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'
import EmptyState from '@/components/EmptyState.vue'
import DogImageCard from '@/components/DogImageCard.vue'

const dogsStore = useDogsStore()
const isLoading = ref(false)
const errorMessage = ref('')

const fetchNewDog = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    await dogsStore.fetchRandomDog()
  } catch (error) {
    errorMessage.value = '.לא ניתן היה לטעון תמונה אקראית. בדוק את החיבור לרשת '
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="home-view">
    <h2>אוהב כ-לב</h2>

    <LoadingState v-if="dogsStore.isLoadingDog && !dogsStore.currentDog.imageUrl" message="טוען תמונה אקראית..." />

    <ErrorState v-else-if="dogsStore.errorMessage" :message="dogsStore.errorMessage" />

    <DogImageCard 
      v-else-if="dogsStore.currentDog.imageUrl"
      :image-url="dogsStore.currentDog.imageUrl"
      :breed="dogsStore.currentDog.breed"
    />

    <EmptyState 
      v-else 
      title="אין תמונה להצגה" 
      message="לחץ על הכפתור כדי לטעון תמונה" 
    />
  
    <button 
      @click="fetchNewDog" 
      :disabled="dogsStore.isLoadingDog" 
      class="btn-fetch"
    >
      {{ dogsStore.isLoadingDog ? 'טוען...' : 'החלף תמונה' }}
    </button>
  </div>
</template>

<style scoped>

.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-height: 520px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.home-view h2 {
  font-size: 2.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2c3e50, #4b5563);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  letter-spacing: -0.5px;
  position: relative;
}

.home-view h2::after {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background: linear-gradient(135deg, #ff7e5f, #ff6b6b);
  margin: 8px auto 0 auto;
  border-radius: 2px;
}

.btn-fetch {
  padding: 0.85rem 2rem;
  font-size: 1.05rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff7e5f, #ff6b6b);
  color: white;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.35);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3px;
}

.btn-fetch:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 25px rgba(255, 107, 107, 0.5);
}

.btn-fetch:active:not(:disabled) {
  transform: translateY(1px) scale(0.98);
}

.btn-fetch:disabled {
  background: #9ca3af;
  opacity: 0.7;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}
</style>