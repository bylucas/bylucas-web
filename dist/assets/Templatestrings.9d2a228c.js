import{_ as t}from"./index.58a79006.js";import{o as l,c as s,a as e}from"./vendor.8c156a9e.js";const n={mounted(){Prism.highlightAll()}},o={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Template Strings",-1),i=e("blockquote",null,[e("p",null,"Concatenation (join together) or Template string? Below shows examples of both. Both are correct it's your choice which you prefer.")],-1),r=e("pre",null,[e("code",{class:"lang-js"},`const title = 'Practical Fly Fishing';
const author = 'J R Harpur';
const likes = 30;

//concatenation way

let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

console.log(result);
//result: The blog called Practical Fly Fishing by J R Harpur has 30 likes


//template string way(\`\`)

let result2 = \`The blog called \${title} by \${author} has \${likes} likes\`;
console.log(result2);
//result: The blog called Practical Fly Fishing by J R Harpur has 30 likes

//creating html templates
let html = \`
 <h2>\${title}</h2>
 <h3>By \${author}</h3>
 <p>This blog has \${likes} likes</p>
\`;

console.log(html);
//result:
//<h2>Practical Fly Fishing</h2>
//<h3>By J R Harpur</h3>
//<p>This blog has 30 likes</p>`)],-1),c=e("hr",null,null,-1),h=[a,i,r,c];function p(u,g,d,_,m,y){return l(),s("div",o,h)}var $=t(n,[["render",p]]);export{$ as default};
