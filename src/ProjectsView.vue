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
        <div
          class="relative flex  cursor-pointer flex-col overflow-hidden bg-white bg-clip-border text-gray-700 shadow-md transition-opacity hover:opacity-90"
        >
            <span class="grid card">
                <picture class="relative col-span-full row-span-full">
                    <source srcset="/images/desktop/arte.png" media="(min-width: 960px)" />
                    <img src="/images/desktop/arte.png" alt="car wheel" width="654" height="240" />
                </picture>
                <h4
                  class="z-10 row-start-2 ml-5 text-2xl text-white leading-none col-span-full font-headline lg:ml-4 lg:text-[27px] lg:leading-8 lg:tracking-wide ">
                   Inventário <br>de Arte
                </h4>
              <span
                class="z-10 row-start-2 ml-5 text-2xl text-white leading-none col-span-full font-headline lg:ml-4 lg:text-[13px] lg:leading-8 lg:tracking-[1px] absolute top-[290px] font-bold bg-black bg-opacity-45 px-3">
                Fotografia
              </span>
            </span>
        </div>
      </router-link>

      <router-link :to="{path:'/drink'}">
        <ProjectCard title="Design Brand Identity" image_mobile="images/desktop/design_brand.png"
                     image_desktop="images/desktop/design_brand.png" category="Packaging Design" />
      </router-link>

      <router-link :to="{path:'/folheto'}">
        <ProjectCard title="Flyer Imobiliária" image_mobile="images/desktop/flyer.png"
                     image_desktop="images/desktop/flyer.png" category="Design Gráfico" />
      </router-link>

      <router-link :to="{path:'/salad'}">
        <ProjectCard title="Cooking" image_mobile="images/desktop/salada.png"
                     image_desktop="images/desktop/salada.png" category="MULTIMEDIA" />
      </router-link>

      <router-link :to="{path:'/madeira_experience'}">
        <div
          class="relative flex  cursor-pointer flex-col overflow-hidden bg-white bg-clip-border text-gray-700 shadow-md transition-opacity hover:opacity-90"
        >
            <span class="grid card">
                <picture class="relative col-span-full row-span-full">
                    <source srcset="/images/desktop/madeira-experiencias.jpg" media="(min-width: 960px)" />
                    <img src="/images/desktop/madeira-experiencias.jpg" alt="car wheel" width="654" height="240" />
                </picture>
                <h4
                  class="z-10 row-start-2 ml-5 text-2xl text-white leading-none col-span-full font-headline lg:ml-4 lg:text-[27px] lg:leading-8 lg:tracking-wide absolute bottom-0">
                  Madeira <br>Expériencias Imersivas
                </h4>
              <span
                class="z-10 row-start-2 ml-5 text-2xl text-white leading-none col-span-full font-headline lg:ml-4 lg:text-[13px] lg:leading-8 lg:tracking-[1px] absolute top-[290px] font-bold bg-black bg-opacity-45 px-3">
                Multimédia
              </span>
            </span>
        </div>
      </router-link>

      <router-link :to="{path:'/cartao_visita'}">
        <ProjectCard title="Cartão de Visita" image_mobile="images/desktop/cartao_visita.png"
                     image_desktop="images/desktop/cartao_visita.png" dialog="image-dialog"
                     category="Design Gráfico" />
      </router-link>

      <router-link :to="{path:'/casamento'}">
        <ProjectCard title="Casamento" image_mobile="images/desktop/casamento.png"
                     image_desktop="images/desktop/casamento.png" dialog="image-dialog"
                     category="Design Gráfico" />
      </router-link>

      <router-link :to="{path:'/orquestra'}">
        <ProjectCard title="Gravação OCM" image_mobile="images/desktop/musica.png"
                     image_desktop="images/desktop/musica.png" dialog="image-dialog"
                     category="Áudio" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>