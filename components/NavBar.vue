<script setup>
import { onMounted } from 'vue';
import { initCollapses } from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  initCollapses();
})
</script>

<template>
  <nav class="w-full md:fixed md:top-0 z-10 bg-white/95 dark:bg-zinc-800/95 shadow-xl transition">
    <div class="flex flex-wrap font-mono items-center justify-between mx-auto p-4">
      <a href="/" id="brand" class="flex items-center space-x-3 rtl:space-x-reverse dark:text-white border-none">
        <svg version="1.1" alt="burgbits Logo" class="h-[35px] fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 155 155" xml:space="preserve">
          <polygon points="120,65 120,75 110,75 110,65 100,65 100,55 100,45 100,35 90,35 90,45 80,45 80,35 70,35 70,45 60,45 
            60,35 50,35 50,45 50,55 50,65 40,65 40,75 30,75 30,65 20,65 20,75 20,85 20,95 20,105 20,115 30,115 40,115 50,115 60,115 60,105 
            60,95 70,95 70,85 80,85 80,95 90,95 90,105 90,115 100,115 110,115 120,115 130,115 130,105 130,95 130,85 130,75 130,65 "/>
        </svg>
        <span class="self-center text-2xl whitespace-nowrap">BurgBits</span>
      </a>
      <div class="block md:hidden ml-auto">
        <DarkMode />
      </div>
      <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none hover:text-emerald-600 hover:dark:text-indigo-400" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
          <li>
            <NuxtLink to="/" aria-current="page" class="block p-3 md:p-0 md:inline text-center rounded md:rounded-none">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" aria-current="page" class="block p-3 md:p-0 md:inline text-center rounded md:rounded-none">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/now" aria-current="page" class="block p-3 md:p-0 md:inline text-center rounded md:rounded-none">
              Now
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/uses" aria-current="page" class="block p-3 md:p-0 md:inline text-center rounded md:rounded-none">
              Uses
            </NuxtLink>
          </li>
          <li class="hidden md:block">
            <NuxtLink to="https://github.com/bhamburg" target="_blank">
              <svg class="w-6 h-6 text-zinc-800 dark:text-white hover:text-emerald-600 dark:hover:text-indigo-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
              </svg>
            </NuxtLink>
          </li>
          <li class="hidden md:block">
            <DarkMode />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a:hover {
  @apply md:border-b-2 md:border-emerald-600 md:dark:border-indigo-400 transition duration-300;
}
a.router-link-active {
  @apply text-white bg-emerald-600 dark:bg-indigo-400 md:bg-transparent md:dark:bg-transparent md:text-emerald-600 md:dark:text-indigo-400;
}
</style>