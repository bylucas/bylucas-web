<template>
  
<div id="n" class="post-content">

<h3 class="page-title">Variables and Block Scope</h3>
<blockquote>
<p>When a variable is defined in the script root it has a global scope. When a variable is defined in a code block it has a block scope. var ignores code blocks</p>
</blockquote>
<pre><code class="lang-js">//root value
let age = 30;
var number = 20;

//new code block
if(true){
//re-define age
 let age = 40;
 let name = 'peter';
 //local values
 var number = 10;
  console.log('inside 1st code block: ', age, name);
//answer: inside 1st code block: 40 peter

//nested code block
if(true){
//re-define age again
 let age = 50;
  console.log('inside 2nd code block: ', age, name);
//answer: inside 2nd code block: 50 peter
//takes name value from parent code block still local value
 }
}

console.log('outside code block: ', age, name, number);
//answer: outside code block: 30 10
//no name value in the root script
//var was changed in the code block</code></pre>

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