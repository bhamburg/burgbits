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

const { data: data } = props.api ? await useFetch<any>(props?.api) : {}

watchEffect(() => {
  if (props.alwaysTable || props.table) {
    isTable.value = true
  }
})
</script>

<template>
  <ClientOnly>
    <div v-if="data" class=" font-mono bg-zinc-100 dark:bg-zinc-700 p-4 mb-4 rounded-lg shadow">
      <div v-for="shelf in data.shelves">
        <div class="flex justify-between content start">
          <h3 class="font-sans">{{ shelf.title }}</h3>
          <div>
            <button @click="toggleTable" class="text-sm text-sky-800 hover:text-sky-600 dark:text-indigo-300 dark:hover:text-indigo-500">
              {{ isTable ? 'Grid View' : 'Table View' }}
            </button>
          </div>
        </div>

        <!-- grid view -->
        <div v-show="!isTable" class="flex flex-row flex-wrap items-end justify-center md:justify-start no-underline">
          <NuxtLink v-for="item in shelf.items.slice(0, 17)" :key="item.title" :title="
              item.title  
              + (item.author ? ` - ${item.author}` : '') 
              + (item.platforms?.length ? ` - ${item.platforms.at(-1)}` : '')
              + (item.firstTime ? ' - First Playthrough' : '')
              + (item.completionLevel === 'A' ? ' - 100% Completion' : '')
            " :to="item.url" class="mx-[11.2px] 
              mb-10 
              drop-shadow-md 
              hover:drop-shadow-lg 
              hover:scale-105 
              relative
              no-underline" target="_blank">
            <img :alt="item.title" :src="item.coverSrc" class="w-24 
                rounded-none
                border-none
                transition-opacity" />
            <div v-if="!shelf.title.toLowerCase().includes('current')">
              <div class="flex">
                <div v-if="item.firstTime" :class="item.completionLevel === 'A' ? 'w-1/2' : 'w-full'" class="
                    bg-emerald-500 
                    text-white 
                    text-[0.5rem] 
                    text-center 
                  ">
                  NEW
                </div>
                <div v-if="item.completionLevel === 'A'" :class="item.firstTime ? 'w-1/2' : 'w-full'" class="
                    bg-sky-600 
                    text-white 
                    text-[0.5rem] 
                    text-center 
                  ">
                  100%
                </div>
              </div>
              <div class="
                bg-black
                text-white
                text-[0.5rem] 
                text-center 
              ">
                Finished {{ item.dateFinished }}
              </div>
            </div>
          </NuxtLink>
          <NuxtLink v-if="shelf.items.length > 6" :to="shelf.fetchedFrom" target="_blank" 
            class="flex items-center text-center font-bold capitalize justify-center h-[156px] w-24 mx-3 mb-10
              bg-gradient-to-l hover:bg-gradient-to-r text-white hover:text-white from-sky-600 to-emerald-400 dark:from-indigo-900 dark:to-black 
              drop-shadow-md hover:drop-shadow-lg no-underline hover:scale-105">
            View all
          </NuxtLink>
        </div>
        <!-- table view -->
        <div v-show="isTable" class="overflow-x-auto">
          <table class="w-full text-sm mb-10" mt--2>
            <thead>
              <tr class="text-left">
                <th v-if="!shelf.title.toLowerCase().includes('current')" class="p-2">Date</th>
                <th class="p-2">Title</th>
                <th v-if="shelf.title.toLowerCase().includes('play')" class="p-2">Platform</th>
                <th v-if="shelf.title.toLowerCase().includes('read')" class="p-2">Author</th>
                <th v-if="shelf.title.toLowerCase().includes('played')" class="p-2">
                  New
                </th>
                <th v-if="shelf.title.toLowerCase().includes('played')" class="p-2">
                  100%
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in shelf.items.slice(0, 17)" :key="item.title" class="odd:bg-zinc-200 dark:odd:bg-zinc-600">
                <td v-if="!shelf.title.toLowerCase().includes('current') && item.dateFinished" class="p-2">
                  {{ item.dateFinished }}
                </td>
                <td v-if="item.title" class="p-2">
                  <NuxtLink :to="item.url" target="_blank">{{ item.title }}</NuxtLink>
                </td>
                <td v-if="item.platforms" class="p-2">{{ item.platforms?.at(-1) }}</td>
                <td v-if="item.author" class="p-2">{{ item.author }}</td>
                <td v-if="!shelf.title.toLowerCase().includes('current') && shelf.title.toLowerCase().includes('played')" 
                  class="text-emerald-500 text-center text-2xl p-2">
                  <span v-if="item.firstTime" class="cursor-help" title="first playthrough">✔</span>
                </td>
                <td v-if="!shelf.title.toLowerCase().includes('current') && shelf.title.toLowerCase().includes('played')" 
                  class="text-sky-600 text-center text-2xl p-2">
                  <span v-if="item.completionLevel === 'A'" class="cursor-help" title="100% completion">✔</span>
                </td>
              </tr>
              <tr v-if="shelf.items.length > 6" :to="shelf.fetchedFrom">
                <td colspan="100%" class="p-2 text-center">
                  <NuxtLink v-if="shelf.items.length > 6" :to="shelf.fetchedFrom" target="_blank">
                    View all
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="mb-2 text-sm text-center text-zinc-500">
        <span>Powered by <NuxtLink :to="data.profileUrl" target="_blank">{{ data.appName }}</NuxtLink></span><br />
          Last fetched:
          {{ new Date(data.fetched).toLocaleDateString('en-us', {
          weekday:"long", year:"numeric", month:"short", day:"numeric"
          }) }}
          at {{ new Date(data.fetched).toLocaleTimeString('en-us') }}
      </p>
    </div>
  </ClientOnly>
  <ClientOnly>
    <div v-if="!data" class=" font-mono bg-zinc-100 dark:bg-zinc-700 text-zinc-500 text-center p-4 rounded-lg shadow">
      Loading shelf...
    </div>
  </ClientOnly>
</template>