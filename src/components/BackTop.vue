<template>
  <transition name="back-to-top-fade">
    <div class="vue-back-to-top" :visibleoffset="visibleoffset" v-show="visible" @click="backToTop">
      <slot>
        <div class="default">
          <span>
            {{ text }}
          </span>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
		return {
			visible: false,
			text: 'Top',
			visibleoffset: 200,
		}
	},

	mounted() {
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.catchScroll)
  },

  methods: {
    catchScroll () {
      this.visible = (window.scrollY > parseInt(this.visibleoffset))
    },
    backToTop () {
      window.smoothscroll()
    }
}
};
</script>