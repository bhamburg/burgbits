<template>
  <ClientOnly>
    <div 
      v-on:click="flip"
      :class="['flip-card w-64 h-64', {active: flipped}]"
      title="Click me!"
    >
      <div class="flip-card-inner">
        <a class="flip-card-front">
          <img
            class="rounded-full w-full border-8 border-white"
            src="/assets/images/brian-hamburg-profile-photo-DICE2019.jpeg" 
            alt="Brian Hamburg"
          />
        </a>
        <a class="flip-card-back">
          <img 
            class="rounded-full w-full border-8 border-white"
            :src="photos[photoIndex].src" 
            :alt="photos[photoIndex].alt"
          />
        </a>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
  /* flip card styles */
  .flip-card {
    background-color: transparent;
    cursor: pointer;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card.active .flip-card-inner {
    transform: rotateY(540deg);
  }

  /* Position the front and back side */
  .flip-card-front, .flip-card-back {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  /* Style the back side */
  .flip-card-back {
    transform: rotateY(180deg);
  }
</style>

<script>
  export default {
    data () {
      let flipped  = false,
          flipping = false,
          photos   = [
            {
              'src': '/_nuxt/assets/images/2015-mummers-parade.jpg',
              'alt': '2015 Mummers Parade'
            },
            {
              'src': '/_nuxt/assets/images/2022-mummers-parade.jpg',
              'alt': '2022 Mummers Parade'
            },
            {
              'src': '/_nuxt/assets/images/at-cannstatters.jpg',
              'alt': 'Summer with the Twins'
            },
            {
              'src': '/_nuxt/assets/images/christmas-2020.jpg',
              'alt': 'Christmas 2020'
            },
            {
              'src': '/_nuxt/assets/images/disney-world.jpg',
              'alt': 'Magic Kingdom'
            },
            {
              'src': '/_nuxt/assets/images/Hamburg-family-beach.jpg',
              'alt': 'On the beach'
            },
            {
              'src': '/_nuxt/assets/images/july-4th-2020.jpg',
              'alt': 'Fourth of July'
            },
            {
              'src': '/_nuxt/assets/images/love-phila.jpg',
              'alt': 'With Love, Philadelphia'
            },
            {
              'src': '/_nuxt/assets/images/midnight-society.jpg',
              'alt': 'Drew Nugent and the Midnight Society gig'
            },
            {
              'src': '/_nuxt/assets/images/night-out.jpg',
              'alt': 'fancy night out'
            },
            {
              'src': '/_nuxt/assets/images/ramblers-bookstore.jpg',
              'alt': 'Red Hot Ramblers at the Bookstore Speakeasy'
            },
            {
              'src': '/_nuxt/assets/images/the-claw.jpg',
              'alt': 'claw machine halloween costume'
            },
            {
              'src': '/_nuxt/assets/images/vegavox.jpg',
              'alt': 'Vegavox banjo'
            },
            {
              'src': '/_nuxt/assets/images/wedding-city-hall.jpg',
              'alt': 'wedding photo at city hall'
            },
            {
              'src': '/_nuxt/assets/images/with-fralinger-shades.jpg',
              'alt': 'banjo with shades'
            },
            {
              'src': '/_nuxt/assets/images/work-at-dice.jpg',
              'alt': 'at work'
            },
            {
              'src': '/_nuxt/assets/images/java-bean-hamburg.jpg',
              'alt': 'Java the Bunny'
            },
            {
              'src': '/_nuxt/assets/images/ludwig-banjo.jpg',
              'alt': 'Ludwig with banjo'
            },
            {
              'src': '/_nuxt/assets/images/mario-prize.jpg',
              'alt': 'Huge plush Mario prize'
            },
          ],
          photoIndex = Math.floor(Math.random() * photos.length); // start with random photo from array

      return {
        flipped,
        flipping,
        photoIndex,
        photos
      }
    },
    mounted() {
      // preload images
      this.$nextTick(function () {
        for (var i = 0; i < this.photos.length; i++) {
          let tempImage = new Image();
          tempImage.src = this.photos[i].src;
        }
      })

      // auto flip after 8 seconds
      setInterval(()=>{
        this.flip();
      },10000)
    },
    methods: {
      flip: function() {
        if (!this.flipping) {
          this.flipping = true;
          this.flipped = !this.flipped;
          if (!this.flipped) {
            setTimeout(() => {
              this.photoIndex = Math.floor(Math.random() * this.photos.length); // choose another random photo from array
            }, 800); // wait until animation finishes to load next image
          }
          setTimeout(() => { this.flipping = false }, 1000); // throttle flipping
        }
      }
    }
  }
</script>
