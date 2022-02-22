<template>
  <div class="nav-wrap">
    <nav class="top-nav">
      <div class="left">
        <button id="left-button" @click="swipeLeft">&#8592;</button>
      </div>
      <div class="center" id="content" ref="content">
        <div class="internal">
          <!-- <router-link :to="{ name: 'Howardlucas' }">hl</router-link> | -->
          <router-link :class="{ active: isActive }" :to="{ name: 'Home' }"
            >Home</router-link
          >
          | <router-link :to="{ name: 'Javascript' }">Javascript</router-link> |
          <router-link :to="{ name: 'Php' }">Php</router-link> |
          <router-link :to="{ name: 'Css' }">Css</router-link> |
          <router-link :to="{ name: 'Vue3' }">Vue</router-link> |
          <router-link :to="{ name: 'Firebase' }">Firebase</router-link> |
          <router-link :to="{ name: 'Other' }">Misc</router-link>
        </div>
      </div>
      <div class="right">
        <button id="right-button" @click="swipeRight">&#8594;</button>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft
      // Condition to check if scrolling is required
      if (
        !(
          (scrollPos === 0 || scrollPixels > 0) &&
          (element.clientWidth + scrollPos === element.scrollWidth ||
            scrollPixels < 0)
        )
      ) {
        // Get the start timestamp
        const startTime =
          "now" in window.performance ? performance.now() : new Date().getTime()

        function scroll(timestamp) {
          //Calculate the timeelapsed
          const timeElapsed = timestamp - startTime
          //Calculate progress
          const progress = Math.min(timeElapsed / duration, 1)
          //Set the scrolleft
          element.scrollLeft = scrollPos + scrollPixels * progress
          //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll)
          } else {
            return
          }
        }
        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll)
      }
    },
    swipeLeft() {
      const content = this.$refs.content
      this.scrollTo(content, -300, 800)
      document.querySelector("#left-button").style.display = "none"
      document.querySelector("#right-button").style.display = "block"
    },
    swipeRight() {
      const content = this.$refs.content
      this.scrollTo(content, 300, 800)
      document.querySelector("#right-button").style.display = "none"
      document.querySelector("#left-button").style.display = "block"
    },
  },
}
</script>
