import{_ as n}from"./index.58a79006.js";import{o as t,c as l,a as e}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},o={id:"n",class:"post-content"},i=e("h3",{class:"page-title"},"Common String Methods",-1),r=e("blockquote",null,[e("p",null," String methods are just functions that belong to a specific object or object type. ")],-1),c=e("pre",null,[e("code",{class:"lang-js"},`let fullName = 'Michael Cain';

console.log(fullName.toUpperCase());
//result: MICHAEL CAIN

let result = fullName.toLocaleLowerCase();
console.log(result);
//result: michael cain


let email = 'mike@home.co.uk';

//indexOf() - starts count at 0
let index = email.indexOf('@');
console.log('index of the @ sign is', index);
//result: index of the @ sign is 4

//lastIndexOf()
let result2 = email.lastIndexOf('m');
console.log(result2);
//result: 7

//'mike@home.co.uk'
//slice()
//count the first parameter from the beginning
//count the second parameter from the beginning 
let result3 = email.slice(0,5);
console.log(result3);
//result: mike@

//slice includes 012/ 34567 /8
let result4 = email.slice(3,8);
console.log(result4);
//result: e@hom

//'mike@home.co.uk'
//If you omit the second parameter, the method will slice out the rest of the string
let result5 = email.slice(6);
console.log(result5);
//result: ome.co.uk

//negative numbers count from the end
let result6 = email.slice(-8);
console.log(result6);
//result: me.co.uk

let result7 = email.slice(-9,-3);
console.log(result7);
//result: ome.co


//'mike@home.co.uk'
//substring() are similar to slice() but they cannot except negative indexes
//slice includes 0123/ 45678 /9
let result8 = email.substring(3,9);
console.log(result8);
//result: e@home


//substr() - starts from 3 + 9
//includes 012/ 312345678/ 9
let result9 = email.substr(3,9);
console.log(result9);
//result: e@home.co


//'mike@home.co.uk'
//replace()
let result10 = email.replace('m', 'w');
console.log(result10);
//result: wike@home.co.uk
//replaces the first instance

let result11 = email.replace('e', 'w');
console.log(result11);
//result: mikw@home.co.uk
//only replaces first instance of multi instances


//the trim() method removes whitespace from both sides of a string
let text = "  This is untidy    "
let result12 = text.trim()
console.log(result12)
//result: This is untidy`)],-1),u=e("hr",null,null,-1),a=[i,r,c,u];function m(h,d,g,f,p,_){return t(),l("div",o,a)}var b=n(s,[["render",m]]);export{b as default};
