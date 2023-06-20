<script>
import BannerMovie from "../../components/pages/movies/BannerMovie.vue";
import TitleDetail from "../../components/pages/movies/TitleDetail.vue";
import ReviewCard from "../../components/pages/movies/ReviewCard.vue";
import MovieCard from "../../components/pages/movies/MovieCard.vue";
import { headersAxios } from '../../constants/axios';

export default {
  data() {
    return {
      movie: null,
      reviews: null,
      recommendations: null,
    };
  },
  methods: {
    async getMovie(id) {
      try {
          const response = await this.$axios.get(
              `https://api.themoviedb.org/3/movie/${id}?include_adult=false&include_video=false&language=en-US`,
              {
                  headers: {
                      ...headersAxios,
                  }
              }
          );

          this.movie = response.data;
      } catch (error) {
          console.log(error);
      }
    },
    async getReview(id) {
      try {
        const response = await this.$axios.get(
              `https://api.themoviedb.org/3/movie/${id}/reviews?include_adult=false&include_video=false&language=en-US`,
              {
                  headers: {
                      ...headersAxios,
                  }
              }
          );

          this.reviews = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    async getRecommendation(id) {
      try {
        const response = await this.$axios.get(
              `https://api.themoviedb.org/3/movie/${id}/recommendations?include_adult=false&include_video=false&language=en-US`,
              {
                  headers: {
                      ...headersAxios,
                  }
              }
          );

          this.recommendations = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getMovie(this.$route.params.id);
    this.getReview(this.$route.params.id);
    this.getRecommendation(this.$route.params.id);
  },
  components: { BannerMovie, TitleDetail, ReviewCard, MovieCard }
}
</script>

<template>
  <main>
    <BannerMovie :movie="movie" />

    <TitleDetail :movie="movie" />

    <div class="bg-gray-100 py-20 pt-52">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex justify-between mb-12 relative">
          <div class="pt-4">
            <h1 class="text-red-600 text-2l font-bold">REVIEWS</h1>
          </div>
        </div>
        <div class="flex gap-5 relative">
          <div class="relative w-full">
            <div
              class="grid grid-cols-2 gap-5 justify-between"
              v-if="reviews.length > 0"
            >
              <template v-for="(review, index) in reviews">
                <ReviewCard
                  :review="review"
                  :key="index"
                  v-if="index <= 1"
                />
              </template>
            </div>
            <div v-else class="text-center">
              <p>No reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20">
      <div class="flex justify-between mb-12 relative">
        <div class="pt-4">
          <h1 class="text-white text-2l">RECOMENDATION MOVIES</h1>
        </div>
      </div>
      <div class="flex gap-5 relative">
        <div class="relative w-full">
          <div
            class="grid grid-cols-5 gap-5 items-center justify-between"
            v-if="recommendations.length > 0"
          >
            <template v-for="(recommendation, index) in recommendations">
              <MovieCard
                :key="index"
                :movie="recommendation"
                v-if="index <= 4"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
