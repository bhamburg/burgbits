<script setup lang="ts">
const props = defineProps(['api'])

const { data } = await useFetch<any>(props.api)
</script>

<template>
  <ClientOnly v-for="shelf in data.shelves">
    <h3 class="text-center md:text-left">{{ shelf.title }}</h3>
    <div class="flex flex-row flex-wrap items-end justify-center md:justify-start no-underline">
      <NuxtLink v-for="item in shelf.items.slice(0, 17)" 
        :key="item.title"
        :title="
          item.title  
          + (item.author ? ` - ${item.author}` : '') 
          + (item.platforms?.length ? ` - ${item.platforms.at(-1)}` : '')
          + (item.completionLevel === 'A' ? ' - 100%' : '')
          + (item.firstTime ? ' - First Playthrough' : '')
        " 
        :to="item.url"
        class="mx-3 
          mb-10 
          drop-shadow-lg 
          hover:drop-shadow-xl  
          relative
          no-underline"
        target="_blank"
      >
        <img
          :alt="item.title" 
          :src="item.coverSrc" 
          class="w-24 rounded-none"
        />
        <div v-if="item.completionLevel === 'A'" class="bg-emerald-500 text-white text-[0.5rem] text-center font-mono">
          100% Completed
        </div>
        <div v-if="item.firstTime" class="bg-sky-600 text-white text-[0.5rem] text-center font-mono">
          First Time
        </div>
        <div class="bg-black text-white text-[0.5rem] text-center font-mono">
          {{ item.dateFinished }}
        </div>
      </NuxtLink>
      <NuxtLink v-if="shelf.items.length > 6" :to="shelf.fetchedFrom" target="_blank"
        class="flex items-center text-center font-bold capitalize justify-center h-40 w-24 mx-3 mb-10
          bg-gradient-to-l
          hover:bg-gradient-to-r
          text-white 
          hover:text-white
          from-sky-600 
          to-emerald-400 
          dark:from-indigo-900 
          dark:to-black   
          drop-shadow-lg 
          hover:drop-shadow-xl
          no-underline"
      >
        View all
      </NuxtLink>
    </div>
  </ClientOnly>
  <p>
    <span>Powered by <NuxtLink :to="data.profileUrl">{{ data.appName }}</NuxtLink></span><br />
    <ClientOnly v-if="data.fetched" class="mt-0">
      Last fetched: 
      {{ new Date(data.fetched).toLocaleDateString('en-us', { 
        weekday:"long", year:"numeric", month:"short", day:"numeric"
      }) }}
      at {{ new Date(data.fetched).toLocaleTimeString('en-us') }}
    </ClientOnly>
  </p>
</template>