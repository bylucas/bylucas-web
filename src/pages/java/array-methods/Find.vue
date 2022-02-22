<template>

<div id="n" class="post-content">

<h3 class="page-title">Find Method</h3>
<blockquote>
 <p>Returns the first value and stops</p>
</blockquote>
<pre><code class="lang-js">const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(score => score > 50);

console.log(firstHighScore);
//result: 60 - first value</code></pre>
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