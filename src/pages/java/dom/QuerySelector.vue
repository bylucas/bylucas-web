<template>
 <div id="n" class="post-content">
<h3 class="page-title">QuerySelectors</h3>
<blockquote>
<p>querySelctors retreave node lists</p>
<p>node lists are not arrays</p>
<p>you can use square bracket notation on node lists</p>
<p>you can do forEach on node lists</p>
</blockquote>

<pre><code class="lang-html">//HTML
&lt;p&gt;this is the first 'p'&lt;/p&gt;
&lt;p&gt;this is the second 'p'&lt;/p&gt;
&lt;p class="error"p&gt;this is the third 'p' with class 'error'&lt;/p&gt;
&lt;div class="error"&gt;this is a 'div' with class 'error'&lt;/div&gt;</code></pre>

<pre><code class="lang-js">//js
//calling the first p
const para = document.querySelector('p');

//calling the first error class
const para1 = document.querySelector('.error');

//calling a specific div with class error
const para2 = document.querySelector('div.error');

console.log(para, para1, para2);
//answer: &lt;p&gt;this is the first 'p'&lt;/p&gt;
//answer: &lt;p class="error"&gt;this is the third 'p' with class 'error'&lt;/p&gt;
//answer: &lt;div class="error"&gt;this is a 'div' with class 'error'&lt;/div&gt;

//query multiple elements at once
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(paras, errors);
//answer:
//NodeList(4)[p, p, p.error, p]
//NodeList(2)[p.error, div.error]

//calling the second p and the first error class
//using square bracket notation
//remember javascript starts from 0
console.log(paras[1], errors[0]);
//answer:
//&lt;p&gt;this is the second 'p'&lt;/p&gt;
//&lt;p class="error"&gt;this is the third 'p' with class 'error'&lt;/p&gt;</code></pre>

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