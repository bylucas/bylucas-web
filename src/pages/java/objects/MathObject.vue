<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Math Object</h3>
<blockquote>
<p>Unlike other objects, the Math object has no constructor. The Math object is static. All methods and properties can be used without creating a Math object first.</p>
</blockquote>
<pre><code class="lang-js">console.log(Math.PI);
//answer: 3.141592653589793

console.log(Math.E);
//answer: 2.718281828459045
//The E property returns the Euler's number and the base of natural logarithms.

const area = 7.7;

console.log(Math.round(area));
//answer: 8
//nearest whole number
//if const area is 7.3 anwser: 7

console.log(Math.floor(area));
//answer: 7
//bottom whole number

console.log(Math.ceil(area));
//answer: 8
//top whole number

console.log(Math.trunc(area));
//answer: 7
//remove decimal place


//random numbers

const random = Math.random();

console.log(random);
//this answer: 0.5640304369763256
//different random answer with each refresh
//random between 0 and 1

console.log(Math.round(random * 100));
//this answer: 56
//different random answer with each refresh
//random between 1 and 100</code></pre>
<hr />
</div>
</template>

<script>

export default {

  mounted() {
    Prism.highlightAll()
  }
}
</script>