<template>

<div id="n" class="post-content">

<h3 class="page-title">Local Storage</h3>
<blockquote>
 <p>store data in local storage</p>
</blockquote>
<pre><code class="lang-js">localStorage.setItem('name', 'peter');
localStorage.setItem('age', '50');

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);
//result - peter 50

//deleting data from local storage
localStorage.removeItem('name');

//clear all
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);
//null null

//Arrays
const todos = [
 {text: 'I see blue', author: 'blue'},
 {text: 'I see green', author: 'green'},
 {text: 'I see red', author: 'red'}
];

//Turn to json files stored as strings
console.log(JSON.stringify(todos));
//answer: [{"text":"I see blue","author":"blue"},{"text":"I see green","author":"green"},{"text":"I see red","author":"red"}]

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(stored);
//answer: [{"text":"I see blue","author":"blue"},{"text":"I see green","author":"green"},{"text":"I see red","author":"red"}]

//Parse the json file
console.log(JSON.parse(stored));
//answer:
//0: {text: "I see blue", author: "blue"}
//1: {text: "I see green", author: "green"}
//2: {text: "I see red", author: "red"}</code></pre>
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