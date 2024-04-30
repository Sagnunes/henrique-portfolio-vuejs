<script setup>
const props = defineProps(['title', 'image_desktop', 'image_mobile','dialog'])
</script>

<template>
  <div
    class="relative flex  cursor-pointer flex-col overflow-hidden bg-white bg-clip-border text-gray-700 shadow-md transition-opacity hover:opacity-90"
    :data-dialog-target="dialog"
  >
            <span class="grid card">
                <picture class="relative col-span-full row-span-full">
                    <source :srcset="image_mobile" media="(min-width: 960px)"/>
                    <img :src="image_desktop" alt="car wheel" width="654" height="240"/>
                </picture>
                <h4
                  class="z-10 row-start-2 ml-5 text-2xl text-white leading-none col-span-full font-headline lg:ml-10 lg:text-2xl lg:leading-8 lg:tracking-wide">
                   {{title}}
                </h4>
            </span>
  </div>
</template>

<style scoped>

</style>