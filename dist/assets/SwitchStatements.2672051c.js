import{_ as e}from"./index.d81d2172.js";import{o as n,c as s,a as o}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},l=o("h3",{class:"page-title"},"Switch Statements",-1),c=o("blockquote",null,[o("p",null,"A switch statement is like a if statement giving the user options and breaking when the current option(condition) is true. Check web for more info and use aliens keys as example")],-1),i=o("pre",null,[o("code",{class:"lang-js"},`const grade = 'D';

switch(grade){
 case 'A':
  console.log('you got A!');
   break;
 case 'B':
  console.log('you got B!');
   break;
 case 'C':
  console.log('you got C!');
   break;
 case 'D':
  console.log('you got D!');
   break;
 case 'E':
  console.log('you got E!');
   break;
 default:
  console.log('not a valid grade');
}//answer: you got D!

using if statements
 if(grade === 'A'){
  console.log('you got A!');
 } else if(grade === 'B'){
  console.log('you got B!');
 } else if(grade === 'C'){
  console.log('you got C!');
 } else if(grade === 'D'){
  console.log('you got D!');
 } else if(grade === 'E'){
  console.log('you got E!');
 } else {
  console.log('not a valid grade');
 }//answer: you got D!`)],-1),r=o("hr",null,null,-1),g=[l,c,i,r];function d(u,_,h,f,p,m){return n(),s("div",a,g)}var b=e(t,[["render",d]]);export{b as default};
