import{_ as n}from"./index.58a79006.js";import{o as t,c as l,a as e}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},o=e("h3",{class:"page-title"},"Strings",-1),i=e("blockquote",null,[e("p",null,"Strings are used for storing letters, numbers or other characters even spaces.")],-1),c=e("pre",null,[e("code",{class:"lang-js"},`//you can use single or double quotes
//mix and match the quotes as long as the inside doesn't match the outside
let okay = "it's alright";
let him = "they call him 'Fred'";
let me = 'they call me "Fred"';

console.log(okay, him, me)
//result: it's alright they call him 'Fred' they call me "Fred"

//string concatenation (join together)
let firstName = 'Michael';
let lastName = 'Cain';
let fullName = firstName + ' ' + lastName;
//fullName = firstName space lastName

console.log(fullName);
//result: Michael Cain

console.log('My name is ' + fullName);
//result: My name is Michael Cain

//getting individual characters
//fullName = Michael Cain
console.log(fullName[2]);
//result: c
//javascript starts counting from 0 ie. M=0, i=1, c=2

//fullName = Michael Cain
console.log(fullName[8]);
//result: C
//spaces are included in the count

//string length
//fullName = Michael Cain
console.log(fullName.length);
//result: 12
//counting starts at 1 and includes spaces`)],-1),r=e("hr",null,null,-1),u=[o,i,c,r];function h(m,d,g,f,_,p){return t(),l("div",a,u)}var M=n(s,[["render",h]]);export{M as default};
