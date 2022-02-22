import{_ as o}from"./index.d81d2172.js";import{o as n,c as t,a as e}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},i=e("h3",{class:"page-title"},"If Statements",-1),l=e("blockquote",null,[e("p",null,"If statements are Conditional statements, if a condition is true then do something. Unlike the loops we don't check a condition over and over, the conditon is checked once and acted upon if the conditon is true.")],-1),c=e("pre",null,[e("code",{class:"lang-js"},`const age = 25;

//if the condition is true then
if(age > 20){
//do something
console.log('you are over 20 years old');
}
//answer: you are over 20 years old 

const people = ['michael', 'fred', 'john', 'walter'];

if(people.length > 3){
console.log("that's a lot of people!");
//use double quotes if apostrophe in the text
}
//answer: that's a lot of people!

const password = 'p@ssword';

//if > or = 8
if(password.length >= 8){
console.log('that password is long enough');
}
//answer: that password is long enough`)],-1),r=e("hr",null,null,-1),d=[i,l,c,r];function h(p,u,f,_,g,m){return n(),t("div",a,d)}var k=o(s,[["render",h]]);export{k as default};
