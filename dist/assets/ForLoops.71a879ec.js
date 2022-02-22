import{_ as e}from"./index.58a79006.js";import{o as n,c as t,a as o}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},l={id:"n",class:"post-content"},i=o("h3",{class:"page-title"},"For Loops",-1),a=o("blockquote",null,[o("p",null,"For loops are one of the many different types of loop in javascript")],-1),r=o("pre",null,[o("code",{class:"lang-js"},`//for loops don't need a semi-colon to end code blocks

for(let i = 0; i < 5; i++){
 console.log('loop: ', i);
}
//result:
//loop:  0
//loop:  1
//loop:  2
//loop:  3
//loop:  4

//the for loop?
//value - condition - final expression
//let i = 0; i < 5; i++

//set the value of i = 0
//loop while i is less than 5
//after each loop i + 1
//when i = 5 finish loop
//return 4 because 5 is not less than 5


//most of the time you won't know the number of items in your source, ie. when accessing a database, so we find the total with .length
//for our example we will use a simple array

const names = ['peter', 'fred', 'john'];

for(let i = 0; i < names.length; i++){
 console.log(names[i]);
//result:
//peter
//fred
//john

//create a html template to show the above results on a web page
let html = \`<div>\${names[i]}</div>\`;
 console.log(html);
//result:
//<div>peter</div>
//<div>fred</div>
//<div>john</div>
}`)],-1),c=o("hr",null,null,-1),p=[i,a,r,c];function d(h,f,u,m,_,v){return n(),t("div",l,p)}var b=e(s,[["render",d]]);export{b as default};
