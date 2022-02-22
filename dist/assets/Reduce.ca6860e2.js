import{_ as r}from"./index.d81d2172.js";import{o as n,c,a as e}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},o={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Reduce Method",-1),t=e("blockquote",null,[e("p",null,"Doesn't necessarily return a new array")],-1),l=e("pre",null,[e("code",{class:"lang-js"},`//Returns the values
//acc = accumalate - optional name
//curr = current - optional name

const scores = [10, 20, 60, 40, 70, 90, 30];

const result = scores.reduce((acc, curr) => {
 if(curr > 50){
  acc++;
 }
  return acc;
 }, 0);

console.log(result);
//result: 3 - 3 scores over 50

const scores = [
  {player: 'james', score: 50},
  {player: 'mary', score: 30},
  {player: 'hugo', score: 70},
  {player: 'mary', score: 60},
  {player: 'james', score: 50},
  {player: 'mary', score: 40},
  {player: 'hugo', score: 70},
  {player: 'mary', score: 10}
];

const maryTotal = scores.reduce((acc, curr) => {
  if(curr.player === 'mary'){
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(maryTotal);
//result: 140 - mary score 30 + 60 + 40 + 10`)],-1),u=e("hr",null,null,-1),d=[a,t,l,u];function p(i,m,_,y,h,f){return n(),c("div",o,d)}var v=r(s,[["render",p]]);export{v as default};
