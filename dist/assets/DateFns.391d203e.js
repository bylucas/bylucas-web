import{_ as o}from"./index.d81d2172.js";import{o as n,c as s,m as t}from"./vendor.8c156a9e.js";const e={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},r=t(`<h3 class="page-title">Date Fns</h3><blockquote><p><strong>date-fns</strong> provides the most comprehensive, yet simple and consistent toolset for manipulating <strong>JavaScript dates</strong> in a <strong>browser</strong> &amp; <strong>Node.js</strong>.</p><p><strong>date-fns</strong> is like <a href="https://lodash.com/">lodash</a> for dates. It has <a href="https://date-fns.org/docs/">140+ functions</a> for all occasions.</p></blockquote><pre><code class="lang-js">const now = new Date();

console.log(dateFns.isToday(now));
//result - true

//formatting options
console.log(dateFns.format(now, &#39;YYYY&#39;));
//result - 2021
console.log(dateFns.format(now, &#39;MMMM&#39;));
//result - January
console.log(dateFns.format(now, &#39;dddd&#39;));
//result - Thursday
console.log(dateFns.format(now, &#39;Do&#39;));
//result - 7th
console.log(dateFns.format(now, &#39;dddd, Do MMMM, YYYY&#39;));
//result - Thursday, 7th January, 2021

//comparing dates
const before = new Date(&#39;February 1 2019 12:00:00&#39;);

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
//result - almost 2 years ago</code></pre><hr>`,4),d=[r];function c(l,i,p,f,g,u){return n(),s("div",a,d)}var _=o(e,[["render",c]]);export{_ as default};
