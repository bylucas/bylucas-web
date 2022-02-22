<template>
 
 <div id="n" class="post-content">

<h3 class="page-title">Dropdown</h3>

<pre><code class="lang-html">&lt;!-- html --&gt;
&lt;!-- showing 2 dropdowns --&gt;
&lt;div class="dropdown-area"&gt;

&lt;h2&gt;Dropdowns Title&lt;/h2&gt;
 
 &lt;div class="dropdown"&gt;
  &lt;div class="trigger"&gt;Dropdown One&lt;/div&gt;
  &lt;div class="content"&gt;
   &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus, a natus totam sequi velit? Vel cupiditate hic incidunt quam laboriosam tenetur nam, voluptate, necessitatibus ex porro, soluta accusantium aspernatur.&lt;/p&gt;
   &lt;/div&gt;
  &lt;/div&gt;
 
 &lt;div class="dropdown"&gt;
  &lt;div class="trigger"&gt;Dropdown Two&lt;/div&gt;
  &lt;div class="content"&gt;
   &lt;p&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus, a natus totam sequi velit? Vel cupiditate hic incidunt quam laboriosam tenetur nam, voluptate, necessitatibus ex porro, soluta accusantium aspernatur.&lt;/p&gt;
 &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dropdown Three --&gt;
&lt;!-- Dropdown Four --&gt;

&lt;/div&gt;</code></pre>

<pre><code class="lang-js">//js
class Dropdown {
 constructor(container){
  this.container = container;
  this.trigger = container.querySelector('.trigger');
  this.content = container.querySelector('.content');
 }
 
 init(){
  this.trigger.addEventListener('click', () => {
  this.trigger.classList.toggle('active');
  this.content.classList.toggle('active');
  });
 }
}

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
 const instance = new Dropdown(dropdown);
 instance.init();
});</code></pre>

<pre><code class="lang-scss">//scss
.dropdown-area {
 max-width: 600px;
 @include margin($spacer auto);
 padding: math.div($spacer, 2);
}

.dropdown .trigger{
 border-bottom: 1px solid #ddd;
 padding: 10px;
 position: relative;
 cursor: pointer;
}

.dropdown .trigger::after{
 content: ">";
 display: inline-block;
 position: absolute;
 right: 15px;
 transform: rotate(90deg) scale(0.5, 1);
 font-weight: bold;
 transition: transform 0.3s;
}

.dropdown .trigger.active::after{
 transform: rotate(-90deg) scale(0.5, 1);
}

.dropdown .content{
 display: none;

 p {
  font-size: $secondary;
  padding: math.div($spacer, 2) 10px;
  margin-bottom: 0;
  }
}

.dropdown .content.active{
 display: block;
}
</code></pre>

<hr>

</div>
</template>

<script>

export default {
   
  mounted() {
    Prism.highlightAll()
  }
}
</script>