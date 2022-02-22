<template>
    <div id="n" class="post-content">

<h3 class="page-title">Back to Top</h3>

<h4>By Function</h4>

<pre><code class="lang-html">&lt;!-- html in the footer --&gt;
&lt;button onclick="topFunction()" id="topBtn" title="Back to top"&gt;Top&lt;/button&gt;</code></pre>

<pre><code class="lang-js">//js
const backbutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  backbutton.style.display = "block";
  } else {
  backbutton.style.display = "none";
 }
}

function topFunction() {
 if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
 window.scrollBy(0,-50);
 let timeOut = setTimeout('topFunction()', 10);
 }
 else clearTimeout(timeout);
}</code></pre>


<h4>By Class</h4>

<pre><code class="lang-html">&lt;!-- html in the footer --&gt;
&lt;button id="topBtn" title="Back to top"&gt;Top&lt;/button&gt;</code></pre>

<pre><code class="lang-js">//js
class Backtotop {
 constructor() {
 this.backbutton = document.getElementById("topBtn");
 } 
 
 init() {
  window.onscroll = ('scroll', () => {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.backbutton.style.display = "block";
      } else {
      this.backbutton.style.display = "none";
      }
    });
  
   this.backbutton.addEventListener('click', () => {
    this.top();
    });
   }
  
  top() {
   if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    this.timeout = setTimeout(() => {
    this.top();
    }, 10);
  }
 }
}

const backtotop = new Backtotop();
backtotop.init();</code></pre>

<pre><code class="lang-scss">//scss used on both versions
#topBtn {
 font-family: $alt-font;
 text-align: center;
 @include border-right-radius(0);
 position: fixed;
 bottom: 60px;
 right: 0;
 background: $black;
 display: none;
 padding: .5rem;
 font-size: $third;
 letter-spacing: 1px;
 color: $white;
 opacity: .7;

  &:active,
  &:focus,
  &:hover {
   opacity: 1;
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