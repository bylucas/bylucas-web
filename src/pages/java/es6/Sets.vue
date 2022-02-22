<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Sets</h3>
<blockquote>
<p>No duplicates allowed</p>
</blockquote>
<pre><code class="lang-js">const namesArray = ['fred', 'peter', 'fred', 'len'];
console.log(namesArray);
//answer: ["fred", "peter", "fred", "len"] - normal array

//new Set
const namesSet = new Set(['fred', 'john', 'fred', 'michael']);
console.log(namesSet);
//answer: set(3) {"fred", "john", "michael"} //no duplicates
// or use const namesSet = new Set(namesArray);
//answer: set(3) {"fred", "peter", "len"} //no duplicates

//const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);
//answer: (3) ["fred", "john", "michael"] - 1st const uniqueNames
//answer: (3) ["fred", "peter", "len"] - 2nd const uniqueNames

//set methods - chainable
const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);//no dulicates
console.log(ages, ages.size);//.size like .length
//answer: {20, 25, 30} 3

//remove 30
ages.delete(30)
console.log(ages.has(30), ages.has(20));//.has - boolean
//answer: false true

//clear the set
ages.clear();
console.log(ages);
//answer: {}

const people = new Set([
 {name: 'fred', age: 30},
 {name: 'luc', age: 29},
 {name: 'martin', age: 32}
]);

people.forEach(person => {
 console.log(person.name, person.age);
});
//answer:
//fred 30
//luc 29
//martin 32</code></pre>
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