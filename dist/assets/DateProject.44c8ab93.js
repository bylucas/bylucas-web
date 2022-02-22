import{_ as o}from"./index.d81d2172.js";import{o as s,c as t,a as n}from"./vendor.8c156a9e.js";const e={mounted(){Prism.highlightAll()}},c={id:"n",class:"post-content"},l=n("h3",{class:"page-title"},"Date Project",-1),a=n("blockquote",null,[n("p",null,"to come")],-1),d=n("pre",null,[n("code",{class:"lang-html"},`
<h2>Clock</h2>
 <div class="clock"></div>`)],-1),i=n("pre",null,[n("code",{class:"lang-js"},`const clock = document.querySelector('.clock');

const tick = () => {

const now = new Date();
  
const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();

const html = \`
 <span>\${h}</span>:
 <span>\${m}</span>:
 <span>\${s}</span>
  \`;

  clock.innerHTML = html;
};

setInterval(tick, 1000);`)],-1),r=n("pre",null,[n("code",{class:"lang-scss"},`//scss
.clock{
 font-size: 2em;
 text-align: center;
 margin: 50px auto 50px auto;
 color: yellow;
 font-family: arial;
 background: #333;
 @include padding($spacer null);

  span{
   padding: 15px;
   background: #444;
  }
 }

@include media(700) {
 .clock{
 font-size: 4em;
 
 span{
  padding: 20px;
  }
 }
}`)],-1),p=n("hr",null,null,-1),_=[l,a,d,i,r,p];function u(h,m,g,k,f,x){return s(),t("div",c,_)}var w=o(e,[["render",u]]);export{w as default};
