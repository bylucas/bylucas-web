<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Ternary Operators</h3>
<blockquote>
<p>Ternary Operator - javaScript provides a special operator called ternary operator that assigns a value to a variable based on some condition. This is the short form of the else if statement</p>
</blockquote>
<pre><code class="lang-js">//The ternary operator starts with conditional expression followed by the ? operator. The second part (after ? and before :) will be executed if the condition turns out to be true. If the condition returns false, then the third part (after :) will be executed.

//&lt;condition> ? &lt;value1> : &lt;value2>;

let a = 10;
let b = 5;

let c = a > b? a : b;
let d = a > b? b : a;

console.log(c);//10
console.log(d);//5
//if true it executes value1

const password = 'p@ssword123456';

password.length >= 12 ? console.log('that password is mighty strong') : console.log('password should be at least 8 characters long');
//answer: that password is mighty strong
//if true it executes value1

password.length >= 12 ? console.log('password should be at least 8 characters long') : console.log('that password is mighty strong');
//answer: password should be at least 8 characters long
//if true it executes value1

//If the condition is true, the ternary operator returns value1, otherwise it returns value2

const body = document.querySelector('body');
body.style.backgroundColor = "red";

body.style.backgroundColor == 'red' ? body.style.backgroundColor = 'white' : body.style.backgroundColor = 'blue';

//inspect elements
//&lt;body style="background-color: white;"&gt;</code></pre>

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