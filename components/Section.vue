<template>
  <section class="w-full max-w-screen-lg flex flex-col justify-center mx-auto">
    <article class="mt-5 p-4">
      <slot />
    </article>
  </section>
</template>

<style lang="postcss" module>
section h2 {
  @apply font-black text-3xl md:text-4xl mb-3 md:mb-5;
}
section h3 {
  @apply text-xl md:text-2xl md:mb-2 mb-4;
}
section p {
  @apply md:mb-2 mb-4;
}
</style>