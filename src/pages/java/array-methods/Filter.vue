<template>

<div id="n" class="post-content">

<h3 class="page-title">Filter Method</h3>
<blockquote>
 <p>If true, keep in the array if false, filter it out</p>
</blockquote>
<pre><code class="lang-js">//Non destructive
//Returns a new array with new variable
const scores = [10, 30, 15, 25, 50, 40, 5];

//only show scores greater than 20
const highScores = scores.filter(score => score > 20);

console.log(highScores);
//result: [30, 25, 50, 40]

//non-destructive
console.log(scores);
//result: [10, 30, 15, 25, 50, 40, 5]

const users = [
 {name: 'peter', premium: true},
 {name: 'james', premium: false},
 {name: 'rick', premium: false},
 {name: 'john', premium: true}
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);
//result:
//0: {name: "peter", premium: true}
//1: {name: "john", premium: true}</code></pre>
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