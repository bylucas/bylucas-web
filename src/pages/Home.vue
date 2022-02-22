<template>
  <div class="outer-header">
    <Header :title="title" />
  </div>
  <div class="main">
    <h2 style="text-align: center">Testing</h2>

    <h3 style="text-align: center">This site is under test</h3>

    <p>Updated contacts to Firebase version 9</p>

    <p>Still need to sort out a lot of content</p>

    <p>Do we have a Blog? Is it administered from the site Amin Area?</p>

    <p>
      This will be the home page adipisicing elit. Rerum, repudiandae
      necessitatibus corrupti officia voluptates praesentium laborum libero, non
      tempora dolore voluptatum officiis unde, reiciendis rem. Totam ab tempore
      et optio?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
      repudiandae necessitatibus corrupti officia voluptates praesentium laborum
      libero, non tempora dolore voluptatum officiis unde, reiciendis rem. Totam
      ab tempore et optio?
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
      repudiandae necessitatibus corrupti officia voluptates praesentium laborum
      libero, non tempora dolore voluptatum officiis unde, reiciendis rem. Totam
      ab tempore et optio?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
      repudiandae necessitatibus corrupti officia voluptates praesentium laborum
      libero, non tempora dolore voluptatum officiis unde, reiciendis rem. Totam
      ab tempore et optio?
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
      repudiandae necessitatibus corrupti officia voluptates praesentium laborum
      libero, non tempora dolore voluptatum officiis unde, reiciendis rem. Totam
      ab tempore et optio?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
      repudiandae necessitatibus corrupti officia voluptates praesentium laborum
      libero, non tempora dolore voluptatum officiis unde, reiciendis rem. Totam
      ab tempore et optio?
    </p>
  </div>
</template>

<script>
import Header from "../components/Header.vue"

export default {
  data() {
    return {
      title: "Home Page",
    }
  },
  components: {
    Header,
  },
}
</script>

<style scoped>
.outer-header {
  background-color: rgb(247, 223, 49);
}
</style>
