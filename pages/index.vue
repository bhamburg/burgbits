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

    <article class="max-w-screen-lg flex flex-col justify-center mx-auto mt-5 p-4">
      <section>
        <h2>Latest Posts</h2>
        <div class="flex">
          <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-white dark:bg-zinc-700">
            <img
              class="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 pb-2">
              <div class="font-bold text-xl mb-2 dark:text-white">The Coldest Sunset</div>
              <p class="text-zinc-700 dark:text-zinc-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <span class="badge mr-2">#photography</span>
              <span class="badge mr-2">#travel</span>
              <span class="badge">#winter</span>
            </div>
            <div class="px-6 py-4 dark-mode">
              <span class="badge mr-2">#staysdark</span>
              <span class="badge force-light">#stayslight</span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-white dark:bg-zinc-700">
            <img
              class="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 pb-2">
              <div class="font-bold text-xl mb-2 dark:text-white">The Coldest Sunset</div>
              <p class="text-zinc-700 dark:text-zinc-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <span class="badge mr-2">#photography</span>
              <span class="badge mr-2">#travel</span>
              <span class="badge">#winter</span>
            </div>
            <div class="px-6 py-4 dark-mode">
              <span class="badge mr-2">#staysdark</span>
              <span class="badge force-light">#stayslight</span>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-white dark:bg-zinc-700">
            <img
              class="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4 pb-2">
              <div class="font-bold text-xl mb-2 dark:text-white">The Coldest Sunset</div>
              <p class="text-zinc-700 dark:text-zinc-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <span class="badge mr-2">#photography</span>
              <span class="badge mr-2">#travel</span>
              <span class="badge">#winter</span>
            </div>
            <div class="px-6 py-4 dark-mode">
              <span class="badge mr-2">#staysdark</span>
              <span class="badge force-light">#stayslight</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>