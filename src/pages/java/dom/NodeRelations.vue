<template>
 <div id="n" class="post-content">
<h3 class="page-title">Node Relations</h3>

<blockquote>
<p>to come</p>
</blockquote>

<pre><code class="lang-html">//HTML
&lt;article&gt;
 &lt;h2&gt;article title&lt;/h2&gt;
 &lt;p&gt;The first 'p'&lt;/p&gt;
 &lt;p&gt;The second 'p'&lt;/p&gt;
 &lt;p&gt;The third 'p'&lt;/p&gt;
 &lt;div&gt;written by me&lt;/div&gt;
&lt;/article&gt;</code></pre>

<pre><code class="lang-js">//js
const article = document.querySelector('article');

console.log(article.children);
//answer: HTMLCollection(5)[h2, p, p, p, div]
//we can't do a forEach on 'HTMLCollections'

//use the javascript 'Array.from' on the 'HTMLCollection'
console.log(Array.from(article.children));
//answer: (5)[h2, p, p, p, div] - now it's an array

console.log(article.children);
//answer: HTMLCollection(5)[h2, p, p, p, div]
//Array.from is not destructive

Array.from(article.children).forEach(child =&gt; {
  child.classList.add('error');
});

//inspect elements
//answer:
//&lt;article&gt;
 //&lt;h2 class="error"&gt;article title&lt;/h2&gt;
 //&lt;p class="error"&gt;The first 'p'&lt;/p&gt;
 //&lt;p class="error"&gt;The second 'p'&lt;/p&gt;
 //&lt;p class="error"&gt;The third 'p'&lt;/p&gt;
 //&lt;div class="error"&gt;written by me&lt;/div&gt;
//&lt;/article&gt;</code></pre>

<pre><code class="lang-html">//HTML
&lt;section class="wrapper"&gt;
 &lt;div class="post"&gt;
  &lt;img src="post-image"&gt;
  &lt;h2&gt;The Title&lt;/h2&gt;
  &lt;p&gt;The story&lt;/p&gt;
  &lt;span&gt;by Author&lt;/span&gt;
 &lt;/div&gt;
&lt;/section&gt;</code></pre>

<pre><code class="lang-js">//js
const title = document.querySelector('.post h2');

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
//nextElementSibling = p, p parentElement = div.post, div.post children = img, h2, p, span</code></pre>

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