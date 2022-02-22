import{_ as o}from"./index.d81d2172.js";import{o as n,c as s,a as e,d as t}from"./vendor.8c156a9e.js";const l={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Type Conversion",-1),u=e("blockquote",null,[e("p",null,[t("Most of the time, operators and functions automatically convert the values given to them to the right type. "),e("em",null,"Alert"),t(" automatically converts any value to a string to show it. "),e("em",null,"Mathematical operations"),t(" convert values to numbers.")]),e("p",null,"There are also cases when we need to explicitly convert a value to the expected type.")],-1),c=e("pre",null,[e("code",{class:"lang-js"},`let score = '100';

console.log(score + 1);
//result: 1001
//This is not what we want

console.log(typeof score);
//result: string

//convert to a number
score = Number(score);

console.log(score + 1);
//result: 101
//Thats better

console.log(typeof score);
//result: number

let result = Number('hello');

console.log(result, typeof result);
//result: NaN "number"

let result2 = String(50);

console.log(result2, typeof result2);
//result: 50 string

let result3 = Boolean(100);

console.log(result3, typeof result3);
//result: true "boolean"

let result4 = Boolean(0);

console.log(result4, typeof result4);
//result: false "boolean"
//A boolean set to 0 is false

let result5 = Boolean('0');

console.log(result5, typeof result5);
//result: true "boolean"
//boolean set to a string is true

let result6 = Boolean('');
console.log(result6, typeof result6);
//result: false "boolean"
//boolean set to a string with no value is false`)],-1),i=[a,u,c];function p(h,d,g,f,m,_){return n(),s("div",r,i)}var b=o(l,[["render",p]]);export{b as default};
