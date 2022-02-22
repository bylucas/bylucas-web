<template>

<div id="n" class="post-content">

<h3 class="page-title">Map Method</h3>
<blockquote>
 <p>Non destructive, creates a new array of updated values</p>
</blockquote>
<pre><code class="lang-js">const prices = [20, 10, 30, 25, 15, 40, 80, 5];

//new array with half price values
const salePrices = prices.map(price => price / 2);

console.log(salePrices);
//result: [10, 5, 15, 12.5, 7.5, 20, 40, 2.5]

const products = [
 {name: 'gold star', price: 20},
 {name: 'mushroom', price: 40},
 {name: 'green shells', price: 30},
 {name: 'banana skin', price: 10},
 {name: 'red shells', price: 50}
];

//if the price is greater than 30
//return products with half the price
const saleProducts = products.map(product => {
 if(product.price > 30){
  return {name: product.name, price: product.price / 2}
 } else {
  return product;
 }
});

//non-destructive
console.log(products, saleProducts);
//result: products
//0: {name: "gold star", price: 20}
//1: {name: "mushroom", price: 40}
//2: {name: "green shells", price: 30}
//3: {name: "banana skin", price: 10}
//4: {name: "red shells", price: 50}

//result: salesProducts
//0: {name: "gold star", price: 20}
//1: {name: "mushroom", price: 20}
//2: {name: "green shells", price: 30}
//3: {name: "banana skin", price: 10}
//4: {name: "red shells", price: 25}</code></pre>
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