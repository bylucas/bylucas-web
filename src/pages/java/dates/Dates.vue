<template>

<div id="n" class="post-content">

<h3 class="page-title">Dates</h3>
<blockquote>
 <p>to come</p>
</blockquote>
<pre><code class="lang-js">const now = new Date();

console.log(now);
//result - Thu Jan 07 2021 15:05:14 GMT+0000 (Greenwich Mean Time)

console.log(typeof now);
//result - object

// years, months, days, times
console.log('getFullYear:', now.getFullYear());
//result - getFullYear: 2021

console.log('getMonth (0-based):', now.getMonth());
//result - getMonth (0-based): 0

console.log('getDate:', now.getDate());
//result - getDate: 7

console.log('getDay (0-based):', now.getDay());
//result - getDay (0-based): 4

console.log('getHours:', now.getHours());
//result - getHours: 15

console.log('getMinutes:', now.getMinutes());
//result - getMinutes: 5

console.log('getSeconds:', now.getSeconds());
//result - getSeconds: 14

// timestamps
console.log('timestamp:', now.getTime());
//result - timestamp: 1610031914135

// date strings
console.log(now.toDateString());
//result - Thu Jan 07 2021

console.log(now.toTimeString());
//result - 15:05:14 GMT+0000 (Greenwich Mean Time)

console.log(now.toLocaleString());
//result - 07/01/2021, 15:05:1</code></pre>
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