<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { dogsService } from '@/services/dogs.service'
import DogImageCard from '@/components/DogImageCard.vue'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'
// import EmptyState from '@/components/EmptyState.vue'

const route = useRoute()
const breedName = route.params.breed

const allImages = ref([])
const displayedCount = ref(20);
const isLoading = ref(true)
const errorMessage = ref('')
const showButtonReturnToBreedsList = ref(true)

const fetchBreedImages = async () => {
	isLoading.value = true
	errorMessage.value = ''

	try {
		const response = await dogsService.getImagesByBreed(breedName)
		
		if (!response || response.length === 0) {
			errorMessage.value = 'הגזע המבוקש אינו קיים או שאין עבורו תמונות'
			return
		}

		allImages.value = response

	} catch (error) {
		console.error('Error fetching breed images:', error)
		errorMessage.value = 'הגזע המבוקש לא קיים במערכת'
	} finally {
		isLoading.value = false
	}
}

const visibleImages = computed(() => {
	return allImages.value.slice(0, displayedCount.value);
});

const loadMore = () => {
	displayedCount.value += 20;
};

const showLess = () => {
	if (displayedCount.value > 20) {
		displayedCount.value = Math.max(20, displayedCount.value - 20);
	}
};

onMounted(() => {
	fetchBreedImages()
})
</script>

<template>
	<div class="breed-details-view">
		<h2 class="title"> {{ breedName }} :תמונות של גזע</h2>

		<LoadingState 
			v-if="isLoading" 
			message="טוען תמונות של הגזע" 
		/>

		<ErrorState 
			v-else-if="errorMessage" 
			:message="errorMessage" 
			:showButtonReturnToBreedsList="showButtonReturnToBreedsList"
		/>

		<div v-else-if="allImages.length > 0" class="gallery-grid">
			<DogImageCard 
				v-for="(url, index) in visibleImages" 
				:key="index" 
				:imageUrl="url" 
			/>
		</div>

		<!-- אזור הכפתורים -->
		<div v-if="allImages.length > 20" class="controls-container">
			
			<!-- כפתור טעינת עוד - יוצג כל עוד יש עוד תמונות להציג -->
			<button 
				v-if="displayedCount < allImages.length" 
				@click="loadMore" 
				class="btn btn-primary"
			>
				טען תמונות נוספות
			</button>

			<!-- כפתור הצג 20 פחות - יוצג ברגע שהמשתמש טען מעל 20 תמונות -->
			<button 
				v-if="displayedCount > 20" 
				@click="showLess" 
				class="btn btn-secondary"
			>
				הצג 20 פחות
			</button>

			<!-- הודעה אם הגענו לסוף ואין יותר מה לטעון -->
			<p v-if="displayedCount >= allImages.length && allImages.length > 20" class="end-message">
				אין עוד תמונות להציג
			</p>
			</div>
		</div>
</template>

<style scoped>
.breed-details-view {
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
   text-transform: capitalize;
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
   border-radius: 50px; /* הופך את הכפתור לצורה עגולה ויוקרתית */
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
   background: linear-gradient(135deg, #3b82f6, #1d4ed8); /* מעבר צבעים עדין (Gradient) שנותן מראה מודרני */
   color: white;
}

.btn-primary:hover {
   background: linear-gradient(135deg, #2563eb, #1e40af);
}

.btn-secondary {
   background-color: #ffffff;
   color: #374151;
   border: 2px solid #e5e7eb; /* מסגרת עבה וברורה יותר */
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

</style>