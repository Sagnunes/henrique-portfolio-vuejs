<script setup>
import ProjectModal from '@/components/ProjectModal.vue'

</script>

<template>
  <article
    class="mx-auto mb-24 max-w-screen-xl px-6 pt-0.5 uppercase md:flex md:flex-col md:items-center lg:mb-[9.625rem] lg:flex-row lg:flex-wrap lg:items-start lg:justify-between ">
    <RouterView />
  </article>
  <ProjectModal title="Experiencias Imersivas" dialog="image-dialog" />
</template>

<style scoped>

</style>