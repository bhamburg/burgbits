<template>
  <section class="jumbotron bg-gradient-to-r from-sky-500 to-emerald-400 dark:from-indigo-900 dark:to-black relative md:pt-[67px] shadow-inner transition duration-500">
    <div class="flex flex-col-reverse sm:flex-row justify-center items-center mx-auto p-5 text-white text-center">
      <slot />
    </div>
  </section>
</template>

<style>
  .jumbotron h1, 
  .jumbotron h2 {
    @apply font-black text-4xl md:text-5xl;
  }
</style>