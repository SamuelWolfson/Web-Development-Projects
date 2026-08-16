import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BreedsView from '../views/BreedsView.vue'
import BreedDetailsView from '../views/BreedDetailsView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'עמוד הבית', 
      description: 'תמונת כלב אקראית וגלו אהבה חדשה' 
    }
  },
  {
    path: '/breeds',
    name: 'breeds',
    component: BreedsView,
    meta: {
        title: 'רשימת הגזעים', 
        description: 'יד ביד, תגלו עולם שלם לאהוב' 
    }
  },
  {
    path: '/breeds/:breed',
    name: 'breed-details',
    component: BreedDetailsView,
    meta: {
        title: 'גזע הכלב במדוייק', 
        description:'מצא אהבה יחד עם סינון הגזע' 
    }
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView,
    meta: {
        title: 'מלובלבים שלי', 
        description: 'אהבה לכל הכלבים' 
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: 'דף לא נמצא (404)',
      description: 'העמוד שחיפשת לא קיים'
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router