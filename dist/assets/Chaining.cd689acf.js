import{_ as n}from"./index.58a79006.js";import{o,c as r,a as e}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},c=e("h3",{class:"page-title"},"Chaining Arrays",-1),i=e("blockquote",null,[e("p",null,"First Filter, Second Map Filtered results")],-1),p=e("pre",null,[e("code",{class:"lang-js"},`const products = [
 {name: 'gold star', price: 30},
 {name: 'green shell', price: 10},
 {name: 'red shell', price: 40},
 {name: 'banana skin', price: 5},
 {name: 'mushroom', price: 50}
];

//filter products greater than 20
const filtered = products.filter(product => product.price > 20);

const promos = filtered.map(product => {
return \`the \${product.name} is \${product.price / 2} pounds\`;
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
 .map(product => \`the \${product.name} is \${product.price / 2} pounds\`);`)],-1),l=e("hr",null,null,-1),d=[c,i,p,l];function a(u,m,h,_,f,g){return o(),r("div",s,d)}var x=n(t,[["render",a]]);export{x as default};
