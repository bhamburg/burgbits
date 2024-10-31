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
        <Jumbotron>
          <h1>404</h1>
        </Jumbotron>
        <article>
          <p>These are not the bits you are looking for.</p>
          <NuxtLink to="/">Go home.</NuxtLink>
        </article>
      </template>
    </ContentDoc>
  </main>
</template>