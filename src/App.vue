<template>
  <div class="wrapper">
    
    <TopNav />
  
    <router-view v-slot="{ Component }">
      <transition name="fade">
          <component :is="Component" :key="$route.path"></component>
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
</script>
