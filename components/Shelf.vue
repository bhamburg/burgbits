<script setup lang="ts">
const props = defineProps({
  alwaysGrid: Boolean,
  alwaysTable: Boolean,
  api: String,
  grid: Boolean,
  table: Boolean
})
const isTable = ref(false)

const toggleTable = () => {
  if (!props.alwaysGrid || !props.alwaysTable) {
    isTable.value = !isTable.value
  }
}

const { data } = props.api ? await useFetch<any>(props?.api) : {}

watchEffect(() => {
  if (props.alwaysTable || props.table) {
    isTable.value = true
  }
})
</script>

<template>
  <ClientOnly v-for="shelf in data.shelves">
    <div class="flex justify-between content start">
      <h3>{{ shelf.title }}</h3>
      <button v-if="!props.alwaysGrid && !props.alwaysTable" class="cursor-pointer mb-5 text-zinc-800 dark:text-white hover:text-sky-600 dark:hover:text-indigo-300" @click="toggleTable()">
        <ClientOnly>
          <a v-if="isTable" title="view as grid">
            <svg fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/>
            </svg>
          </a>
          <a v-if="!isTable" title="view as table">
            <svg fill="currentColor" width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0l0 64 64 0 0-64L64 96zm384 0L192 96l0 64 256 0 0-64zM64 224l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64zM64 352l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64z"/>
            </svg>
          </a>
        </ClientOnly>
        <span class="sr-only">Toggle dark mode</span>
      </button>
    </div>
    <!-- grid view -->
    <div v-if="!isTable" class="flex flex-row flex-wrap items-end justify-center md:justify-start no-underline">
      <NuxtLink v-for="item in shelf.items.slice(0, 17)" 
        :key="item.title"
        :title="
          item.title  
          + (item.author ? ` - ${item.author}` : '') 
          + (item.platforms?.length ? ` - ${item.platforms.at(-1)}` : '')
          + (item.firstTime ? ' - First Playthrough' : '')
          + (item.completionLevel === 'A' ? ' - 100% Completion' : '')
        " 
        :to="item.url"
        class="mx-3 
          mb-10 
          drop-shadow-md 
          hover:drop-shadow-lg  
          relative
          no-underline"
        target="_blank"
      >
        <img
          :alt="item.title" 
          :src="item.coverSrc" 
          class="w-24 rounded-none"
        />
        <div v-if="!shelf.title.toLowerCase().includes('current')">
          <div class="flex">
            <div v-if="item.firstTime" 
              :class="item.completionLevel === 'A' ? 'w-1/2' : 'w-full'"
              class="
                bg-emerald-500 
                text-white 
                text-[0.5rem] 
                text-center 
                font-mono
              ">
              NEW
            </div>
            <div v-if="item.completionLevel === 'A'" 
              :class="item.firstTime ? 'w-1/2' : 'w-full'"
              class="
                bg-sky-600 
                text-white 
                text-[0.5rem] 
                text-center 
                font-mono
              ">
              100%
            </div>
          </div>
          <div class="
            bg-black
            text-white
            text-[0.5rem] 
            text-center 
            font-mono
          ">
            {{ item.dateFinished }}
          </div>
        </div>
      </NuxtLink>
      <NuxtLink v-if="shelf.items.length > 6" :to="shelf.fetchedFrom" target="_blank"
        class="flex items-center text-center font-bold capitalize justify-center h-[156px] w-24 mx-3 mb-10
          bg-gradient-to-l
          hover:bg-gradient-to-r
          text-white 
          hover:text-white
          from-sky-600 
          to-emerald-400 
          dark:from-indigo-900 
          dark:to-black   
          drop-shadow-md 
          hover:drop-shadow-lg
          no-underline"
      >
        View all
      </NuxtLink>
    </div>
    <!-- table view -->
     <div v-if="isTable">
      <table class="w-full">
        <thead>
          <tr>
            <th v-if="!shelf.title.toLowerCase().includes('current')">Date Finished</th>
            <th>Title</th>
            <th v-if="!shelf.title.toLowerCase().includes('current') && shelf.title.toLowerCase().includes('played')">100% Completion</th>
            <th v-if="!shelf.title.toLowerCase().includes('current') && shelf.title.toLowerCase().includes('played')">First Plathrough</th>
            <th v-if="shelf.title.platforms">Platform</th>
            <th v-if="shelf.title.author">Author</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in shelf.items" :key="item.title">
            <td v-if="!shelf.title.toLowerCase().includes('current')">{{ item.dateFinished }}</td>
            <td>
              <NuxtLink :to="item.url" target="_blank">{{ item.title }}</NuxtLink>
            </td>
            <td v-if="!shelf.title.toLowerCase().includes('current')">{{ item.completionLevel }}</td>
            <td v-if="!shelf.title.toLowerCase().includes('current')">{{ item.firstTime }}</td>
            <td v-if="shelf.platforms">{{ item.platforms?.at(-1) }}</td>
            <td v-if="shelf.author">{{ item.author }}</td>
          </tr>
        </tbody>
      </table>
     </div>
  </ClientOnly>
  <p>
    <span>Powered by <NuxtLink :to="data.profileUrl" target="_blank">{{ data.appName }}</NuxtLink></span><br />
    <ClientOnly v-if="data.fetched" class="mt-0">
      Last fetched: 
      {{ new Date(data.fetched).toLocaleDateString('en-us', { 
        weekday:"long", year:"numeric", month:"short", day:"numeric"
      }) }}
      at {{ new Date(data.fetched).toLocaleTimeString('en-us') }}
    </ClientOnly>
  </p>
</template>