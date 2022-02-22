<template>

<div id="n" class="post-content">

<h3 class="page-title">Local Data</h3>
<blockquote>
 <p>to come</p>
</blockquote>

<pre><code class="lang-json">//Local Data
todos.json
[
 {"text": "I see Green", "author": "Green"},
 {"text": "I see Blue", "author": "Blue"},
 {"text": "I see Red", "author": "Red"}
]</code></pre>

<pre><code class="lang-js">//calling local data
//json is strings
//json must be in double quotes("")
//numbers and booleans don't have quotes

 const getTodos = (callback) => {

 const request = new XMLHttpRequest();

 request.addEventListener('readystatechange', () => {

 if(request.readyState === 4 && request.status === 200){
 //parse the json strings into javascript objects
  const data = JSON.parse(request.responseText);
 //error undefined
   callback(undefined, data);
   } else if (request.readyState === 4){
//data undefined
   callback('could not fetch the data', undefined);
   }
 });
  
request.open('GET', 'todos.json');
request.send();
};

getTodos((err, data) => {
 console.log('callback function fired');
  if(err){
  console.log(err);
 } else {
  console.log(data);
 }
});
//err: callback function fired
//could not fetch the data

//data:
//0: {text: "I see Green", author: "Green"}
//1: {text: "I see Blue", author: "Blue"}
//2: {text: "I see Red", author: "Red"}</code></pre>

<pre><code class="lang-json">//Local Data
json/blue.json
[
 {"text": "The color Blue", "author": "Blue"},
 {"text": "Blue Box", "author": "Blue"},
 {"text": "I see Blue", "author": "Blue"}
]

json/green.json
[
 {"text": "The color Green", "author": "Green"},
 {"text": "Green Box", "author": "Green"},
 {"text": "I see Green", "author": "Green"}
]

json/red.json
[
 {"text": "The color Red", "author": "Red"},
 {"text": "Red Box", "author": "Red"},
 {"text": "I see Red", "author": "Red"}
]</code></pre>

<pre><code class="lang-js">//Too many callbacks

const getTodos = (resource, callback) => {

const request = new XMLHttpRequest();

 request.addEventListener('readystatechange', () => {

 if(request.readyState === 4 && request.status === 200){
  const data = JSON.parse(request.responseText);
   callback(undefined, data);
  } else if (request.readyState === 4){
   callback('could not fetch the data', undefined);
  }
});
  
request.open('GET', resource);
request.send();
};

//To many callbacks
//after one getTodos returns data, request another, then another

getTodos('json/blue.json', (err, data) => {
 console.log(data);
//answer:
//0: {text: "The color Blue", author: "Blue"}
//1: {text: "Blue Box", author: "Blue"}
//2: {text: "I see Blue", author: "Blue"}
  getTodos('json/green.json', (err, data) => {
  console.log(data);
//answer:
//0: {text: "The color Green", author: "Green"}
//1: {text: "Green Box", author: "Green"}
//2: {text: "I see Green", author: "Green"}
   getTodos('json/red.json', (err, data) => {
   console.log(data);
//answer:
//0: {text: "The color Red", author: "Red"}
//1: {text: "Red Box", author: "Red"}
//2: {text: "I see Red", author: "Red"}
  });
 });
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