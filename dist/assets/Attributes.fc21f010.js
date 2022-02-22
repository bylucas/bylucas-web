import{_ as t}from"./index.d81d2172.js";import{o as n,c as s,a as e}from"./vendor.8c156a9e.js";const i={mounted(){Prism.highlightAll()}},l={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Attributes",-1),c=e("blockquote",null,[e("p",null,"'getAttribute' and 'setAttribute' are methods hence ()"),e("p",null,"Attribute includes 'a', 'class', 'href' etc"),e("p",null,"if an attribute dosen't exit javascript will create it"),e("p",null,"setAttriute over-writes the existing attribute"),e("p",null,"'innerTEXT' gets all visible text"),e("p",null,"'textContent' gets all text including any hidden text")],-1),o=e("pre",null,[e("code",{class:"lang-js"},`//HTML
<a href="https://website.com">This link will change</a>
<h3 class="changeme">This is a h3 heading with class changeme</h3>

//js
const link = document.querySelector('a');

//html will change from this
//answer: <a href="https://website.com">This link will change</a>

link.setAttribute('href', 'https://phone1st.org');
//'textContent' gets all text including any hidden text
link.textContent = 'The Phone1st website';

//inspect elements
//changed html
//answer: <a href="https://phone1st.org">The Phone1st website</a>

const mssg = document.querySelector('h3');

console.log(mssg.getAttribute('class'));
//answer: changeme

//html will change from this
//<h3 class="changeme">This is a h3 heading with class changeme</h3>

mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green');

//inspect elements
//setAttriute over-writes the existing attribute
//the class 'changeme' has been replaced with 'success'
//if an attribute dosen't exit javascript will create it
//the style 'color' dosn't exist so javascript creates it
//answer: <h3 class="success" style="color: green">This is a h3 heading with class changeme</h3>

//multiple styles
//HTML
<h4>This is a h4 heading</h4>

//js
const title = document.querySelector('h4');

//we've been using the longer version
title.setAttribute('style', 'margin: 150px; font-size: 60px; color: crimson;');
//inspect elements
//answer: <h4 style="margin: 150px; font-size: 60px; color: crimson;">This is a h4 heading</h4>

//shorter version
//if the css style uses '-' eg 'font-size' use camel-case eg fontSize
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';//remove style
//inspect elements
//answer: <h4 style="color: crimson; font-size: 60px;">This is a h4 heading</h4>`)],-1),h=e("hr",null,null,-1),r=[a,c,o,h];function g(u,m,d,p,x,f){return n(),s("div",l,r)}var _=t(i,[["render",g]]);export{_ as default};
