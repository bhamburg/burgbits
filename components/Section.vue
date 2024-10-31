<template>
  <section class="max-w-screen-lg flex flex-col justify-center mx-auto">
    <article class="mt-5 p-4">
      <slot />
    </article>
  </section>
</template>

<style lang="postcss" module>
section h2 {
  @apply font-black text-3xl md:text-4xl mb-5;
}
</style>