import{_ as t}from"./index.58a79006.js";import{o,c as n,m as e}from"./vendor.8c156a9e.js";const c={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},l=e(`<h3 class="page-title">Back to Top</h3><h4>By Function</h4><pre><code class="lang-html">&lt;!-- html in the footer --&gt;
&lt;button onclick=&quot;topFunction()&quot; id=&quot;topBtn&quot; title=&quot;Back to top&quot;&gt;Top&lt;/button&gt;</code></pre><pre><code class="lang-js">//js
const backbutton = document.getElementById(&quot;topBtn&quot;);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop &gt; 20 || document.documentElement.scrollTop &gt; 20) {
  backbutton.style.display = &quot;block&quot;;
  } else {
  backbutton.style.display = &quot;none&quot;;
 }
}

function topFunction() {
 if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
 window.scrollBy(0,-50);
 let timeOut = setTimeout(&#39;topFunction()&#39;, 10);
 }
 else clearTimeout(timeout);
}</code></pre><h4>By Class</h4><pre><code class="lang-html">&lt;!-- html in the footer --&gt;
&lt;button id=&quot;topBtn&quot; title=&quot;Back to top&quot;&gt;Top&lt;/button&gt;</code></pre><pre><code class="lang-js">//js
class Backtotop {
 constructor() {
 this.backbutton = document.getElementById(&quot;topBtn&quot;);
 } 
 
 init() {
  window.onscroll = (&#39;scroll&#39;, () =&gt; {
   if (document.body.scrollTop &gt; 20 || document.documentElement.scrollTop &gt; 20) {
      this.backbutton.style.display = &quot;block&quot;;
      } else {
      this.backbutton.style.display = &quot;none&quot;;
      }
    });
  
   this.backbutton.addEventListener(&#39;click&#39;, () =&gt; {
    this.top();
    });
   }
  
  top() {
   if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    this.timeout = setTimeout(() =&gt; {
    this.top();
    }, 10);
  }
 }
}

const backtotop = new Backtotop();
backtotop.init();</code></pre><pre><code class="lang-scss">//scss used on both versions
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

  &amp;:active,
  &amp;:focus,
  &amp;:hover {
   opacity: 1;
 }
}</code></pre><hr>`,9),i=[l];function u(a,d,p,r,m,h){return o(),n("div",s,i)}var k=t(c,[["render",u]]);export{k as default};
