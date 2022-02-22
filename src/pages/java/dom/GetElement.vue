<template>
 <div id="n" class="post-content">
<h3 class="page-title">GetElementBy...</h3>
<blockquote>
 <p>get element selectors retreave html collections</p>
<p>get element selectors use square bracket notation</p>
<p>you cannot do a forEach on html collections</p>
</blockquote>

<pre><code class="lang-html">//HTML
&lt;h1 id="title"&gt;This a 'h1' with id of 'title'&lt;/h1&gt;
&lt;p&gt;This is the first 'p'&lt;/p&gt;
&lt;p class="error"&gt;This is a 'p' with class 'error'&lt;/p&gt;
&lt;div class="error"&gt;This is a 'div' with class 'error'&lt;/div&gt;</code></pre>

<pre><code class="lang-js">//js
//get elements by #id
//this one is getElement the others are getElements
const title = document.getElementById('page-title');
console.log(title);
//answer: h1#page-title

//get elements by class name
const errors = document.getElementsByClassName('error');
console.log(errors);
//answer: HTMLCollection(2)[p.error, div.error]

//get the first instance of class 'error'
console.log(errors[0]);
//anwswer: p.error

//get elements by tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
//answer: HTMLCollection(4)[p, p, p.error, p]

//select the second 'p' using square bracket notation
console.log(paras[1]);
//answer: p - innerHTML: "This is a 'p' with class 'error'"</code></pre>

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