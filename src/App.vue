<template>
  <div class="wrapper">
    
    <TopNav />
  
    <router-view v-slot="{ Component }">
     
      <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      :css="false"
      >
          <component :is="Component"></component>
      </transition>
    
    </router-view>

    <Footer />
    <BackTop />
  </div>
</template>

<script setup>
import TopNav from "./components/TopNav.vue"
import BackTop from "./components/BackTop.vue"
import Footer from "./components/Footer.vue"
import gsap from 'gsap'

    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-100px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        translateY:0,
        opacity: 1,
        //ease: 'bounce.out',
        onComplete: done
      })
    }

</script>

<style>
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}
</style>
