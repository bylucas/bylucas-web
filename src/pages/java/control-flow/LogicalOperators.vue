<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Logical Operators</h3>
<blockquote>
<p>If we want to check for two or more conditions we can use the logical operators AND && and OR ||. The Logical NOT(!) switches the boolean value.</p>
</blockquote>
<pre><code class="lang-js">//checking two or more conditions

//using logical operator OR || and AND &&
const password = 'p@ss12';

//AND && both conditions must be true
if(password.length >= 12 && password.includes('@')){

console.log('that password is mighty strong');

//OR || one set of conditions must be true
//password must be 8 or more characters OR contain character @ AND contain 5 or more characters

} else if(password.length >= 8 || password.includes('@') && password.length > 5){

//password satisfies the two conditions on the right side of the || it contains @ and contains more than 5 characters
console.log('that password is strong enough');

} else {

console.log('that password is not strong enough');
}
//answer: that password is strong enough


//The Logical NOT(!) switches the boolean value

const user = false;

if(!user){
 //do something
 console.log('you must be logged in to continue');
}
//answer: you must be logged in to continue

console.log(!true);
//answer: false

console.log(!false);
//answer: true</code></pre>

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