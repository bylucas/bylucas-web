import{_ as e}from"./index.d81d2172.js";import{o,c as n,m as s}from"./vendor.8c156a9e.js";const r={mounted(){Prism.highlightAll()}},t={id:"n",class:"post-content"},a=s(`<h3 class="page-title">Primative and Reference Values</h3><blockquote><p>Primitive and Reference values are stored in memory. Primitive values are stored on the <em>Stack</em> and Reference values are stored on the <em>Heap</em>. <strong>Primitive</strong> types include <em>numbers, strings, Booleans, null, undefined</em> and <em>symbols</em>. <strong>Reference</strong> types include <em>all types of objects, object literals, arrays, functions, dates</em> and <em>all other objects</em></p></blockquote><pre><code class="lang-js">//primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(\`scoreOne: \${scoreOne}\`, \`scoreTwo: \${scoreTwo}\`);
//answer: scoreOne: 50 scoreTwo: 50

scoreOne = 100;
console.log(\`scoreOne: \${scoreOne}\`, \`scoreTwo: \${scoreTwo}\`);
//answer: scoreOne: 100 scoreTwo: 50


//reference values
userOne = { name: &#39;mike&#39;, age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);
//answer: {name: &quot;mike&quot;, age: 30} {name: &quot;mike&quot;, age: 30}

userOne.name = &#39;peter&#39;;
console.log(userOne, userTwo);
//answer: {name: &quot;peter&quot;, age: 30} {name: &quot;peter&quot;, age: 30}</code></pre><hr>`,4),c=[a];function i(l,m,u,d,p,g){return o(),n("div",t,c)}var v=e(r,[["render",i]]);export{v as default};
