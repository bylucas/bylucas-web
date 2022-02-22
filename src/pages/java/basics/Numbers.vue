<template>

<div id="n" class="post-content">

<h3 class="page-title">Numbers</h3>
<blockquote>
<p>JavaScript has only one type of number. Numbers can be written with or without decimals.</p>
</blockquote>
<pre><code class="lang-js">//math operators: +, -, *, /, **, %

// + : Addition
// - : Subtraction
// * : Multiplication
// / : Division
// ** : Exponentiation (power)
// % : Modulus (remainder)
// ++ : Increment
// -- : Decrement

let radius = 10;
let pi = 3.14;

let result = radius % 3;
console.log(result);
//result: 1
//10 / 3 = 3 remainder 1
  
let result2 = pi * radius**2;
console.log(result2);
//result: 314
//3.14 x 10 x 10

// order of operation - B I D M A S

// Brackets
// Indices
// Divide
// Multiply
// Addition
// Subtraction

let result3 = 5 * (10 - 3)**2;
console.log(result3);
//answer: 245

// How its worked out:
// Brackets : 10 - 3 = 7
// Indices : 7 x 7 = 49
// Multiply : 5 x 49 = 245

//shorthands
let count = 10;

count = count + 1; //answer 11
//shorter
count++; //answer 11

count = count + 10; //answer 20
//shorter
count += 10; //answer 20
count *= 2; //answer 20
count /= 2; //answer 5

//NaN - not a number
console.log(5 / 'hello');
//answer: NaN


let result4 = 'the total count is ' + count;
console.log(result4);
//answer:the total count is 32
//sum of all the above count: 10 + 1 + 1 + 10 + 10 x 2 / 2</code></pre>

<hr>


</div>
</template>

<script>
export default {
  mounted() {
    Prism.highlightAll()
  }
}
</script>