<script setup>
import { ref, computed } from 'vue'
import { useDogsStore } from '@/stores/dogs'
import DogImageCard from '@/components/DogImageCard.vue'
import EmptyState from '@/components/EmptyState.vue'

const dogsStore = useDogsStore()

const clearAllFavorites = () => {
   if (confirm('?האם אתה בטוח שברצונך למחוק את כל המועדפים')) {
      dogsStore.clearFavorites()
      displayedCount.value = 20
   }
}

const displayedCount = ref(20)

const allFavorites = computed(() => dogsStore.favorites)

const visibleFavorites = computed(() => {
   return allFavorites.value.slice(0, displayedCount.value)
})

const loadMore = () => {
   displayedCount.value += 20
}

const showLess = () => {
   if (displayedCount.value > 20) {
      displayedCount.value = Math.max(20, displayedCount.value - 20)
   }
}
</script>

<template>
   <div class="favorites-view">
      <h2 class="title">{{ allFavorites.length }} :כמות הכלבים שלבלבתי</h2>

      <div v-if="allFavorites.length > 0" class="gallery-container">
         
         <div class="actions-header">
            <button @click="clearAllFavorites" class="btn btn-danger">
               נקה את כל המועדפים
            </button>
         </div>

         <div class="gallery-grid">
            <DogImageCard 
               v-for="(dog, index) in visibleFavorites" 
               :key="index" 
               :imageUrl="dog.imageUrl" 
               :breed="dog.breed" 
            />
         </div>

         <div v-if="allFavorites.length > 20" class="controls-container">
            <button 
               v-if="displayedCount < allFavorites.length" 
               @click="loadMore" 
               class="btn btn-primary"
            >
               טען תמונות נוספות
            </button>

            <button 
               v-if="displayedCount > 20" 
               @click="showLess" 
               class="btn btn-secondary"
            >
               הצג 20 פחות
            </button>

            <p v-if="displayedCount >= allFavorites.length" class="end-message">
               אין עוד תמונות להציג
            </p>
         </div>
      </div>

      <EmptyState 
         v-else 
         title="לא נמצאו כלבים מלובלבים" 
         message="לבלול והבעת התשוקה לכלבים" 
      />
   </div>
</template>

<style scoped>
.favorites-view {
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

.gallery-container {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   gap: 2rem;
}

.gallery-grid {
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   gap: 5rem;
   width: 100%;
   max-width: 1200px;
}

.controls-container {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   gap: 1rem;
   margin: 2.5rem 0;
   width: 100%;
}

.btn {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   padding: 0.85rem 2rem;
   font-size: 1.05rem;
   font-weight: 600;
   border: none;
   border-radius: 50px;
   cursor: pointer;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
   transition: all 0.25s ease;
}

.btn:hover {
   transform: translateY(-3px);
   box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.btn:active {
   transform: translateY(-1px);
}

.btn-primary {
   background: linear-gradient(135deg, #3b82f6, #1d4ed8);
   color: white;
}

.btn-primary:hover {
   background: linear-gradient(135deg, #2563eb, #1e40af);
}

.btn-secondary {
   background-color: #ffffff;
   color: #374151;
   border: 2px solid #e5e7eb;
}

.btn-secondary:hover {
   background-color: #f9fafb;
   border-color: #d1d5db;
}

.end-message {
   color: #6b7280;
   font-size: 1rem;
   font-weight: 500;
   text-align: center;
   width: 100%;
   margin-top: 0.5rem;
}

.actions-header {
   display: flex;
   justify-content: center;
   width: 100%;
   max-width: 1200px;
   margin-bottom: 0.5rem;
}

.btn-danger {
   background: linear-gradient(135deg, #ef4444, #dc2626); /* מעבר צבעים באדום התראתי */
   color: white;
}

.btn-danger:hover {
   background: linear-gradient(135deg, #dc2626, #b91c1c);
   transform: translateY(-3px);
   box-shadow: 0 6px 16px rgba(239, 68, 68, 0.3);
}

</style>