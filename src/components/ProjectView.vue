<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const fullImage = computed(() => {
  return `images/real/${route.query.image}.jpg`
})
</script>

<template>
  <div class="flex flex-col space-y-5">
    <router-link to="/"
                 class="mx-auto table rounded-sm border-2 border-very-dark-gray py-2 px-10 text-center uppercase tracking-[0.25em] text-black duration-300 hover:border-black hover:bg-black hover:text-white lg:mx-0 lg:inline-flex">
      Voltar
    </router-link>
    <p class="text-black">{{route.query.image}}</p>
    <img :src="fullImage" alt="">
  </div>
</template>

<style scoped>

</style>