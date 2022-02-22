import{_ as t}from"./index.d81d2172.js";import{o as a,c as s,a as e,d as n}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},l={id:"n",class:"post-content"},i=e("h3",{class:"page-title"},"Variables",-1),r=e("blockquote",null,[e("p",null,[n("A "),e("em",null,"variable"),n(" is a named storage for data. We can use variables to store data that can be recalled when needed.")])],-1),c=e("pre",null,[e("code",{class:"lang-js"},`const points = 100;
//using const will not allow the variable to be changed
//only use const if you know you will not need to change the variable

let age = 25;
//using let allows us to change the variable

age = 30;
//no need to add the let keyword when changing the same variable

var score = 25;
//this is the old type of variable but is still valid
//many developers still use var

//spaces are not allowed in variables
let myCount = 100; //this is ok
let my Count = 100; //this isn't ok

//variables can't start with a number
5mySpace = "100"; //this isn't allowed

//variables can't use keywords that are reserved for javascript
let const = 100; //this isn't allowed

//use camal-case to make variables clearer
let mySpace = 'big room'; //this works and looks neater
let myspace = 'big room'; //this also works
let MYSPACE = 'big room'; //and so does this

//comments
//single line comment
/*This is a
multi-line
block comment*/`)],-1),d=e("hr",null,null,-1),h=[i,r,c,d];function m(u,b,p,_,v,g){return a(),s("div",l,h)}var y=t(o,[["render",m]]);export{y as default};
