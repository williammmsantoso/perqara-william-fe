import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MoviesView from '../views/movies/MovieView.vue';
import DetailMoviesView from '../views/movies/DetailMovieView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/movies/:id',
      name: 'detail-movies',
      component: DetailMoviesView
    }
  ]
})

export default router
