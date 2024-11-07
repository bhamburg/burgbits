<script setup lang="ts">
const props = defineProps(['api','shelf','title'])

const { data } = await useFetch<any>(props.api)
const shelf = props.shelf
</script>

<template>
  <h3>{{ title }}</h3>
  <div>{{ data[shelf].items }}</div>
</template>