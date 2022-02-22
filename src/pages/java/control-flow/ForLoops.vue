<template>
 
 <div id="n" class="post-content">
 <h3 class="page-title">For Loops</h3>
<blockquote>
<p>For loops are one of the many different types of loop in javascript</p>
</blockquote>
<pre><code class="lang-js">//for loops don't need a semi-colon to end code blocks

for(let i = 0; i &lt; 5; i++){
 console.log('loop: ', i);
}
//result:
//loop:  0
//loop:  1
//loop:  2
//loop:  3
//loop:  4

//the for loop?
//value - condition - final expression
//let i = 0; i &lt; 5; i++

//set the value of i = 0
//loop while i is less than 5
//after each loop i + 1
//when i = 5 finish loop
//return 4 because 5 is not less than 5


//most of the time you won't know the number of items in your source, ie. when accessing a database, so we find the total with .length
//for our example we will use a simple array

const names = ['peter', 'fred', 'john'];

for(let i = 0; i &lt; names.length; i++){
 console.log(names[i]);
//result:
//peter
//fred
//john

//create a html template to show the above results on a web page
let html = `&lt;div&gt;${names[i]}&lt;/div&gt;`;
 console.log(html);
//result:
//&lt;div&gt;peter&lt;/div&gt;
//&lt;div&gt;fred&lt;/div&gt;
//&lt;div&gt;john&lt;/div&gt;
}</code></pre>

<hr>
  </div>
</template>

<script>

export default {

  mounted() {
    Prism.highlightAll()
  }
}
</script>