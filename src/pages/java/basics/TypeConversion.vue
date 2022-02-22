<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Type Conversion</h3>
<blockquote>
<p>Most of the time, operators and functions automatically convert the values given to them to the right type. <em>Alert</em> automatically converts any value to a string to show it. <em>Mathematical operations</em> convert values to numbers.</p>

<p>There are also cases when we need to explicitly convert a value to the expected type.</p>
</blockquote>
<pre><code class="lang-js">let score = '100';

console.log(score + 1);
//result: 1001
//This is not what we want

console.log(typeof score);
//result: string

//convert to a number
score = Number(score);

console.log(score + 1);
//result: 101
//Thats better

console.log(typeof score);
//result: number

let result = Number('hello');

console.log(result, typeof result);
//result: NaN "number"

let result2 = String(50);

console.log(result2, typeof result2);
//result: 50 string

let result3 = Boolean(100);

console.log(result3, typeof result3);
//result: true "boolean"

let result4 = Boolean(0);

console.log(result4, typeof result4);
//result: false "boolean"
//A boolean set to 0 is false

let result5 = Boolean('0');

console.log(result5, typeof result5);
//result: true "boolean"
//boolean set to a string is true

let result6 = Boolean('');
console.log(result6, typeof result6);
//result: false "boolean"
//boolean set to a string with no value is false</code></pre>
</div>
</template>

<script>
export default {
  mounted() {
    Prism.highlightAll()
  }
}
</script>