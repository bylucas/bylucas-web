<template>

<div id="n" class="post-content">

<h3 class="page-title">Reduce Method</h3>
<blockquote>
 <p>Doesn't necessarily return a new array</p>
</blockquote>
<pre><code class="lang-js">//Returns the values
//acc = accumalate - optional name
//curr = current - optional name

const scores = [10, 20, 60, 40, 70, 90, 30];

const result = scores.reduce((acc, curr) => {
 if(curr > 50){
  acc++;
 }
  return acc;
 }, 0);

console.log(result);
//result: 3 - 3 scores over 50

const scores = [
  {player: 'james', score: 50},
  {player: 'mary', score: 30},
  {player: 'hugo', score: 70},
  {player: 'mary', score: 60},
  {player: 'james', score: 50},
  {player: 'mary', score: 40},
  {player: 'hugo', score: 70},
  {player: 'mary', score: 10}
];

const maryTotal = scores.reduce((acc, curr) => {
  if(curr.player === 'mary'){
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(maryTotal);
//result: 140 - mary score 30 + 60 + 40 + 10</code></pre>
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