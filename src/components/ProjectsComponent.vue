<script setup>

import ProjectCard from '@/components/ProjectCard.vue'
import ProjectModal from '@/components/ProjectModal.vue'

</script>

<template>
  <article
    class="mx-auto mb-24 max-w-screen-xl px-6 pt-0.5 uppercase md:flex md:flex-col md:items-center lg:mb-[9.625rem] lg:flex-row lg:flex-wrap lg:items-start lg:justify-between ">
    <h2
      class="mb-12 text-center font-headline text-[2rem] leading-8 text-black lg:-mt-px lg:mb-20 lg:text-5xl lg:leading-none">
      Projetos
    </h2>
    <div class="mb-8 space-y-6 text-white lg:order-2 lg:grid lg:grid-cols-4 lg:gap-7.5 lg:space-y-0" id="projetos"
         >
      <ProjectCard title="Expériencias Imersivas" image_mobile="images/desktop/madeira-experiencias.jpg"
                   image_desktop="images/desktop/madeira-experiencias.jpg" dialog="image-dialog"/>
      <ProjectCard title="Fotografia Noturna" image_mobile="images/desktop/fotografia-noturna.png"
                   image_desktop="images/desktop/fotografia-noturna.png" />
      <ProjectCard title="Fotografia Arquitetura" image_mobile="images/desktop/arquitetura.png"
                   image_desktop="images/desktop/arquitetura.png" />
      <ProjectCard title="Inventário de Arte" image_mobile="images/desktop/arte.png"
                   image_desktop="images/desktop/arte.png" />
      <ProjectCard title="Salada" image_mobile="images/desktop/salada.png" image_desktop="images/desktop/salada.png" />
      <ProjectCard title="Design Brand Identity" image_mobile="images/desktop/design_brand.png"
                   image_desktop="images/desktop/design_brand.png" />
    </div>
    <a href="#"
       class="mx-auto table rounded-sm border-2 border-very-dark-gray py-2 px-10 text-center uppercase tracking-[0.25em] text-black duration-300 hover:border-black hover:bg-black hover:text-white lg:mx-0 lg:inline-flex">Ver
      Mais</a>
  </article>
  <ProjectModal title="Experiencias Imersivas" dialog="image-dialog" />
</template>

<style scoped>

</style>