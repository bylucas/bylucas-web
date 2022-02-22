import{_ as e}from"./index.d81d2172.js";import{o as n,c as t,a as s}from"./vendor.8c156a9e.js";const r={mounted(){Prism.highlightAll()}},o={id:"n",class:"post-content"},c=s("h3",{class:"page-title"},"Classes",-1),l=s("blockquote",null,[s("p",null,"Add, remove classes")],-1),i=s("pre",null,[s("code",{class:"lang-html"},`//HTML
<p>This is success</p>
<p>This another success</p>
<p>This is completely different text</p>
<p>This is error</p>
<p>This is another error</p>`)],-1),a=s("pre",null,[s("code",{class:"lang-js"},`//js
const content = document.querySelector('.box p');

//adds class 'error' to first 'p'
content.classList.add('error');
//answer: <p class="error">This is success</p>

//removes the class 'error' only on the first 'p'
content.classList.remove('error');
//answer: <p>This is success</p>

//grab all the 'p' elements
const story = document.querySelectorAll('.box p');

story.forEach(p => {
 if(p.textContent.includes('error')){
  p.classList.add('error');
   } else if(p.textContent.includes('success')) {
  p.classList.add('success');
 }

//inspect elements
//answer:
//<p class="success">This is success</p>
//<p class="success">This another success</p>
//<p>This is completely different text</p>
//<p class="error">This is error</p>
//<p class="error">This is another error</p>
});`)],-1),p=s("hr",null,null,-1),d=[c,l,i,a,p];function h(u,_,m,f,T,x){return n(),t("div",o,d)}var v=e(r,[["render",h]]);export{v as default};
