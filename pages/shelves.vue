<script setup lang="ts">

</script>

<template>
  <Jumbotron>
    <h1>Shelves</h1>
  </Jumbotron>
  <Section>
    <h2>Books</h2>
    <blockquote>
      <p>
        “The man who does not read has no advantage over the man who cannot read.”
        <br />
        <em>—Mark Twain</em>
      </p>
    </blockquote>
    <Shelf api="/api/books" />

    <h2>Games</h2>
    <blockquote>
      <p>
        “Video games are bad for you? That’s what they said about rock and roll.”
        <br />
        <em>—Shigeru Miyamoto</em>
      </p>
    </blockquote>
    <Shelf api="/api/games" />
  </Section>
</template>

<style lang="postcss" scoped>
h2 {
  @apply text-center md:text-left
}
</style>