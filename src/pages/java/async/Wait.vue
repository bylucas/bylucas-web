<template>

<div id="n" class="post-content">

<h3 class="page-title">Async and Await</h3>
<blockquote>
 <p>Not accepted in all browsers eg. Internet Explorer</p>
</blockquote>

<pre><code class="lang-js">const getTodos = async () => {

 let response = await fetch('json/blue.json');

 if(response.status !== 200){
 //new error
 throw new Error('cannot fetch the data');
  }

//parses json file
 let data = await response.json();
  return data;
};

getTodos()
 .then(data => console.log('resolved:', data))
//answer: resolved:
//0: {text: "The color Blue", author: "Blue"}
//1: {text: "Blue Box", author: "Blue"}
//2: {text: "I see Blue", author: "Blue"}
 
 .catch(err => console.log('rejected:', err.message));
//answer: if let response = await fetch('json/blueee.json');
//rejected: cannot fetch the data</code></pre>
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