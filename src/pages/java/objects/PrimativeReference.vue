<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Primative and Reference Values</h3>
<blockquote>
<p>Primitive and Reference values are stored in memory. Primitive values are stored on the <em>Stack</em> and Reference values are stored on the <em>Heap</em>. <strong>Primitive</strong> types include <em>numbers, strings, Booleans, null, undefined</em> and <em>symbols</em>. <strong>Reference</strong> types include <em>all types of objects, object literals, arrays, functions, dates</em> and <em>all other objects</em></p>
</blockquote>
<pre><code class="lang-js">//primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
//answer: scoreOne: 50 scoreTwo: 50

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
//answer: scoreOne: 100 scoreTwo: 50


//reference values
userOne = { name: 'mike', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);
//answer: {name: "mike", age: 30} {name: "mike", age: 30}

userOne.name = 'peter';
console.log(userOne, userTwo);
//answer: {name: "peter", age: 30} {name: "peter", age: 30}</code></pre>
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