import{_ as t}from"./index.58a79006.js";import{o as e,c as n,m as l}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},s=l(`<h3 class="page-title">Node Relations</h3><blockquote><p>to come</p></blockquote><pre><code class="lang-html">//HTML
&lt;article&gt;
 &lt;h2&gt;article title&lt;/h2&gt;
 &lt;p&gt;The first &#39;p&#39;&lt;/p&gt;
 &lt;p&gt;The second &#39;p&#39;&lt;/p&gt;
 &lt;p&gt;The third &#39;p&#39;&lt;/p&gt;
 &lt;div&gt;written by me&lt;/div&gt;
&lt;/article&gt;</code></pre><pre><code class="lang-js">//js
const article = document.querySelector(&#39;article&#39;);

console.log(article.children);
//answer: HTMLCollection(5)[h2, p, p, p, div]
//we can&#39;t do a forEach on &#39;HTMLCollections&#39;

//use the javascript &#39;Array.from&#39; on the &#39;HTMLCollection&#39;
console.log(Array.from(article.children));
//answer: (5)[h2, p, p, p, div] - now it&#39;s an array

console.log(article.children);
//answer: HTMLCollection(5)[h2, p, p, p, div]
//Array.from is not destructive

Array.from(article.children).forEach(child =&gt; {
  child.classList.add(&#39;error&#39;);
});

//inspect elements
//answer:
//&lt;article&gt;
 //&lt;h2 class=&quot;error&quot;&gt;article title&lt;/h2&gt;
 //&lt;p class=&quot;error&quot;&gt;The first &#39;p&#39;&lt;/p&gt;
 //&lt;p class=&quot;error&quot;&gt;The second &#39;p&#39;&lt;/p&gt;
 //&lt;p class=&quot;error&quot;&gt;The third &#39;p&#39;&lt;/p&gt;
 //&lt;div class=&quot;error&quot;&gt;written by me&lt;/div&gt;
//&lt;/article&gt;</code></pre><pre><code class="lang-html">//HTML
&lt;section class=&quot;wrapper&quot;&gt;
 &lt;div class=&quot;post&quot;&gt;
  &lt;img src=&quot;post-image&quot;&gt;
  &lt;h2&gt;The Title&lt;/h2&gt;
  &lt;p&gt;The story&lt;/p&gt;
  &lt;span&gt;by Author&lt;/span&gt;
 &lt;/div&gt;
&lt;/section&gt;</code></pre><pre><code class="lang-js">//js
const title = document.querySelector(&#39;.post h2&#39;);

console.log(title.parentElement);
//answer: div.post

console.log(title.parentElement.parentElement);
//answer: section.wrapper

console.log(title.nextElementSibling);
//answer: p

console.log(title.previousElementSibling);
//answer: img

//chaining
console.log(title.nextElementSibling.parentElement.children);
//answer: HTMLCollection(4)[img, h2, p, span]
//nextElementSibling = p, p parentElement = div.post, div.post children = img, h2, p, span</code></pre><hr>`,7),c=[s];function i(a,p,g,d,h,m){return e(),n("div",r,c)}var v=t(o,[["render",i]]);export{v as default};
