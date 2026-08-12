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
  },
  {
    path: '/breeds',
    name: 'breeds',
    component: BreedsView,
  },
  {
    path: '/breeds/:breed',
    name: 'breed-details',
    component: BreedDetailsView,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router