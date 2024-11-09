<script setup lang="ts">
useHead({
  title: 'BurgBits',
})
</script>

<template>
  <NuxtLayout class="min-h-screen flex flex-col justify-between">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter class="mt-auto" />
  </NuxtLayout>
</template>

<style lang="postcss">
section {
  article {
    @apply mx-4;
  }
  h2 {
    @apply font-black text-3xl md:text-4xl lg:text-5xl mb-6 mt-10;
  }
  h3 {
    @apply font-black text-2xl md:text-3xl;
  }
  h3, p, ul, blockquote  {
    @apply mb-6;
  }
  a {
    @apply text-emerald-500
      hover:text-emerald-600 
      dark:text-indigo-400
      dark:hover:text-indigo-500
      underline;
  }
  blockquote {
    @apply flex flex-col p-6 text-center md:text-xl rounded
      bg-gradient-to-l
      text-black 
      dark:text-white 
      from-sky-200 
      to-emerald-100 
      dark:from-indigo-950 
      dark:to-black;
      p {
        @apply m-0;
      }
  }
  ul {
    @apply list-disc ml-4;
    ul {
      @apply my-0 list-[circle];
    }
  }
  ol {
    @apply list-decimal;
  }
  h1, h2, h3, h4 {
    a {
      @apply text-inherit hover:text-inherit no-underline;
    }
  }
  .video-container {
    @apply relative mb-6 pb-[56.25%] h-0 overflow-hidden;
    embed, iframe, object {
      @apply absolute top-0 left-0 w-full h-full;
    }
  }
}
</style>