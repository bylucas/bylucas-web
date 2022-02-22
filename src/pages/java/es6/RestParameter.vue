<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Rest Parameters</h3>
<blockquote>
<p>Bundles into a single array</p>
</blockquote>
<pre><code class="lang-js">//if we don't know how many different parameters use rest parameter (...parameter)
const double = (...nums) => {
 console.log(nums);
//answer: [1, 3, 5, 7, 2, 4, 6, 8]
 return nums.map(num => num*2);//double the numbers - const result
};

const result = double(1,3,5,7,2,4,6,8);
console.log(result);
//answer: [2, 6, 10, 14, 4, 8, 12, 16]

//spread syntax (arrays)
//spread works opposite to rest parameter
//use to spread out the array into individual components
const people = ['fred', 'john', 'michael'];
const members = ['hugo', 'len', ...people];
console.log(members);
//answer: ["hugo", "len", "fred", "john", "michael"]

//spread syntax (objects)
const person = { name: 'fred', age: 30, job: 'baker' };
const personClone = { ...person, location: 'manchester' };
console.log(person, personClone);
//answer:
//{name: "fred", age: 30, job: "baker"}
//{name: "fred", age: 30, job: "baker", location: "manchester"}</code></pre>
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