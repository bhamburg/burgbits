<script setup lang="ts">
const props = defineProps(['api','shelf','title'])

const { data } = await useFetch<any>(props.api)
const shelf = props.shelf
</script>

<template>
  <h3 class="text-center md:text-left">{{ title }}</h3>
  <div class="flex flex-row flex-wrap items-end justify-center md:justify-start">
    <NuxtLink v-for="item in data[shelf].items.slice(0, 15)" 
      :key="item.title"
      :title="
        item.title 
        + ' - ' 
        + (item.author ? item.author : '') 
        + (item.platforms ? item.platforms.at(-1) : '')
      " 
      :to="item.url"
      class="mx-3 mb-10 
        drop-shadow-lg 
        bg-gradient-to-l
        hover:bg-gradient-to-r
        text-white 
        from-sky-500 
        to-emerald-400 
        dark:from-indigo-900 
        dark:to-black 
        hover:drop-shadow-xl  
        transition"
      target="_blank"
    >
      <NuxtImg 
        :alt="item.title" 
        :src="item.coverSrc" 
        class="w-24 rounded"
      />
    </NuxtLink>
    <NuxtLink v-if="data[shelf].items.length > 6" :to="data[shelf].url" target="_blank"
      class="flex items-center text-center font-bold capitalize justify-center h-36 w-24 mx-3 mb-10 rounded
        bg-gradient-to-l
        hover:bg-gradient-to-r
        text-white 
        from-sky-500 
        to-emerald-400 
        dark:from-indigo-900 
        dark:to-black   
        drop-shadow-lg 
        hover:drop-shadow-xl"
    >
      View all {{ shelf }}
    </NuxtLink>
  </div>
  <p>
    <span>Powered by <NuxtLink :to="data.profileUrl">{{ data.appName }}</NuxtLink>.</span><br />
    <span v-if="data.fetched" class="mt-0">Last fetched: {{ data.fetched }}</span>
  </p>
</template>