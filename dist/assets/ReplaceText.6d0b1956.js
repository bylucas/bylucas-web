import{_ as e}from"./index.d81d2172.js";import{o as t,c as s,a as n}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},i=n("h3",{class:"page-title"},"Replacing Text",-1),h=n("blockquote",null,[n("p",null,"grabbing the document elements with 'querySelector', getElementById, getElementsByClassName or getElementsByTagName are all done with methods"),n("p",null,"'innerText' and 'innerHTML' are properties")],-1),a=n("pre",null,[n("code",{class:"lang-html"},`//HTML
<p>This is the first 'p'</p>
<p>This is the second 'p'</p>
<p class="error">This is the third 'p'</p>
<div class="story">
 <p>this is the story 'p'</p>
</div>`)],-1),l=n("pre",null,[n("code",{class:"lang-js"},`//js
const text = document.querySelector('p');

//'innerText' is a property
console.log(text.innerText);
//answer: This is the first 'p'

//replace the text
text.innerText = 'This is some new text';

console.log(text.innerText);
//answer: This is some new text

//using forEach to change all paragraph text
const texts = document.querySelectorAll('p');

texts.forEach(p => {
 console.log(p.innerText);
//answer:
//This is the first 'p'
//This is the second 'p'
//This is the third 'p'
//this is the story 'p'

p.innerText = 'new text!';

 console.log(p.innerText);
//answer:
//new text!
//new text!
//new text!
//new text!
});

const story = document.querySelector('.story');

//'innerHTML' is a property
console.log(story.innerHTML);
//answer: <p>this is the story 'p'</p>

//replace the innerHTML
story.innerHTML = '<h2>this is a new h2</h2>';

console.log(story.innerHTML);
//answer: <h2>this is a new h2</h2>

//add to the innerHTML
story.innerHTML += '<h4>this is a h4 added to the story</h4>';

console.log(story.innerHTML);
//anwser:
//<h2>this is a new h2</h2>
//<h4>this is a h4 added to the story</h4>

//querying a database (array in this case) and add [+=] the results to the 'div' class 'story'
const people = ['frank', 'joseph', 'mary'];

people.forEach(person => {
  story.innerHTML += \`<p>\${person}</p>\`;
});
console.log(story.innerHTML);
//answer:
//<h2>this is a new h2</h2>
//<h4>this is a h4 added to the story</h4>
//<p>frank</p>
//<p>joseph</p>
//<p>mary</p>`)],-1),p=n("hr",null,null,-1),c=[i,h,a,l,p];function d(T,y,x,g,m,u){return t(),s("div",r,c)}var f=e(o,[["render",d]]);export{f as default};
