<template>
  <Jumbotron>
    <h1>Shelves</h1>
  </Jumbotron>
  <Section>
    <h2>Books</h2>
    <Shelf api="/api/goodreads" shelf="currently" title="Currently Reading" />
    <Shelf api="/api/goodreads" shelf="read" title="Recently Read" />
  </Section>
  <Section>
    <h2>Runs</h2>
    <div>races go here</div>
  </Section>
  <Section>
    <h2>Games</h2>
    <Shelf api="/api/grouvee" shelf="playing" title="Currently Playing" />
    <Shelf api="/api/grouvee" shelf="finished" title="Recently Finished" />
  </Section>
</template>