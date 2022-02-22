import{_ as e}from"./index.d81d2172.js";import{o as t,c as l,a as n}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},a=n("h3",{class:"page-title"},"Null and Undefined",-1),u=n("blockquote",null,[n("p",null,"Setting a value of null is intentionally leaving the value undefined whereas a variable that has no value is set to undefined by the browser.")],-1),i=n("pre",null,[n("code",{class:"lang-js"},`//null and undefined are primitive values in JavaScript
//a null or undefined value evalutes to false in conditional expression

//a null value means absence

let count = null;
//intentionally setting no value

console.log(count, count + 3, \`the sum is \${count}\`);
//result: null 3 "the sum is null"
//count is null
//no value + 3 = 3
//\${count} is null


//an undefined value means lack of value

let counter
//awaiting a value
//browser sets count to undefined

console.log(counter, counter + 3, \`the sum is \${counter}\`);
//result: undefined NaN "the sum is undefined"`)],-1),c=n("hr",null,null,-1),d=[a,u,i,c];function r(h,_,f,v,p,m){return t(),l("div",s,d)}var b=e(o,[["render",r]]);export{b as default};
