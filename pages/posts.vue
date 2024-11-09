<template>
  <Jumbotron>
    <h1>Blog Posts</h1>
  </Jumbotron>
  <Section>
    <template>
      <main>
        <ContentList path="../content/posts" v-slot="{ list }">
          <div v-for="article in list" :key="article._path">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </ContentList>
      </main>
    </template>
  </Section>
</template>
