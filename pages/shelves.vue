<script setup lang="ts">

</script>

<template>
  <Jumbotron>
    <h1>Shelves</h1>
  </Jumbotron>
  <Section>
    <h2>Books</h2>
    <Shelf api="/api/books" shelf="currently" title="Currently Reading" />
    <Shelf api="/api/books" shelf="read" title="Recently Read" />
  </Section>
  <Section>
    <h2>Runs</h2>
    <div>races go here</div>
  </Section>
  <Section>
    <h2>Games</h2>
    <Shelf api="/api/games" shelf="playing" title="Currently Playing" />
    <Shelf api="/api/games" shelf="finished" title="Recently Finished" />
  </Section>
</template>