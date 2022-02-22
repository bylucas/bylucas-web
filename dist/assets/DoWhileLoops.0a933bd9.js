import{_ as o}from"./index.d81d2172.js";import{o as n,c as s,a as e}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},i={id:"n",class:"post-content"},l=e("h3",{class:"page-title"},"Do While Loops",-1),c=e("blockquote",null,[e("p",null,"Do while loops run the code once even if the condition is false. Then if true will carry on with the loop.")],-1),a=e("pre",null,[e("code",{class:"lang-js"},`//a semi-colon is needed at the end because the while is out of the "do" code block

let i = 5;

do{
console.log('val of i is: ', i);
  i++;
} while(i < 5);//note semi-colon
//result: val of i is: 5
//the code runs at least once even if the condition is false - in this example i = 5 is not less than 5 so is false

let x = 5;
do{
console.log('val of x is: ', x);
  x++;
} while(x < 8);
//result:
//val of x is: 5
//val of x is: 6
//val of x is: 7`)],-1),d=e("hr",null,null,-1),h=[l,c,a,d];function r(_,f,p,u,x,m){return n(),s("div",i,h)}var w=o(t,[["render",r]]);export{w as default};
