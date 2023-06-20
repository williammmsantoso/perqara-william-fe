<script>
import LoaderComponent from './../../LoaderComponent.vue';
import { headersAxios } from '../../../constants/axios';
import MovieCard from './MovieCard.vue';

export default {
    data() {
        return {
            movies: null,
            banner_active: 1,
            sort_selected: "popularity.desc",
        };
    },
    methods: {
        async getData() {
            try {
                const response = await this.$axios.get(
                    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1",
                    {
                        params: {
                            sort_by: this.sort_selected,
                        },
                        headers: {
                            ...headersAxios,
                        }
                    }
                );

                this.movies = response.data.results;
            } catch (error) {
                console.log(error);
            }
        },
        filterMovies(val) {
            this.sort_selected = val;
            this.getData();
        }
    },
    created() {
        this.getData();
    },
    components: { LoaderComponent, MovieCard }
}
</script>

<template>
  <div class="bg-gray-800 w-full h-96 absolute z-0"></div>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20">
      <div class="flex justify-between">
        <div class="border-t-4 border-main pt-4 relative">
          <h1 class="text-white text-3xl font-bold">Discover Movies</h1>
        </div>
        <div class="mb-12 pt-4 relative">
          <button
            type="button"
            :class="
              sort_selected == 'popularity.desc'
                ? `
              text-white
              bg-main
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2`
                : ` text-white
              bg-gray-700
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2`
            "
            @click="filterMovies('popularity.desc')"
          >
            Popularity
          </button>
          <button
            type="button"
            :class="
              sort_selected == 'primary_release_date.desc'
                ? `
              text-white
              bg-red-700
              hover:bg-red-800
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2`
                : ` text-white
              bg-gray-700
              font-medium
              rounded-full
              text-sm
              px-5
              py-1
              text-center
              mr-2
              mb-2`
            "
            @click="filterMovies('primary_release_date.desc')"
          >
            Release Date
          </button>
        </div>
      </div>
      <div
        class="relative grid grid-cols-5 gap-5 items-center justify-between"
        v-if="movies"
      >
        <template v-for="(movie, index) in movies">
          <MovieCard v-if="index <= 9" :key="index" :movie="movie"/>
        </template>
      </div>
      <div class="text-center" v-else>
        <LoaderComponent />
      </div>
    </div>
</template>

<style scoped></style>
