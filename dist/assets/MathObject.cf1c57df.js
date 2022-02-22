import{_ as e}from"./index.d81d2172.js";import{o,c as t,a as n}from"./vendor.8c156a9e.js";const a={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},r=n("h3",{class:"page-title"},"Math Object",-1),c=n("blockquote",null,[n("p",null,"Unlike other objects, the Math object has no constructor. The Math object is static. All methods and properties can be used without creating a Math object first.")],-1),l=n("pre",null,[n("code",{class:"lang-js"},`console.log(Math.PI);
//answer: 3.141592653589793

console.log(Math.E);
//answer: 2.718281828459045
//The E property returns the Euler's number and the base of natural logarithms.

const area = 7.7;

console.log(Math.round(area));
//answer: 8
//nearest whole number
//if const area is 7.3 anwser: 7

console.log(Math.floor(area));
//answer: 7
//bottom whole number

console.log(Math.ceil(area));
//answer: 8
//top whole number

console.log(Math.trunc(area));
//answer: 7
//remove decimal place


//random numbers

const random = Math.random();

console.log(random);
//this answer: 0.5640304369763256
//different random answer with each refresh
//random between 0 and 1

console.log(Math.round(random * 100));
//this answer: 56
//different random answer with each refresh
//random between 1 and 100`)],-1),h=n("hr",null,null,-1),d=[r,c,l,h];function i(m,u,_,p,w,b){return o(),t("div",s,d)}var M=e(a,[["render",i]]);export{M as default};
