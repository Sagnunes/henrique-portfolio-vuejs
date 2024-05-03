<script setup>

import ProjectCard from '@/components/ProjectCard.vue'
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
    <div class="mb-8 space-y-6 text-white lg:order-2 lg:grid lg:grid-cols-4 lg:gap-7.5 lg:space-y-0" id="projetos"
    >

      <router-link :to="{path:'/night-views'}">
        <ProjectCard title="Fotografia Noturna" image_mobile="images/desktop/fotografia-noturna.png"
                     image_desktop="images/desktop/fotografia-noturna.png" category="Fotografia" />
      </router-link>

      <router-link :to="{path:'/paisagens'}">
        <ProjectCard title="Fotografia Arquitetura" image_mobile="images/desktop/arquitetura.png"
                     image_desktop="images/desktop/arquitetura.png" category="Fotografia" />
      </router-link>


      <router-link :to="{path:'/inventario-arte'}">
        <ProjectCard title="Inventário de Arte" image_mobile="images/desktop/arte.png" />
      </router-link>


      <router-link :to="{path:'/drink'}">
       <ProjectCard title="Design Brand Identity" image_mobile="images/desktop/design_brand.png"
                    image_desktop="images/desktop/design_brand.png" category="Packaging Design" />
     </router-link>

      <router-link :to="{path:'/folheto'}">
       <ProjectCard title="Flyer Imobiliária" image_mobile="images/desktop/flyer.png"
                    image_desktop="images/desktop/flyer.png" category="Design Gráfico" />
     </router-link>

      <ProjectCard title="Cooking" image_mobile="images/desktop/salada.png"
                   image_desktop="images/desktop/salada.png" category="MULTIMEDIA" />

      <ProjectCard title="Expériencias Imersivas" image_mobile="images/desktop/madeira-experiencias.jpg"
                   image_desktop="images/desktop/madeira-experiencias.jpg" dialog="image-dialog"
                   category="Multimedia" />

      <!--      <router-link :to="{path:'/night-views'}" class="text-black">Night View</router-link>-->
      <!--      <router-link :to="{path:'/paisagens'}" class="text-black">Paisagens</router-link>-->
      <!--      <router-link :to="{path:'/inventario-arte'}" class="text-black">Arte</router-link>-->
      <!--      <router-link :to="{path:'/drink'}" class="text-black">drink</router-link>-->
      <!--      <router-link :to="{path:'/folheto'}" class="text-black">folheto</router-link>-->
    </div>
  </div>
</template>

<style scoped>

</style>