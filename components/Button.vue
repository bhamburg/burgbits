<template>
  <NuxtLink 
    type="button" 
    class="
      inline-block
      bg-transparent
      no-underline 
      text-emerald-500
      hover:text-white 
      dark:text-white
      hover:bg-emerald-500
      dark:hover:bg-indigo-400
      outline 
      outline-emerald-500 
      dark:outline-indigo-400 
      mt-4
      mx-2
      py-2 
      px-4 
      rounded-full 
      transition-colors
    ">
    <slot />
  </NuxtLink>
</template>

<style lang="postcss" scoped>
  .solid {
    @apply text-white !outline-none bg-emerald-500  hover:bg-emerald-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 py-3 px-5
  }
  .jumbotron a {
    @apply text-white outline-white hover:text-emerald-400 hover:bg-white dark:hover:text-indigo-900
  }
  .jumbotron a.solid {
    @apply text-emerald-500 dark:text-indigo-900 !outline-none bg-white hover:bg-gray-200 py-3 px-5
  }
</style>