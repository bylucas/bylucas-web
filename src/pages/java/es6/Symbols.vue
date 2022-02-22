<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Symbols</h3>
<blockquote>
<p>Completely unique - primative type</p>
</blockquote>
<pre><code class="lang-js">const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
//answer: Symbol(a generic name) "symbol"
console.log(symbolOne === symbolTwo);
//answer: false

const person = {};

person.age = 30;
person['belt'] = 'black';//overwrites can only have one belt property
person['belt'] = 'orange';

person[symbolOne] = 'john';
person[symbolTwo] = 'frank';

console.log(person);
//answer: {age: 30, belt: "orange", Symbol(a generic name): "john", Symbol(a generic name): "frank"}

console.log(person[symbolOne], person[symbolTwo]);
//answer: john frank</code></pre>
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