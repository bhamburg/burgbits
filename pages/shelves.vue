<script setup lang="ts">
useHead({
  title: 'Shelves - BurgBits'
})
</script>

<template>
  <Jumbotron>
    <h1>Shelves</h1>
  </Jumbotron>
  <Section>
    <div class="flex flex-col lg:flex-row-reverse">
      <div class="lg:fixed flex flex-col toc lg:w-40 mt-8 lg:mt-14 mx-4 lg:ml-8 z-1">
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

      <article class="lg:w-[75%] lg:mr-auto pt-4">
        <h2 id="books">Books</h2>
        <blockquote>
          <p>
            “The man who does not read has no advantage over the man who cannot read.”
            <em class="text-nowrap">— Mark Twain</em>
          </p>
        </blockquote>
        <Shelf api="/api/books" />

        <h2 id="games">Games</h2>
        <blockquote>
          <p>
            “Video games are bad for you? That’s what they said about rock and roll.”
            <em class="text-nowrap">— Shigeru Miyamoto</em>
          </p>
        </blockquote>
        <Shelf api="/api/games" />
      </article>
    </div>
  </Section>
</template>