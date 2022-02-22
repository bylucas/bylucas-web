<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Booleans and Comparisons</h3>
<blockquote>
<p>How booleans and comparisons work - true or false.</p>
</blockquote>
<pre><code class="lang-js">//methods can return booleans
let email = 'michael@michaelcain.co.uk';
let names = ['michael', 'fred', 'john'];

let result = email.includes('@');
console.log(result);
//answer: true

let result2 = names.includes('fred');
console.log(result2);
//answer: true


//comparison operators
let age = 25;

console.log('1', age == 25);
//answer: true

console.log('2', age == 30);
//answer: false

console.log('3', age != 30);
//answer: true

console.log('4', age > 20);
//answer: true

console.log('5', age &lt; 20);
//answer: false

console.log('6', age &lt;= 25);
//answer: true

console.log('7', age >= 25);
//answer: true


let name = 'peter';

console.log('8', name == 'peter');
//answer: true

console.log('9', name == 'Peter');
//answer: false

//p comes after c
console.log('10', name > 'claire');
//answer: true

//lowercase is greater than uppercase
console.log('11', name > 'Peter');
//answer: true

console.log('12', name > 'Claire');
//answer: true</code></pre>

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