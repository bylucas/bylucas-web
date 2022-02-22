import{_ as t}from"./index.d81d2172.js";import{o,c as n,a as e}from"./vendor.8c156a9e.js";const a={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},s=e("h3",{class:"page-title"},"Local Storage",-1),l=e("blockquote",null,[e("p",null,"store data in local storage")],-1),c=e("pre",null,[e("code",{class:"lang-js"},`localStorage.setItem('name', 'peter');
localStorage.setItem('age', '50');

//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);
//result - peter 50

//deleting data from local storage
localStorage.removeItem('name');

//clear all
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);
//null null

//Arrays
const todos = [
 {text: 'I see blue', author: 'blue'},
 {text: 'I see green', author: 'green'},
 {text: 'I see red', author: 'red'}
];

//Turn to json files stored as strings
console.log(JSON.stringify(todos));
//answer: [{"text":"I see blue","author":"blue"},{"text":"I see green","author":"green"},{"text":"I see red","author":"red"}]

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(stored);
//answer: [{"text":"I see blue","author":"blue"},{"text":"I see green","author":"green"},{"text":"I see red","author":"red"}]

//Parse the json file
console.log(JSON.parse(stored));
//answer:
//0: {text: "I see blue", author: "blue"}
//1: {text: "I see green", author: "green"}
//2: {text: "I see red", author: "red"}`)],-1),g=e("hr",null,null,-1),d=[s,l,c,g];function u(m,i,h,I,_,p){return o(),n("div",r,d)}var f=t(a,[["render",u]]);export{f as default};
