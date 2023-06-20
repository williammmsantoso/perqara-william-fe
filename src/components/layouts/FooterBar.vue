<script>
export default {
    data() {},
    methods: {},
};
</script>

<template>
  <div class="footer-container bg-gray w-full p-x-120 p-y-18">
    <div class="flex h-16 items-center justify-between">
      <div
        class="
          flex flex-1
          gaps-40
          items-center
          justify-between
        "
      >
        <p>©  {{new Date().getFullYear()}} MoovieTime. All rights reserved.</p>
        <img class="w-20" src="moovie-time-grey.svg" alt="logo-grey">
        <p>Made with VueJS</p>
      </div>
    </div>
</div>
</template>

<style scoped>

</style>