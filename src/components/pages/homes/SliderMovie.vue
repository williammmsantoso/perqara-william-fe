<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import { headersAxios } from '../../../constants/axios';

export default {
    data() {
        return {
            movies: null
        };
    },
    methods: {
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
        },
    },
    created() {
        this.getData();
    },
    components: { VueperSlides, VueperSlide }
}
</script>

<template>
    <VueperSlides
        autoplay
        class="no-shadow"
        :visible-slides="3"
        :arrows="false"
        :slide-ratio="1 / 3"
        :gap="3"
        :dragging-distance="70"
    >
        <VueperSlide v-for="(movie, i) in movies" :key="i">
            <template #content>
                <div class="flex">
                    <img
                        class="poster-slider"
                        :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
                        alt="img-movie"
                    />
                    <div class="description-wrapper flex flex-col gap bg-black h-70 p-b-60 p-t-20 p-x-20 m-y-30">
                        <div class="flex items-center m-b-12">
                            <img
                                src="star.svg"
                                alt="star"
                            />
                            <p>{{ movie.vote_average }}</p>
                        </div>
                        <p class="m-b-12">{{ movie.original_title }}</p>
                        <p class="m-b-12">2021 . Sci-Fi</p>
                        <p class="text-ellipsis overflow-hidden whitespace-nowrap w-40 h-32 m-b-12">{{ movie.overview }}</p>
                    </div>
                </div>
            </template>
        </VueperSlide>
    </VueperSlides>
</template>

<style scoped></style>
