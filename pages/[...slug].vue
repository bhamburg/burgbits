<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <Jumbotron>
          <h1>{{ doc.title }}</h1>
        </Jumbotron>
        <article class="prose">
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>