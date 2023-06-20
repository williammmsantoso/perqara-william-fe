<script>
export default {
  props: ["movie"],
};
</script>

<template>
    <div
      class="bg-gray-800 w-full h-150 absolute bg-fixed bg-center bg-cover opacity-60"
      :style="
        'background-image:url(https://image.tmdb.org/t/p/original/' +
        movie.backdrop_path +
        ')'
      "
      v-if="movie"
    ></div>
</template>