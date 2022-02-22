import{_ as n}from"./index.d81d2172.js";import{o,c as a,a as e}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},c={id:"n",class:"post-content"},l=e("h3",{class:"page-title"},"Variables and Block Scope",-1),t=e("blockquote",null,[e("p",null,"When a variable is defined in the script root it has a global scope. When a variable is defined in a code block it has a block scope. var ignores code blocks")],-1),i=e("pre",null,[e("code",{class:"lang-js"},`//root value
let age = 30;
var number = 20;

//new code block
if(true){
//re-define age
 let age = 40;
 let name = 'peter';
 //local values
 var number = 10;
  console.log('inside 1st code block: ', age, name);
//answer: inside 1st code block: 40 peter

//nested code block
if(true){
//re-define age again
 let age = 50;
  console.log('inside 2nd code block: ', age, name);
//answer: inside 2nd code block: 50 peter
//takes name value from parent code block still local value
 }
}

console.log('outside code block: ', age, name, number);
//answer: outside code block: 30 10
//no name value in the root script
//var was changed in the code block`)],-1),d=e("hr",null,null,-1),r=[l,t,i,d];function p(u,b,_,h,g,k){return o(),a("div",c,r)}var v=n(s,[["render",p]]);export{v as default};
