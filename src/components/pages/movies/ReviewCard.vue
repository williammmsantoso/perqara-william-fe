<script>
export default {
  props: ["review"],
  methods: {
    filterDate: function (value) {
      const d = new Date(value).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return d;
    },
    ratingFormating: function (value) {
      if (value) {
        return value + '.0';
      } else {
        return '0.0';
      }
    }
  },
};
</script>

<template>
  <div class="p-6 bg-gray-200 border rounded-lg shadow-md">
    <div class="flex justify-between">
      <div class="relative">
        <div class="flex gap-5 pb-10">
          <img
            class="w-16 h-16 mb-3 rounded-full bg-gray-400"
            :src="
              'https://image.tmdb.org/t/p/original/' +
              review.author_details.avatar_path
            "
            alt="Bonnie image"
          />
          <div class="flex flex-col">
            <h5 class="mb-1 text-xl font-bold uppercase text-gray-900">
              {{ review.author }}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{
              filterDate(review.created_at)
            }}</span>
          </div>
        </div>
      </div>
      <div class="relative">
        <p
          class="
            text-gray-900
            bg-gray-300
            font-bold
            rounded-lg
            text-sm
            px-5
            py-1
            text-3xl text-center
          "
        >
          {{ ratingFormating(review.author_details.rating) }}
        </p>
      </div>
    </div>
    <p class="mb-3 text-1l text-gray-900 line-clamp-6">
      {{ review.content }}
    </p>
  </div>
</template>