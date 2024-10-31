<script setup lang="ts">
useHead({
  title: 'BurgBits',
})
</script>

<template>
  <NuxtLayout class="min-h-screen flex flex-col justify-between">
    <AppHeader />
    <NuxtPage />
    <AppFooter class="mt-auto" />
  </NuxtLayout>
</template>