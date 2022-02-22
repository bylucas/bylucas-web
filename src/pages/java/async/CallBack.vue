<template>

<div id="n" class="post-content">

<h3 class="page-title">Callback Function</h3>
<blockquote>
 <p>to come</p>
</blockquote>

<pre><code class="lang-js">const getTodos = (callback) => {

 const request = new XMLHttpRequest();

 request.addEventListener('readystatechange', () => {

 if(request.readyState === 4 && request.status === 200){
  callback(undefined, request.responseText);
  } else if (request.readyState === 4){
  callback('could not fetch the data', undefined);
  }
});
  
 request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
 request.send();

};

console.log(1);
console.log(2);

//callback function
//resolves after 'console.log(4);'
getTodos((err, data) => {
console.log('callback function fired');
 
 if(err){
 console.log(err);
 } else {
 console.log(data);
 }
});

console.log(3);
console.log(4);
//part answer:
//1
//2
//3
//4
//callback function fired
//[
// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// },...more data available</code></pre>
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