<script setup>
const props = defineProps({
  links: Array
})
</script>

<template>
  <div class="lg:fixed flex flex-col toc lg:w-[190px] mt-4 lg:mt-14 mx-2 mb-0 bg-zinc-100 dark:bg-zinc-700 p-6 z-1 shadow rounded-lg">
    <h2 class="mt-0 mb-1 text-xl">On This Page</h2>
    <ul v-for="link in props.links" class="mb-0">
      <li>
        <a :href="`\#${link.id}`" class="text-lg">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>