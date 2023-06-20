<script>
import MovieCard from '../../components/pages/homes/MovieCard.vue';
import { headersAxios } from '../../constants/axios';

export default {
  data() {
      return {
          movies: [],
          genres: [],
          selectedGenres: "",
          sortBy: [],
          selectedSortBy: ""
      };
  },
  methods: {
    async getGenres() {
      try {
          const response = await this.$axios.get(
              "https://api.themoviedb.org/3/genre/movie/list?language=en",
              {
                  headers: {
                      ...headersAxios,
                  }
              }
          );

          this.genres = response.data.genres;
      } catch (error) {
          console.log(error);
      }
    },
    async getData() {
      try {
          const response = await this.$axios.get(
              "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
              {
                  headers: {
                      ...headersAxios,
                  }
              }
          );

          this.movies = response.data.results;
      } catch (error) {
          console.log(error);
      }
    }
  },
  created() {
    this.getGenres();
    this.getData();
  },
  components: { MovieCard }
};
</script>

<template>
  <main>
    <div class="bg-gray-800 w-full h-64 absolute z-0"></div>
    
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20">
      <div class="flex justify-between mb-12 relative">
        <div class="border-t-4 border-red-700 pt-4">
          <h1 class="text-white text-3xl font-bold">Movies</h1>
        </div>
      </div>
      <div class="flex justify-between gaps-30">
        <div class="bg-blck p-x-20 p-y-20 z-10 rounded-lg">
          <div class="flex flex-col justify-between h-full w-full text-white gaps-8 relative">

            <h2 class="title-filter">Sort Result By</h2>
            
            <select class="bg-blck-2 m-y-24 h-9 rounded-lg">
              <option value="popularity.asc">Popularity Ascending</option>
              <option value="popularity.desc">Popularity Descending</option>
              <option value="primary_release_date.asc">Release Date Ascending</option>
              <option value="primary_release_date.desc">Release Date Descending</option>
              <option value="vote_count.asc">Rating Ascending</option>
              <option value="vote_count.desc">Rating Descending</option>
            </select>

            <h2 class="title-filter type-top">Genres</h2>

            <div v-for="(genre, index) in genres" :key="index" class="flex justify-between items-center gaps-92">
              <p>{{ genre.name }}</p>
              <input type="checkbox">
            </div>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <div v-for="(movie, index) in movies" :key="index">
            <RouterLink :to="'/movies/' + movie.id">
              <MovieCard v-if="index <= 9" :key="index" :movie="movie"/>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>