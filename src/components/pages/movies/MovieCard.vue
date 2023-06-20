<script>
export default {
  props: ["movie"],
  data() {
    return {
      movie_highlight: false,
    };
  },
  methods: {
    onlyYear: function (value) {
      const d = new Date(value);
      return d.getFullYear();
    },
  }
};
</script>


<template>
  <RouterLink :to="'/movies/' + movie.id"
    class="max-w-sm relative cursor-pointer"
  >
    <div>
      <img
        class=""
        :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
        alt=""
      />
    </div>
    <div class="py-2">
      <div class="flex flex-col">
        <h5 class="text-2l font-bold tracking-tight text-white truncate">
          {{ movie.original_title }}
        </h5>
        <span class="text-2l font-thin text-gray-500">{{ onlyYear(movie.release_date) }}</span>
      </div>
    </div>
    <div
      class="
        bg-opacity-90 bg-gray-500
        w-12
        h-6
        absolute
        top-0
        right-0
        text-white text-center
      "
    >
      {{ movie.vote_average }}
    </div>
  </RouterLink>
</template>