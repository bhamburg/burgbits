<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <Jumbotron>
    <h1>{{ error?.statusCode || 'Error'}}</h1>
  </Jumbotron>
  <Section class="text-center">
    <h2>Uh oh...</h2>
    <p>There's been a problem.</p>
    <Button to="/" class="solid mt-10">Go to home</Button>
  </Section>
</template>