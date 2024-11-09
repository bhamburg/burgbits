<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <Jumbotron>
        <h1>{{ doc.title }}</h1>
      </Jumbotron>
      <Section>
        <div class="flex flex-col md:flex-row-reverse">
          <div class="flex flex-col toc md:w-[20%] mt-10 mx-4 md:ml-8">
            <h4>On This Page</h4>
            <ul>
              <li v-for="link of doc?.body?.toc?.links" :key="link.id">
                <a :href="`#${link.id}`" class="text-lg">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        
          <article class="md:w-[75%] pt-4">
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
        <h2>Page Not Found</h2>
        <p>These aren&rsquo;t the bits you're looking for.</p>
        <Button to="/" class="solid mt-10">Go to Home</Button>
      </Section>
    </template>
  </ContentDoc>
</template>