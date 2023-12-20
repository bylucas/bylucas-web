<template>
  <div class="article">
	<div class="outer-header">
  <Header :picture="backgroundImage" :title="title" />
  </div>

  <div class="main">
    <h3 class="menu-title">MENU</h3>
    <div class="links-wrap">
      <div class="links-left">
        <h5 class="menu-header">Left</h5>
    <!-- <router-link :to="{ name: 'Command' }">Command Line</router-link> -->
    <div class="spacer hidden">- - - - - - - - - - -</div>
  </div>
  <div class="links-right">
    <h5 class="menu-header">Right</h5>
    <!-- <router-link :to="{ name: 'Git' }">GitHub</router-link> -->
  </div>
</div>
 <hr>

    <router-view v-slot="{ Component }">
      
    <transition name="fade" mode="out-in">
      <div>
      <component :is="Component" :key="$route.path"></component>
      </div>
    </transition>
    
  </router-view>

 </div>
</div>
</template>

<script>
	import Header from '../components/Header.vue'
  
  export default {
   data() {
    return {
      backgroundImage: 'img/modern-javascript.png',
      title: 'Vue'
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
  .outer-header {
    background-color: rgb(145, 155, 39);
  }
</style>