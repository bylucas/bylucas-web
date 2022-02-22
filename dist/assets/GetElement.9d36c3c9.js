import{_ as t}from"./index.58a79006.js";import{o as s,c as n,a as e}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},l=e("h3",{class:"page-title"},"GetElementBy...",-1),a=e("blockquote",null,[e("p",null,"get element selectors retreave html collections"),e("p",null,"get element selectors use square bracket notation"),e("p",null,"you cannot do a forEach on html collections")],-1),c=e("pre",null,[e("code",{class:"lang-html"},`//HTML
<h1 id="title">This a 'h1' with id of 'title'</h1>
<p>This is the first 'p'</p>
<p class="error">This is a 'p' with class 'error'</p>
<div class="error">This is a 'div' with class 'error'</div>`)],-1),i=e("pre",null,[e("code",{class:"lang-js"},`//js
//get elements by #id
//this one is getElement the others are getElements
const title = document.getElementById('page-title');
console.log(title);
//answer: h1#page-title

//get elements by class name
const errors = document.getElementsByClassName('error');
console.log(errors);
//answer: HTMLCollection(2)[p.error, div.error]

//get the first instance of class 'error'
console.log(errors[0]);
//anwswer: p.error

//get elements by tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
//answer: HTMLCollection(4)[p, p, p.error, p]

//select the second 'p' using square bracket notation
console.log(paras[1]);
//answer: p - innerHTML: "This is a 'p' with class 'error'"`)],-1),p=e("hr",null,null,-1),h=[l,a,c,i,p];function d(m,g,_,u,f,w){return s(),n("div",r,h)}var v=t(o,[["render",d]]);export{v as default};
