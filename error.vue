<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <h1>{{ error?.statusCode }}</h1>
    <p>These are not the bits you are looking for.</p>
    <NuxtLink to="/">Go home.</NuxtLink>
  </div>
</template>