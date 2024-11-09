<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>

<template>
  <footer class="text-center p-5">
    &copy; {{ year }} Brian Hamburg
  </footer>
</template>