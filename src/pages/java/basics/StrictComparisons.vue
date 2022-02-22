<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Loose and Strict Comparisons</h3>
<blockquote>
<p><em>Loose Comparison</em> '==' allows us to compare two or more operands by converting their value to a common type first and then checking for the equality between them.</p>

<p><em>Strict Comparison</em> '===' allows us to compare two or more operands by checking the equality between the values as well as their types . It returns true only if the values and the type both match with the other operand.</p>
</blockquote>
<pre><code class="lang-js">let age = 25;

//loose comparison (different types can still be equal)

console.log('1', age == 25);
//result: true

console.log('2', age == '25');
//result: true

console.log('3', age != 25);
//result: false

console.log('4', age != '25');
//result: false


//strict comparison (different types cannot be equal)

console.log('5', age === 25);
//result: true

console.log('6', age === '25');
//result: false

console.log('7', age !== 25);
//result: false

console.log('8', age !== '25');
//result: true</code></pre>

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