<template>

<div id="n" class="post-content">

<h3 class="page-title">Fetch API</h3>
<blockquote>
 <p>A newer way of calling data, "fetch API", built into javascript much simpler and quicker.</p>
</blockquote>

<pre><code class="lang-js">//fetch API

fetch('json/blue.json').then(response => {
 console.log(response);
//answer: Response {type: "basic", url: "https://howardlucas.co.uk/json/blue.json", redirected: false, status: 200, ok: true, …}

 return response.json();
  }).then(data => {
  console.log(data);
//0: {text: "The color Blue", author: "Blue"}
//1: {text: "Blue Box", author: "Blue"}
//2: {text: "I see Blue", author: "Blue"}
  
  }).catch(err => {
  console.log(err);
//answer: if fetch('json/blueeee.json')... 
//Response {type: "basic", url: "https://howardlucas.co.uk/json/blueeee.json", redirected: false, status: 404, ok: false, …}
//SyntaxError: Unexpected token &lt; in JSON at position 0
});</code></pre>
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