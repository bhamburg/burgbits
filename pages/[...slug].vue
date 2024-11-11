<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <Jumbotron>
        <h1>{{ doc.title }}</h1>
      </Jumbotron>
      <Section>
        <div class="flex flex-col lg:flex-row-reverse">
          <div class="lg:fixed flex flex-col toc lg:w-40 mt-8 lg:mt-14 mx-4 lg:ml-8 z-1">
            <h4>On This Page</h4>
            <ul>
              <li v-for="link of doc?.body?.toc?.links" :key="link.id">
                <NuxtLink :to="`#${link.id}`" class="text-lg">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </div>
        
          <article class="lg:w-[75%] lg:mr-auto mt-4">
            <img v-if="doc.featuredImage" class="lg:mt-10 mb-4" :src="doc.featuredImage"></img>
            <p v-if="doc.date" class="lg:mt-10">
              Posted: {{ new Date(doc.date).toLocaleDateString('en-us', { 
                weekday:"long", year:"numeric", month:"short", day:"numeric"
              }) }}
            </p>
            <ContentRenderer :value="doc" />
          </article>
        </div>
      </Section>
    </template>
    <template #not-found>
      <Jumbotron>
        <h1>404 Error</h1>
      </Jumbotron>
      <Section class="text-center">
        <article class="pt-4">
          <h2>Page Not Found</h2>
          <p>These aren&rsquo;t the bits you're looking for.</p>
          <Button to="/" class="solid mt-10">Go to Home</Button>
        </article>
      </Section>
    </template>
  </ContentDoc>
</template>