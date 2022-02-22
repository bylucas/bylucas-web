<template>
  <div id="n" class="post-content">
    <h3 class="page-title">Break and Continue</h3>
    <blockquote>
      <p>
        Back to loops - The break statement "jumps out" of a loop. The continue
        statement "jumps over" one iteration in the loop.
      </p>
    </blockquote>
    <pre><code class="lang-js">//The break statement can be used to jump out of a loop
for(let i = 0; i &lt; 10; i++) {
  if(i === 5) {
    break;
  }
  console.log(i);
  //answer: 0 1 2 3 4
}

//The continue statement skips the specified condition and continues on with the next iteration.
for(let i = 0; i &lt; 10; i++) {
  if(i === 5) {
    continue;
  }
  console.log(i);
  //answer: 0 1 2 3 4 6 7 8 9
}

//in this case we loop through the array but we don't want to show a score of 0 so it is skipped and continues with the array
const scores = [50, 25, 0, 30, 100, 20, 10];

 for (let i = 0; i &lt; scores.length; i++) {
  if (scores[i] === 0) {
   continue;
 }

//when we reach 100 the conditon is true so we don't need to go any further (break) and show the result.
console.log('your score:', scores[i]);

//answer:
//your score: 50
//your score: 25
//your score: 30
//your score: 100
//your score: 20
//your score: 10
//} end the continue statement

//note: the above answer is without the effect of the break statement, below. The next break statement will break the loop and not show the 20 and 10

 if (scores[i] === 100) {
  console.log('break the loop', scores[i]);
  //answer: 
  //your score: 50
  //your score: 25
  //your score: 30
  //your score: 100
  //break the loop 100
   break;
 }
}//join together the continue and break statements

const colors = ['red', 'blue', 'purple', 'white', 'yellow'];

for (let x = 0; x &lt; colors.length; x++) {
  if (colors[x].includes('u')) {
    continue
  }
  console.log(colors[x]);
  //answer: continue past colors containing 'u'
  //red
  //white
  //yellow
  
  //skip blue and purple

  //note: final answer here is red after taking the effect of the next break statement

  if (colors[x].includes('e')) {
    console.log(colors[x]);
    //answer: red - break the first color with an 'e' out of the remaining 3 colors
    break;
 }
}</code></pre>

    <hr />
  </div>
</template>

<script>
export default {
  mounted() {
    Prism.highlightAll()
  },
}
</script>
