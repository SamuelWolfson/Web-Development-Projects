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
  padding: 1rem 0;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
}

/* עיצוב כותרת העמוד עם פס מדורג תחתיה */
.title {
  font-size: 2.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2c3e50, #4b5563);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0;
  letter-spacing: -0.5px;
  position: relative;
}

.title::after {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background: linear-gradient(135deg, #ff7e5f, #ff6b6b);
  margin: 8px auto 0 auto;
  border-radius: 2px;
}

/* אזור החיפוש */
.search-container {
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: center;
}

/* שדה חיפוש בעיצוב פרימיום מרהיב */
.search-input {
  width: 100%;
  padding: 0.9rem 1.25rem;
  font-size: 1.05rem;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #ffffff;
  direction: rtl;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  color: #1f2937;
}

.search-input::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

.search-input:hover {
  border-color: #d1d5db;
}

.search-input:focus {
  border-color: #ff7e5f;
  box-shadow: 0 0 0 4px rgba(255, 126, 95, 0.15);
  transform: translateY(-1px);
}

/* גריד גזעי הכלבים עם אנימציית הופעה חלקה */
.breeds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
  animation: fadeInGrid 0.4s ease-out;
}

@keyframes fadeInGrid {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>