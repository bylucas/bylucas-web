import{_ as o}from"./index.58a79006.js";import{o as t,c as e,a as n}from"./vendor.8c156a9e.js";const r={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},a=n("h3",{class:"page-title"},"Arrow Functions",-1),c=n("blockquote",null,[n("p",null,"Arrow functions are in most cases a shorter, neater version of the regular function. It's not always better using arrow functions in place of regular functions.")],-1),l=n("pre",null,[n("code",{class:"lang-js"},`//regular function
const calcArea = function(radius){
 return 3.14 * radius**2;
};

//arrow function
//if only one parameter take away parenthasis
const calcArea = radius => {
 return 3.14 * radius**2;
};

//if no parameters we need parenthasis
const calcArea = () => {
 code block
};

//if more than one parameter we need parenthasis
const calcArea = (one, two) => {
 code block
};


//if there is only one return
//put on one line remove keyword 'return' and code block curly braces
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
 console.log('area is:', area);
//answer: 78.5


//regular function
const greet = function(){
 return 'hello, world';
}

//arrow function
const greet = () => 'hello, world';
 console.log(greet());
//answer: hello, world

//regular function
const bill = function(products, tax){
 let total = 0;
  for(let i = 0; i < products.length; i++){
   total += products[i] + products[i] * tax;
 }
 return total;
}

//arrow function not much shorter
const bill = (products, tax) => {
 let total = 0;
  for(let i = 0; i < products.length; i++){
   total += products[i]  + products[i] * tax;
 }
 return total;
}
console.log(bill([10,15,30], 0.2));
//answer: 66
//products 10 + 15 + 30 = 55 x tax 0.2 = 11 products 55 + tax 11 = 66

//multi parameters
//one return
const sum = (a,b,c) => a + b * c;

const sums = sum(2,3,4);

console.log(sums);
//answer: 14
//3 x 4 + 2 - B I D M A S - see numbers`)],-1),i=n("hr",null,null,-1),u=[a,c,l,i];function d(p,f,h,m,_,w){return t(),e("div",s,u)}var x=o(r,[["render",d]]);export{x as default};
