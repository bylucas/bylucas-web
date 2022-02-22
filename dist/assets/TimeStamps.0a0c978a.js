import{_ as o}from"./index.d81d2172.js";import{o as n,c as s,a as e}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},r=e("h3",{class:"page-title"},"Timestamps",-1),c=e("blockquote",null,[e("p",null,"to come")],-1),l=e("pre",null,[e("code",{class:"lang-js"},`//const before = new Date('02/01/2019 7:30:59');
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

const diff = now.getTime() - before.getTime();
//const diff = now - before;

console.log(diff);
//result - 61028271900

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(\`the before date was \${mins} mins ago\`);
//result - the before date was 1017138 mins ago

console.log(\`the before date was \${hours} hours ago\`);
//result - the before date was 16952 hours ago

console.log(\`the before date was \${days} days ago\`);
//result - the before date was 706 days ago

// converting timestamps to dates
const timestamp = 1675938474990;
console.log(new Date(timestamp));
//result - Thu Feb 09 2023 10:27:54 GMT+0000 (Greenwich Mean Time)`)],-1),d=e("hr",null,null,-1),i=[r,c,l,d];function h(m,u,f,_,g,p){return n(),s("div",a,i)}var T=o(t,[["render",h]]);export{T as default};
