<template>
 <div id="n" class="post-content">
<h3 class="page-title">Classes</h3>

<blockquote>
<p>Add, remove classes</p>
</blockquote>

<pre><code class="lang-html">//HTML
&lt;p&gt;This is success&lt;/p&gt;
&lt;p&gt;This another success&lt;/p&gt;
&lt;p&gt;This is completely different text&lt;/p&gt;
&lt;p&gt;This is error&lt;/p&gt;
&lt;p&gt;This is another error&lt;/p&gt;</code></pre>

<pre><code class="lang-js">//js
const content = document.querySelector('.box p');

//adds class 'error' to first 'p'
content.classList.add('error');
//answer: &lt;p class="error"&gt;This is success&lt;/p&gt;

//removes the class 'error' only on the first 'p'
content.classList.remove('error');
//answer: &lt;p&gt;This is success&lt;/p&gt;

//grab all the 'p' elements
const story = document.querySelectorAll('.box p');

story.forEach(p =&gt; {
 if(p.textContent.includes('error')){
  p.classList.add('error');
   } else if(p.textContent.includes('success')) {
  p.classList.add('success');
 }

//inspect elements
//answer:
//&lt;p class="success"&gt;This is success&lt;/p&gt;
//&lt;p class="success"&gt;This another success&lt;/p&gt;
//&lt;p&gt;This is completely different text&lt;/p&gt;
//&lt;p class="error"&gt;This is error&lt;/p&gt;
//&lt;p class="error"&gt;This is another error&lt;/p&gt;
});</code></pre>

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