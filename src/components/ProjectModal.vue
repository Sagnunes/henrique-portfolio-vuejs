<template>
  <div
    :data-dialog-backdrop="dialog"
    data-dialog-backdrop-close="true"
    class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
  >
    <div
      class="relative m-4 w-3/4 min-w-[75%] max-w-[75%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
      role="dialog"
      :data-dialog="dialog"
    >
      <div class="flex shrink-0 items-center justify-between p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
        <div class="flex items-center gap-3">

        </div>
        <div class="flex items-center gap-2">

        </div>
      </div>
      <div class="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-0 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
        <img
          alt="nature"
          class="h-[48rem] w-full object-cover object-center"
          :src="image"
        />
      </div>
      <div class="flex shrink-0 flex-wrap items-center justify-between p-4 text-blue-gray-500">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dialog','image','title'],
  data() {
    return {}
  }
}
</script>