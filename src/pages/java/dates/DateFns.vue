<template>

<div id="n" class="post-content">

<h3 class="page-title">Date Fns</h3>
<blockquote>
 <p><strong>date-fns</strong> provides the most comprehensive, yet simple and consistent toolset for manipulating <strong>JavaScript dates</strong> in a <strong>browser</strong> & <strong>Node.js</strong>.</p>
<p><strong>date-fns</strong> is like <a href="https://lodash.com/">lodash</a> for dates. It has <a href="https://date-fns.org/docs/">140+ functions</a> for all occasions.</p>
</blockquote>
<pre><code class="lang-js">const now = new Date();

console.log(dateFns.isToday(now));
//result - true

//formatting options
console.log(dateFns.format(now, 'YYYY'));
//result - 2021
console.log(dateFns.format(now, 'MMMM'));
//result - January
console.log(dateFns.format(now, 'dddd'));
//result - Thursday
console.log(dateFns.format(now, 'Do'));
//result - 7th
console.log(dateFns.format(now, 'dddd, Do MMMM, YYYY'));
//result - Thursday, 7th January, 2021

//comparing dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
//result - almost 2 years ago</code></pre>
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