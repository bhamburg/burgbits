<script setup lang="ts">
const props = defineProps(['api'])

const { data } = await useFetch<any>(props.api)
</script>

<template>
  <ClientOnly v-for="shelf in data.shelves">
    <h3 class="text-center md:text-left">{{ shelf.title }}</h3>
    <div class="flex flex-row flex-wrap items-end justify-center md:justify-start">
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
          rounded
          relative"
        target="_blank"
      >
        <img
          :alt="item.title" 
          :src="item.coverSrc" 
          class="w-24 rounded"
        />
        <div 
          :class="item.completionLevel === 'A' || item.firstTime ? 'bg-gradient-to-t from-white to-50% opacity-70' : ''" 
          class="absolute w-full h-full top-0 rounded" 
        />
        <div v-if="item.firstTime" class="absolute right-1 bottom-1">
          🆕
        </div>
        <div v-if="item.completionLevel === 'A'" class="absolute left-1 bottom-1">
          💯
        </div>
      </NuxtLink>
      <NuxtLink v-if="shelf.items.length > 6" :to="shelf.fetchedFrom" target="_blank"
        class="flex items-center text-center font-bold capitalize justify-center h-36 w-24 mx-3 mb-10 rounded
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
    <span v-if="data?.shelves?.at(-1)?.items?.find((item: any) => item.completionLevel === 'M')">
      100% Completion: 💯
    </span><br />
    <span v-if="data?.shelves?.at(-1)?.items?.find((item: any) => item.firstTime)">
      First Playthrough: 🆕
    </span><br />
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