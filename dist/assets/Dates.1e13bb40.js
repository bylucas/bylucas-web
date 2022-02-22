import{_ as n}from"./index.d81d2172.js";import{o,c as t,a as e}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},l={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Dates",-1),c=e("blockquote",null,[e("p",null,"to come")],-1),r=e("pre",null,[e("code",{class:"lang-js"},`const now = new Date();

console.log(now);
//result - Thu Jan 07 2021 15:05:14 GMT+0000 (Greenwich Mean Time)

console.log(typeof now);
//result - object

// years, months, days, times
console.log('getFullYear:', now.getFullYear());
//result - getFullYear: 2021

console.log('getMonth (0-based):', now.getMonth());
//result - getMonth (0-based): 0

console.log('getDate:', now.getDate());
//result - getDate: 7

console.log('getDay (0-based):', now.getDay());
//result - getDay (0-based): 4

console.log('getHours:', now.getHours());
//result - getHours: 15

console.log('getMinutes:', now.getMinutes());
//result - getMinutes: 5

console.log('getSeconds:', now.getSeconds());
//result - getSeconds: 14

// timestamps
console.log('timestamp:', now.getTime());
//result - timestamp: 1610031914135

// date strings
console.log(now.toDateString());
//result - Thu Jan 07 2021

console.log(now.toTimeString());
//result - 15:05:14 GMT+0000 (Greenwich Mean Time)

console.log(now.toLocaleString());
//result - 07/01/2021, 15:05:1`)],-1),g=e("hr",null,null,-1),i=[a,c,r,g];function u(d,m,_,h,p,w){return o(),t("div",l,i)}var f=n(s,[["render",u]]);export{f as default};
