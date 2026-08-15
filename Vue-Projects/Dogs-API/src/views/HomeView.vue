<script setup>

import { ref, onMounted, computed } from 'vue'
import { dogsService } from '@/services/dogs.service'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'
import EmptyState from '@/components/EmptyState.vue'
import DogImageCard from '@/components/DogImageCard.vue'

const isLoading = ref(false)
const errorMessage = ref('')

const buttonText = computed(() => {

  if (isLoading.value) return 'טוען...'
  if (errorMessage.value) return 'נסה שוב'
  return 'החלף תמונה'

})

const dogData = ref({
  imageUrl: '',
  breed: ''
})

const fetchRandomDog = async () => {

  isLoading.value = true
  errorMessage.value = ''

  try {
    const data = await dogsService.getRandomDogImage()
    dogData.value = data
  } catch (error) {
    errorMessage.value = '.לא ניתן היה לטעון תמונה אקראית. בדוק את החיבור לרשת '
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchRandomDog()
})

</script>

<template>

  <div class="home-view">

    <h2>אוהב כ-לב</h2>

      <LoadingState v-if="isLoading" buttonText="...טועןה" message=".טוען תמונה אקראית" />

      <ErrorState 
      v-else-if="errorMessage" 
      :message="errorMessage" 
      />

      <DogImageCard 
        v-else-if="dogData.imageUrl"
        :image-url="dogData.imageUrl"
        :breed="dogData.breed"
        :is-loading="isLoading"
      />
  
      <EmptyState 
        v-else 
        title="אין תמונה להצגה" 
        message="לחץ על הכפתור כדי לטעון תמונה" 
      />
    
      <button 
      @click="fetchRandomDog" 
      :disabled="isLoading" 
      class="btn-fetch"
      >
      {{ buttonText }}
      </button>

  </div>

</template>

<style scoped>

.btn-fetch {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-fetch:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}


.home-view{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 600px;
  width: 90%;
}
h2{
  font-size: 2.2rem;
  font-weight: bold;
}
</style>