import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useDogsStore = defineStore('dogs', () => {
  const favorites = useLocalStorage('dogs_favorites', [])

  const favoritesCount = computed(() => favorites.value.length)

  const isFavorite = (imageUrl) => {
    return favorites.value.some((item) => item.imageUrl === imageUrl)
  }

  const toggleFavorite = (dog) => {
    const index = favorites.value.findIndex((item) => item.imageUrl === dog.imageUrl)
    if (index > -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(dog)
    }
  }

  const clearFavorites = () => {
    favorites.value = []
  }

  return {
    favorites,
    favoritesCount,
    isFavorite,
    toggleFavorite,
    clearFavorites
  }
})