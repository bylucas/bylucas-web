import{_ as n}from"./index.58a79006.js";import{o,c as s,a as e}from"./vendor.8c156a9e.js";const a={mounted(){Prism.highlightAll()}},l={id:"n",class:"post-content"},r=e("h3",{class:"page-title"},"Booleans and Comparisons",-1),t=e("blockquote",null,[e("p",null,"How booleans and comparisons work - true or false.")],-1),c=e("pre",null,[e("code",{class:"lang-js"},`//methods can return booleans
let email = 'michael@michaelcain.co.uk';
let names = ['michael', 'fred', 'john'];

let result = email.includes('@');
console.log(result);
//answer: true

let result2 = names.includes('fred');
console.log(result2);
//answer: true


//comparison operators
let age = 25;

console.log('1', age == 25);
//answer: true

console.log('2', age == 30);
//answer: false

console.log('3', age != 30);
//answer: true

console.log('4', age > 20);
//answer: true

console.log('5', age < 20);
//answer: false

console.log('6', age <= 25);
//answer: true

console.log('7', age >= 25);
//answer: true


let name = 'peter';

console.log('8', name == 'peter');
//answer: true

console.log('9', name == 'Peter');
//answer: false

//p comes after c
console.log('10', name > 'claire');
//answer: true

//lowercase is greater than uppercase
console.log('11', name > 'Peter');
//answer: true

console.log('12', name > 'Claire');
//answer: true`)],-1),i=e("hr",null,null,-1),u=[r,t,c,i];function g(m,d,p,_,h,w){return o(),s("div",l,u)}var B=n(a,[["render",g]]);export{B as default};
