import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://dog.ceo/api',
  timeout: 10000
})

export const dogsService = {
  async getRandomDogImage() {
      const response = await apiClient.get('/breeds/image/random')

      const imageUrl = response.data.message
      const breedMatch = imageUrl.split('/breeds/')[1]?.split('/')[0] || 'גזע לא ידוע'
      const formattedBreed = breedMatch.replace('-', ' ')

      return {
        imageUrl,
        breed: formattedBreed
      }
  },

  async getAllBreeds() {
    const response = await apiClient.get('/breeds/list/all')
    return Object.keys(response.data.message)
  },

  async getImagesByBreed(breed) {
    const response = await apiClient.get(`/breed/${breed}/images`)
    return response.data.message
  }

}