import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { dogsService } from '@/services/dogs.service'
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

  const breeds = ref([])
  const isBreedsLoaded = ref(false)
  const isLoadingBreeds = ref(false)
  const breedsErrorMessage = ref('')
  const errorMessage = ref('')

  const fetchAllBreeds = async () => {
      if (isBreedsLoaded.value) return
      
      isLoadingBreeds.value = true
      breedsErrorMessage.value = ''

      try {
        breeds.value = await dogsService.getAllBreeds()
        isBreedsLoaded.value = true
      } catch (error) {
        console.error('Error fetching breeds list:', error)
        breedsErrorMessage.value = 'שגיאה בטעינת רשימת הגזעים. בדוק את החיבור לרשת.'
      } finally {
        isLoadingBreeds.value = false
      }
    }

  const currentDog = ref({ imageUrl: '', breed: '' })
  const isLoadingDog = ref(false)

  const fetchRandomDog = async () => {
    isLoadingDog.value = true
    errorMessage.value = ''
    try {
      const data = await dogsService.getRandomDogImage()
      currentDog.value = data
    } catch (error) {
      console.error('Error fetching random dog:', error)
      errorMessage.value = 'שגיאה בטעינת תמונה אקראית. בדוק את החיבור לרשת.'
    } finally {
      isLoadingDog.value = false
    }
  }

  return {
    favorites,
    favoritesCount,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    breeds,
    fetchAllBreeds,
    currentDog,
    isLoadingDog,
    fetchRandomDog,
    errorMessage,
    isLoadingBreeds,
    breedsErrorMessage,
  }
})