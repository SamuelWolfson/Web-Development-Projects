import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDogsStore = defineStore('dogs', () => {
  const favorites = ref([])

  const favoritesCount = computed(() => favorites.value.length)

  return {
    favorites,
    favoritesCount
  }
})