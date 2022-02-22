<template>
 
<div id="n" class="post-content">

<h3 class="page-title">If Statements</h3> 
<blockquote>
<p>If statements are Conditional statements, if a condition is true then do something. Unlike the loops we don't check a condition over and over, the conditon is checked once and acted upon if the conditon is true.</p>
</blockquote>
<pre><code class="lang-js">const age = 25;

//if the condition is true then
if(age > 20){
//do something
console.log('you are over 20 years old');
}
//answer: you are over 20 years old 

const people = ['michael', 'fred', 'john', 'walter'];

if(people.length > 3){
console.log("that's a lot of people!");
//use double quotes if apostrophe in the text
}
//answer: that's a lot of people!

const password = 'p@ssword';

//if > or = 8
if(password.length >= 8){
console.log('that password is long enough');
}
//answer: that password is long enough</code></pre>

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