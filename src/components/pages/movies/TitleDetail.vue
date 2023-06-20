<script>
export default {
  props: ["movie"],
  methods: {
    onlyYear: function (value) {
      const d = new Date(value);
      return d.getFullYear();
    },
    currency: function (value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(Number(value));
    },
  }
};
</script>

<template>
    <div
      class="flex relative pb-20 h-150"
      v-if="movie"
    >
      <div class="mx-auto mt-auto">
        <div
          class="
            absolute
            left-0
            bottom-0
            w-full
            h-screen
            bg-black
            bg-opacity-20
          "
        ></div>

        <div
          class="bg-title-wrapper"
        ></div>
        
        <div
          class="
            title-wrapper
            flex
            gap-5
            mt-40
            mx-auto
            max-w-7xl
            px-2
          "
        >
          <div class="relative">
            <div class="flex gap-14 items-end">
              <div class="flex-none w-64 relative">
                <img
                  :src="
                    'https://image.tmdb.org/t/p/original/' + movie.poster_path
                  "
                  alt="pic"
                  class="transform -translate-y-"
                />
              </div>
              <div class="flex-col text-gray-100">
                <div class="flex flex-col">
                  <span class="text-sm">{{ onlyYear(movie.release_date) }}</span>
                  <h1 class="text-5xl text-ellipsis">
                    {{ movie.original_title }}
                  </h1>
                  <span class="text-sm text-ellipsis">
                    <span v-for="(genre, index) in movie.genres" :key="index">
                        {{ genre.name }}{{ index <= movie.genres.length ? ', ' : '.' }}
                    </span>
                  </span>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="pt-8 pr-8 pb-8">
                        <div class="flex flex-col text-sm">
                            <span>
                                <img src="star.svg" alt="star">
                            </span>
                        </div>
                    </div>
                    <div class="pt-8 pr-8 pb-8 rating-text">
                        {{ movie.vote_average }}
                    </div>
                    <div class="pt-8 pr-8 pb-8">
                        <div class="flex flex-col text-sm">
                            <span class="text-gray-400">USER SCORE</span>
                            <p>{{ movie.vote_count }} VOTES</p>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="flex flex-col text-sm">
                            <span class="text-gray-400">STATUS</span>
                            <p class="uppercase">{{ movie.status }}</p>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="flex flex-col text-sm">
                            <span class="text-gray-400">LANGUAGE</span>
                            <p class="uppercase">{{ movie.original_language }}</p>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="flex flex-col text-sm">
                            <span class="text-gray-400">BUDGET</span>
                            <p>{{ currency(movie.budget) }}</p>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="flex flex-col text-sm">
                            <span class="text-gray-400">PRODUCTION</span>
                            <p>DC ENTERTAIMENT</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                  <span class="text-sm text-red-600 font-bold m-b-8">OVERVIEW</span>
                  <span class="text-sm text-black line-clamp-4">{{
                    movie.overview
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
.title-wrapper {
    position: absolute;
    top: 195px;
    left: 50%;
    transform: translate(-50%, 0);
}

.rating-text {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #E5E5E5;
}

.bg-title-wrapper {
    background-color: black;
    width: 100%;
    height: 100px;

    position: absolute;
    left: 0;
    bottom: 0;
}
</style>