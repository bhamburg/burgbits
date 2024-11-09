<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <Jumbotron>
        <h1>{{ doc.title }}</h1>
      </Jumbotron>
      <Section>
        <ContentRenderer :value="doc" />
      </Section>
    </template>
    <template #not-found>
      <Jumbotron>
        <h1>{{ error?.statusCode }} Error</h1>
      </Jumbotron>
      <Section class="text-center">
        <h2>Page Not Found</h2>
        <p>These aren&rsquo;t the bits you're looking for.</p>
        <Button to="/" class="solid mt-10">Go to Home</Button>
      </Section>
    </template>
  </ContentDoc>
</template>