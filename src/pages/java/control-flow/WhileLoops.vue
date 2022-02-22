<template>

<div id="n" class="post-content">

<h3 class="page-title">While Loops</h3> 
<blockquote>
 <p>while loops as the name implies loop while the condition is true.</p>
</blockquote>
<pre><code class="lang-js">//like the for loop, no semi-colon to end the code block

let i = 0;
//set the value outside the while loop code block

while(i &lt; 5){//set the condition
 //do something
 console.log('loop: ', i);
  i++;//final expression - without this the loop would be infinite
}
//result:
//loop: 0
//loop: 1
//loop: 2
//loop: 3
//loop: 4

//most of the time you won't know the number of items in your source, ie. when accessing a database, so we find the total with .length

const names = ['peter', 'fred', 'john', 'mel', 'frank', 'martin'];

//it dosen't have to be i
let a = 0;
while(a &lt; names.length){
console.log(names[a]);
  a++;
}
//result:
//peter
//fred
//john
//mel
//frank
//martin

//in this example i-- is i - 1
i = 8;
while(i > 5){
console.log('loop: ', i);
  i--;
}
//answer:
//loop: 8
//loop: 7
//loop: 6</code></pre>

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