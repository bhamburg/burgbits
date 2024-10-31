<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <Jumbotron>
    <h1>{{ error?.statusCode }}</h1>
  </Jumbotron>
  <article>
    <p>These are not the bits you are looking for.</p>
    <NuxtLink to="/">Go home.</NuxtLink>
  </article>
</template>