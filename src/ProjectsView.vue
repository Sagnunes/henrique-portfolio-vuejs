<script setup>

import ProjectCard from '@/components/ProjectCard.vue'
import TimelineComponent from '@/components/TimelineComponent.vue'
</script>

<template>
  <div
    class="mx-auto mb-24 max-w-screen-xl px-6 pt-0.5 uppercase md:flex md:flex-col md:items-center lg:mb-[9.625rem] lg:flex-row lg:flex-wrap lg:items-start lg:justify-between ">
    <h2
      class="mb-12 text-center font-headline text-[2rem] leading-8 text-black lg:-mt-px lg:mb-20 lg:text-5xl lg:leading-none">
      Projetos
    </h2>
    <a href="#"
       class="mx-auto table rounded-sm border-2 border-very-dark-gray py-2 px-10 text-center uppercase tracking-[0.25em] text-black duration-300 hover:border-black hover:bg-black hover:text-white lg:mx-0 lg:inline-flex">Ver
      Mais</a>
    <div class="mb-8 space-y-6 text-white lg:order-2 lg:grid lg:grid-cols-3 lg:gap-7.5 lg:space-y-0" id="projetos"
    >
      <ProjectCard title="Expériencias Imersivas" image_mobile="images/desktop/madeira-experiencias.jpg"
                   image_desktop="images/desktop/madeira-experiencias.jpg" dialog="image-dialog" category="Multimedia"/>
      <router-link :to="{
     path: '/project',
      query: { image: 'noturna' }
    }">
        <ProjectCard title="Fotografia Noturna" image_mobile="images/desktop/fotografia-noturna.png"
                     image_desktop="images/desktop/fotografia-noturna.png" category="Fotografia"/>
      </router-link>
      <router-link :to="{
     path: '/project',
      query: { image: 'arquitetura' }
    }">
        <ProjectCard title="Fotografia Arquitetura" image_mobile="images/desktop/arquitetura.png"
                     image_desktop="images/desktop/arquitetura.png" category="Fotografia"/>
      </router-link>
      <router-link :to="{
     path: '/project',
      query: { image: 'arte' }
    }">
        <ProjectCard title="Inventário de Arte" image_mobile="images/desktop/arte.png"
                     image_desktop="images/desktop/arte.png" category="Fotografia"/>
      </router-link>
      <router-link :to="{
     path: '/project',
      query: { image: 'salada' }
    }">
        <ProjectCard title="Cooking" image_mobile="images/desktop/salada.png"
                     image_desktop="images/desktop/salada.png" category="MULTIMEDIA"/>
      </router-link>
      <router-link :to="{
     path: '/project',
      query: { image: 'design' }
    }">
        <ProjectCard title="Design Brand Identity" image_mobile="images/desktop/design_brand.png"
                     image_desktop="images/desktop/design_brand.png" category="Packaging Design"/>
      </router-link>
      <router-link :to="{
     path: '/project',
      query: { image: 'timeline' }
    }">
        <ProjectCard title="Timeline" image_mobile="images/desktop/timeline.png"
                     image_desktop="images/desktop/timeline.png" category="Fotografia"/>
      </router-link>
    </div>
  </div>
  <TimelineComponent/>
</template>

<style scoped>

</style>