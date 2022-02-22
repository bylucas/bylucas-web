<template>
  
<div id="n" class="post-content">

<h3 class="page-title">Else If Statements</h3>
<blockquote>
<p>Using else if we can offer feedback to users even if the conditions are false.</p>
</blockquote>
<pre><code class="lang-js">const password = 'p@ssword123456';

if(password.length >= 12){

console.log('that password is mighty strong');

} else if(password.length >= 8){

console.log('that password is long enough');

} else {

console.log('password should be at least 8 characters long');
}
//answer: that password is mighty strong

//the above if statement runs through the if statement checking if the condition is true, if not it runs through the else if statement and checks if the condition is true. finally if both conditions are false then it will fire the else (fallback) condition. the user will always see a result.</code></pre>

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