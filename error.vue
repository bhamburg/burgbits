<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <NuxtLayout class="min-h-screen flex flex-col justify-between">
    <AppHeader />
    <Jumbotron>
      <h1>{{ error?.statusCode + ' Error' || 'Error'}}</h1>
    </Jumbotron>
    <Section class="text-center">
      <article class="pt-4">
        <h2>Uh oh...</h2>
        <p>Sorry, there's been a problem.</p>
        <Button to="/" class="solid mt-10">Go to home</Button>
      </article>
    </Section>
    <AppFooter class="mt-auto" />
  </NuxtLayout>
</template>