import{_ as n}from"./index.58a79006.js";import{o as s,c as r,a as e}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},o={id:"n",class:"post-content"},c=e("h3",{class:"page-title"},"Filter Method",-1),i=e("blockquote",null,[e("p",null,"If true, keep in the array if false, filter it out")],-1),l=e("pre",null,[e("code",{class:"lang-js"},`//Non destructive
//Returns a new array with new variable
const scores = [10, 30, 15, 25, 50, 40, 5];

//only show scores greater than 20
const highScores = scores.filter(score => score > 20);

console.log(highScores);
//result: [30, 25, 50, 40]

//non-destructive
console.log(scores);
//result: [10, 30, 15, 25, 50, 40, 5]

const users = [
 {name: 'peter', premium: true},
 {name: 'james', premium: false},
 {name: 'rick', premium: false},
 {name: 'john', premium: true}
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);
//result:
//0: {name: "peter", premium: true}
//1: {name: "john", premium: true}`)],-1),a=e("hr",null,null,-1),u=[c,i,l,a];function m(p,h,_,d,f,g){return s(),r("div",o,u)}var k=n(t,[["render",m]]);export{k as default};
