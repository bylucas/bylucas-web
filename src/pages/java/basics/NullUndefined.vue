<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Null and Undefined</h3>
<blockquote>
<p>Setting a value of null is intentionally leaving the value undefined whereas a variable that has no value is set to undefined by the browser.</p>
</blockquote>
<pre><code class="lang-js">//null and undefined are primitive values in JavaScript
//a null or undefined value evalutes to false in conditional expression

//a null value means absence

let count = null;
//intentionally setting no value

console.log(count, count + 3, `the sum is ${count}`);
//result: null 3 "the sum is null"
//count is null
//no value + 3 = 3
//${count} is null


//an undefined value means lack of value

let counter
//awaiting a value
//browser sets count to undefined

console.log(counter, counter + 3, `the sum is ${counter}`);
//result: undefined NaN "the sum is undefined"</code></pre>

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