<template>
  <header class="header" :style="computedStyle">
    <h1 class="title">{{ title }}</h1>
</header>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: false
    },
    picture: {
      type: String,
      required: false
    }
  },
  computed: {
    computedStyle() {
      
        return 'background-image: url(' + this.picture + ');'
      }
  }
};
</script>