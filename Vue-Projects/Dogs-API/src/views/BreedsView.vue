<script setup>

import { ref, computed, onMounted } from 'vue'
import { dogsService } from '@/services/dogs.service'
import BreedCard from '@/components/BreedCard.vue'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'
import EmptyState from '@/components/EmptyState.vue'

const breeds = ref([])
const searchQuery = ref('')
const isLoading = ref(true)
const errorMessage = ref('')

const fetchBreedsList = async () => {

  isLoading.value = true
  errorMessage.value = ''

  try {
    breeds.value = await dogsService.getAllBreeds()

  } catch (error) {
    console.error('Error fetching breeds list:', error)
    errorMessage.value = 'שגיאה בטעינת רשימת הגזעים'
    
  } finally {
    isLoading.value = false
  }
}

const filteredBreeds = computed(() => {

  if (!searchQuery.value.trim()) {
    return breeds.value
  }

  const query = searchQuery.value.toLowerCase().trim()

  return breeds.value.filter(breed => breed.toLowerCase().includes(query))

})

onMounted(() => {
  fetchBreedsList()
})

</script>

<template>

  <div class="breeds-view">

    <h2 class="title">רשימת גזעי הכלבים</h2>

    <div class="search-container">

      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="חפש גזע כלבים" 
        class="search-input"
      />
    </div>

    <LoadingState 
      v-if="isLoading" 
      message="טוען רשימת גזעים" 
    />

    <ErrorState 
      v-else-if="errorMessage" 
      :message="errorMessage" 
    />

    <div v-else-if="filteredBreeds.length > 0" class="breeds-grid">
      <BreedCard 
        v-for="(breed, index) in filteredBreeds" 
        :key="index" 
        :breed="breed" 
      />
    </div>

    <EmptyState 
      v-else 
      title="לא נמצאו תוצאות" 
      message="לא נמצאו גזעים מתאימים, חפש שם גזע שונה" 
    />

  </div>

</template>

<style scoped>
.breeds-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1.5rem;
  width: 100%;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin: 0;
}

.search-container {
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-color: white;
  direction: rtl;
}

.search-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.breeds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
}
</style>