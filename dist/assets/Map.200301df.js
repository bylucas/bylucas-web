import{_ as n}from"./index.58a79006.js";import{o as s,c as r,a as e}from"./vendor.8c156a9e.js";const c={mounted(){Prism.highlightAll()}},t={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Map Method",-1),o=e("blockquote",null,[e("p",null,"Non destructive, creates a new array of updated values")],-1),i=e("pre",null,[e("code",{class:"lang-js"},`const prices = [20, 10, 30, 25, 15, 40, 80, 5];

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
//4: {name: "red shells", price: 25}`)],-1),l=e("hr",null,null,-1),p=[a,o,i,l];function d(u,m,h,_,g,f){return s(),r("div",t,p)}var P=n(c,[["render",d]]);export{P as default};
