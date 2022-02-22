<template>
 
 <div id="n" class="post-content">

<h3 class="page-title">Do While Loops</h3> 
<blockquote>
<p>Do while loops run the code once even if the condition is false. Then if true will carry on with the loop.</p>
</blockquote>
<pre><code class="lang-js">//a semi-colon is needed at the end because the while is out of the "do" code block

let i = 5;

do{
console.log('val of i is: ', i);
  i++;
} while(i &lt; 5);//note semi-colon
//result: val of i is: 5
//the code runs at least once even if the condition is false - in this example i = 5 is not less than 5 so is false

let x = 5;
do{
console.log('val of x is: ', x);
  x++;
} while(x &lt; 8);
//result:
//val of x is: 5
//val of x is: 6
//val of x is: 7</code></pre>

<hr>
</div>
</template>

<script>

export default {

  mounted() {
    Prism.highlightAll()
  }
};
</script>