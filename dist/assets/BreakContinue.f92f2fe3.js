import{_ as e}from"./index.d81d2172.js";import{o as n,c as t,a as o}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},c=o("h3",{class:"page-title"},"Break and Continue",-1),a=o("blockquote",null,[o("p",null,"check the web give another example")],-1),i=o("pre",null,[o("code",{class:"lang-js"},`//Back to loops - in this case we loop through the array but we don't want to show a score of 0 in the console.log so it is skipped and continue with the array but we don't show the 0
const scores = [50, 25, 0, 30, 100, 20, 10];

 for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
   continue;
 }

console.log('your score:', scores[i]);
//answer:
//your score: 50
//your score: 25
//your score: 30
//your score: 100

//when we reach 100 the conditon is true so we don't need to go any further (break) and show the result.
    
 if (scores[i] === 100) {
console.log('congrats, you got the top score!');
//answer: congrats, you got the top score! 
  break;
 }
}`)],-1),l=o("hr",null,null,-1),h=[c,a,i,l];function d(u,_,p,g,w,f){return n(),t("div",r,h)}var m=e(s,[["render",d]]);export{m as default};
