<template>

<div id="n" class="post-content">

<h3 class="page-title">Chaining Arrays</h3>
<blockquote>
 <p>First Filter, Second Map Filtered results</p>
</blockquote>
<pre><code class="lang-js">const products = [
 {name: 'gold star', price: 30},
 {name: 'green shell', price: 10},
 {name: 'red shell', price: 40},
 {name: 'banana skin', price: 5},
 {name: 'mushroom', price: 50}
];

//filter products greater than 20
const filtered = products.filter(product => product.price > 20);

const promos = filtered.map(product => {
return `the ${product.name} is ${product.price / 2} pounds`;
});

console.log(filtered);
//result:
//0 : {name: "gold star", price: 30}
//1: {name: "red shell", price: 40}
//2: {name: "mushroom", price: 50}

console.log(promos);
//result:
//0: "the gold star is 15 pounds"
//1: "the red shell is 20 pounds"
//2: "the mushroom is 25 pounds"

//write neater code
const promos = products
 .filter(product => product.price > 20)
 .map(product => `the ${product.name} is ${product.price / 2} pounds`);</code></pre>
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