<template>
<div id="n" class="post-content">

<h3 class="page-title">Tabs</h3>

<pre><code class="lang-html">&lt;!-- html -- &gt;
&lt;div class="tabs-area"&gt;
 &lt;h2&gt;Tabs Title&lt;/h2&gt;
 &lt;!-- tabs --&gt;
 &lt;div class="tabs"&gt;
  &lt;ul&gt;
   &lt;li class="trigger active" data-target="#one"&gt;Tab one&lt;/li&gt;
   &lt;li class="trigger" data-target="#two"&gt;Tab two&lt;/li&gt;
   &lt;li class="trigger" data-target="#three"&gt;Tab three&lt;/li&gt;
  &lt;/ul&gt;
 
 &lt;div id="one" class="content active"&gt;
  &lt;h3&gt;Tab one&lt;/h3&gt;
  &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.&lt;/p&gt;
 &lt;/div&gt;
 
 &lt;div id="two" class="content"&gt;
  &lt;h3&gt;Tab two&lt;/h3&gt;
  &lt;p&gt;Non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque.&lt;/p&gt;
  &lt;/div&gt;
 
 &lt;div id="three" class="content"&gt;
  &lt;h3&gt;Tab three&lt;/h3&gt;
  &lt;p&gt;Adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, lorem ipsum dolor sit amet consectetur ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.&lt;/p&gt;
 &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>

<pre><code class="lang-js">//js
class Tabs {
 constructor(container){
  this.container = container;
  this.tabs = container.querySelectorAll('.trigger');
 }
 
 init(){
  this.tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
   if(e.target.tagName === 'LI'){
    this.toggleTabs(e);
    this.toggleContent(e);
   }
  });
 });
}
 
 toggleTabs(e){
  // remove current active classes
  this.tabs.forEach(tab => tab.classList.remove('active'));
  // add new active class
  e.target.classList.add('active');
 }
 
 toggleContent(e){
 // remove current active classes
 this.container.querySelectorAll('.content').forEach(item => {
 item.classList.remove('active');
 });
 // add new active class
 const selector = e.target.getAttribute('data-target');
 const content = this.container.querySelector(selector);
 content.classList.add('active');
 }
}

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();</code></pre>

<pre><code class="lang-scss">//scss
.tabs-area {
 max-width: 600px;
 @include margin($spacer auto);
 padding: math.div($spacer, 2);
}

.tabs .trigger {
 list-style-type: none;
 background: #f2f2f2;
 margin: 3px;
 border-radius: 6px;
 display: inline-block;
 padding: 5px 10px;
 font-size: $third;
 cursor: pointer;
}

.tabs .trigger.active{
 background: #ff6565;
 color: white;
}

.tabs .content{
 background: #fbfbfb;
 padding: 10px 20px;
 border-radius: 6px;
 display: none;
}

.tabs .content.active{
 display: block;
}

@include media(700) {
 .tabs .trigger{
  list-style-type: none;
  background: #f2f2f2;
  margin: 4px;
  border-radius: 6px;
  display: inline-block;
  padding: 10px 20px;
  font-size: $secondary;
  cursor: pointer;
 }
}</code></pre>

<hr>
</div>
</template>

<script>

export default {

  mounted() {
    Prism.highlightAll()
  }
};
</script>