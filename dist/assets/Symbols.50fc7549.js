import{_ as e}from"./index.58a79006.js";import{o,c as s,a as n}from"./vendor.8c156a9e.js";const l={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},r=n("h3",{class:"page-title"},"Symbols",-1),t=n("blockquote",null,[n("p",null,"Completely unique - primative type")],-1),c=n("pre",null,[n("code",{class:"lang-js"},`const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
//answer: Symbol(a generic name) "symbol"
console.log(symbolOne === symbolTwo);
//answer: false

const person = {};

person.age = 30;
person['belt'] = 'black';//overwrites can only have one belt property
person['belt'] = 'orange';

person[symbolOne] = 'john';
person[symbolTwo] = 'frank';

console.log(person);
//answer: {age: 30, belt: "orange", Symbol(a generic name): "john", Symbol(a generic name): "frank"}

console.log(person[symbolOne], person[symbolTwo]);
//answer: john frank`)],-1),m=n("hr",null,null,-1),p=[r,t,c,m];function i(b,y,_,d,g,h){return o(),s("div",a,p)}var w=e(l,[["render",i]]);export{w as default};
