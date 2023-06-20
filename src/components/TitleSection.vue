<script>
export default {
  props: {
    title: String,
    size: String
  }
}
</script>

<template>
    <div class="border-t-4 border-red-700 pt-4 relative">
        <h1 class="text-white size font-bold">{{ title }}</h1>
    </div>
</template>

<style scoped></style>
