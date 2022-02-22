import{_ as e}from"./index.d81d2172.js";import{o as s,c as n,a as r}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},o={id:"n",class:"post-content"},a=r("h3",{class:"page-title"},"QuerySelectors",-1),l=r("blockquote",null,[r("p",null,"querySelctors retreave node lists"),r("p",null,"node lists are not arrays"),r("p",null,"you can use square bracket notation on node lists"),r("p",null,"you can do forEach on node lists")],-1),c=r("pre",null,[r("code",{class:"lang-html"},`//HTML
<p>this is the first 'p'</p>
<p>this is the second 'p'</p>
<p class="error"p>this is the third 'p' with class 'error'</p>
<div class="error">this is a 'div' with class 'error'</div>`)],-1),i=r("pre",null,[r("code",{class:"lang-js"},`//js
//calling the first p
const para = document.querySelector('p');

//calling the first error class
const para1 = document.querySelector('.error');

//calling a specific div with class error
const para2 = document.querySelector('div.error');

console.log(para, para1, para2);
//answer: <p>this is the first 'p'</p>
//answer: <p class="error">this is the third 'p' with class 'error'</p>
//answer: <div class="error">this is a 'div' with class 'error'</div>

//query multiple elements at once
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(paras, errors);
//answer:
//NodeList(4)[p, p, p.error, p]
//NodeList(2)[p.error, div.error]

//calling the second p and the first error class
//using square bracket notation
//remember javascript starts from 0
console.log(paras[1], errors[0]);
//answer:
//<p>this is the second 'p'</p>
//<p class="error">this is the third 'p' with class 'error'</p>`)],-1),p=r("hr",null,null,-1),d=[a,l,c,i,p];function h(u,_,m,f,v,g){return s(),n("div",o,d)}var q=e(t,[["render",h]]);export{q as default};
