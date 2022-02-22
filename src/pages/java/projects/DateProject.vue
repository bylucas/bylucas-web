<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Date Project</h3>
<blockquote>
<p>to come</p>
</blockquote>
<pre><code class="lang-html"><!-- html -->
&lt;h2&gt;Clock&lt;/h2&gt;
 &lt;div class="clock"&gt;&lt;/div&gt;</code></pre>

<pre><code class="lang-js">const clock = document.querySelector('.clock');

const tick = () => {

const now = new Date();
  
const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();

const html = `
 &lt;span&gt;${h}&lt;/span&gt;:
 &lt;span&gt;${m}&lt;/span&gt;:
 &lt;span&gt;${s}&lt;/span&gt;
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);</code></pre>

<pre><code class="lang-scss">//scss
.clock{
 font-size: 2em;
 text-align: center;
 margin: 50px auto 50px auto;
 color: yellow;
 font-family: arial;
 background: #333;
 @include padding($spacer null);

  span{
   padding: 15px;
   background: #444;
  }
 }

@include media(700) {
 .clock{
 font-size: 4em;
 
 span{
  padding: 20px;
  }
 }
}</code></pre>
<hr />
</div>
</template>

<script>

export default {

  mounted() {
    Prism.highlightAll()
  }
};
</script>