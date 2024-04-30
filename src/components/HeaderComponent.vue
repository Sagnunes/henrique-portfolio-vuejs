<script setup>

</script>

<template>
  <div class="mb-24 text-white bg-cover hero lg:mb-40">
    <header
      class="mx-auto mb-40.5 flex max-w-screen-xl justify-between px-6 pt-10 lg:mb-32.25 lg:items-center lg:pt-16">
      <a href="#" class="z-40">

      </a>
      <!-- mobile buttons -->
      <div class="flex md:hidden">
        <button id="open-button" aria-label="Open navigation" class="duration-300">
          <svg width="24" height="16" class="fill-current">
            <title>open menu</title>
            <g fill-rule="evenodd">
              <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/>
            </g>
          </svg>
        </button>

        <button id="close-button" aria-label="Close navigation" class="z-50 hidden duration-300">
          <svg width="20" height="20">
            <title>close menu</title>
            <path
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
              fill="#fff" fill-rule="evenodd"/>
          </svg>
        </button>
      </div>

      <div id="overlay"
           class="absolute inset-y-0 left-0 w-full pt-10 duration-300 ease-in-out -translate-x-full bg-black md:static md:w-min md:translate-x-0 md:bg-transparent md:pt-0">
        <nav class="relative top-[47.9vw] mx-auto px-4 md:static md:mr-[-3px] md:px-0">
          <ul
            class="space-y-4 text-2xl text-left uppercase md:font-body font-headline md:flex md:space-y-0 md:space-x-4 md:text-base md:normal-case">
            <li>
              <a href="#sobre" class="p-2 duration-300 ease-in-out md:bg-bottom uppercase">Sobre</a>
            </li>
            <li>
              <a href="#projetos" class="p-2 duration-300 ease-in-out md:bg-bottom uppercase">Projetos</a>
            </li>
            <li>
              <a href="#contactos" class="p-2 duration-300 ease-in-out md:bg-bottom uppercase">Contactos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="max-w-screen-xl px-6 mx-auto ">
      <h1 class="inline-block border-2 px-5.5 pt-6 pb-4 font-headline uppercase md:mx-auto md:block lg:ml-0">
        Henrique Santos <span class="font-bold">Portfólio</span>
      </h1>
    </div>
  </div>
</template>

<style scoped>

</style>