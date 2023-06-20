<script>
import SearchInput from "../SearchInput.vue";
import { headersAxios } from '../../constants/axios';

export default {
    data() {
        return {
            menus: [
                {
                    id: 1,
                    name: "CATEGORIES",
                    route: "/movies",
                    dropdown: false,
                },
                {
                    id: 2,
                    name: "MOVIES",
                    route: "/movies",
                    dropdown: false,
                },
                {
                    id: 3,
                    name: "TV SHOWS",
                    route: "/",
                    dropdown: false,
                },
                {
                    id: 4,
                    name: "LOGIN",
                    route: "/",
                    dropdown: false,
                },
            ],
            categories: [],
            showCategory: false
        };
    },
    methods: {
      changeShowCategory() {
        this.showCategory = !this.showCategory;
      },
      async getData() {
            try {
                const response = await this.$axios.get(
                    "https://api.themoviedb.org/3/genre/movie/list?language=en",
                    {
                        headers: {
                            ...headersAxios,
                        }
                    }
                );

                this.categories = response.data.genres;
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getData();
    },
    components: { SearchInput }
};
</script>

<template>
  <nav class="bg-gray-800 absolute top-0 left-0 w-full p-x-120 p-y-18">
    <div class="flex h-16 items-center justify-between">
      <div
        class="
          flex flex-1
          gaps-40
          items-center
          justify-center
        "
      >
        <RouterLink to="/">
          <img class="w-28" src="moovie-time.svg" alt="logo">
        </RouterLink>

        <SearchInput/>

        <div v-for="menu in menus" :key="menu.id" class="cursor-pointer">
          <RouterLink v-if="menu.id === 1" class="relative" :to="menu.route">
            <div
              class="flex gaps-14"
              v-on:mouseenter="changeShowCategory"
            >
              <img src="icon-category.svg" alt="icon-category">
              <p class="text-white">{{ menu.name }}</p>
            </div>
            <div
              class="flex flex-col gap-8 bg-white p-x-8 p-y-8 text-black rounded-md overflow-y-auto absolute top-0 w-40 h-80 z-10"
              v-on:mouseleave="changeShowCategory"
              v-if="showCategory"
            >
              <div v-for="category in categories" :key="category.id">
                {{ category.name }}
              </div>
            </div>
          </RouterLink>
          <RouterLink v-else :to="menu.route">
            <p class="text-white">{{ menu.name }}</p>
          </RouterLink>
        </div>
        
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>