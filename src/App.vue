<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/layouts/NavBar.vue';
import FooterBar from './components/layouts/FooterBar.vue';
import 'vueperslides/dist/vueperslides.css'

</script>

<template>
  <NavBar/>

  <RouterView />

  <FooterBar/>
</template>

<style scoped></style>
