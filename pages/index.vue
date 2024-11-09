<template>
  <main>
    <Jumbotron>
      <div class="md:mx-5 p-4">
        <h2>Hi, I&rsquo;m Brian.</h2>
        <p class="md:text-2xl pt-5">I&rsquo;m a 
          <span class="font-mono bg-sky-400 dark:bg-indigo-900 rounded px-1">software engineer</span>,<br /> 
          a <strong><em>designer</em></strong>,<br />
          and a <em class="font-serif">musician</em>.
        </p>
        <div>
          <Button to="/about" aria-current="page" type="button" class="solid">
            Learn more
          </Button>
          <Button to="/now" aria-current="page" type="button">
            What I'm up to
          </Button>
        </div>
      </div>
      <div class="flex md:mx-5 p-4 justify-center">
        <HomeHeroFlipper />
      </div>
    </Jumbotron>

    <Section>
      <article class="flex flex-col md:flex-row mt-10">
        <div class="mx-4">
          <h3>Software Engineer</h3>
          <p>
            With over a decade of experience building user interfaces for 
            the Web and providing technical support, my focus has always been 
            to remove friction from the user experience.
          </p>
        </div>
        <div class="mx-4">
          <h3>Designer</h3>
          <p>
            My background in graphic design gives me an appreciation for both 
            accessibility and aesthetics. I strive to create components that 
            are usable and reusable. Design is how it works!
          </p>
        </div>
        <div class="mx-4">
          <h3>Musician</h3>
          <p>
            When I'm not behind my laptop, you can often find me behind my 
            four-string banjo, plunking out traditional jazz favorites 
            written circa a century ago.
          </p>
        </div>
      </article>
    </Section>
  </main>
</template>