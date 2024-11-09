<script setup lang="ts">

</script>

<template>
  <Jumbotron>
    <h1>Shelves</h1>
  </Jumbotron>
  <Section>
    <div class="flex flex-col md:flex-row-reverse">
      <div class="flex flex-col toc md:w-[20%] mt-10 mx-4 md:ml-8">
        <h4>On This Page</h4>
        <ul>
          <li>
            <a href="#books" class="text-lg">Books</a>
          </li>
          <li>
            <a href="#games" class="text-lg">Games</a>
          </li>
        </ul>
      </div>

      <article class="md:w-[75%] pt-4">
        <h2 id="books">Books</h2>
        <blockquote>
          <p>
            “The man who does not read has no advantage over the man who cannot read.”
            <br />
            <em>—Mark Twain</em>
          </p>
        </blockquote>
        <Shelf api="/api/books" />

        <h2 id="games">Games</h2>
        <blockquote>
          <p>
            “Video games are bad for you? That’s what they said about rock and roll.”
            <br />
            <em>—Shigeru Miyamoto</em>
          </p>
        </blockquote>
        <Shelf api="/api/games" />
      </article>
    </div>
  </Section>
</template>

<style lang="postcss" scoped>
h2 {
  @apply text-center md:text-left
}
</style>