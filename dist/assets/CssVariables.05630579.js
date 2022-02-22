import{_ as e}from"./index.58a79006.js";import{o,c as s,a as n}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},a=n("h3",{class:"page-title"},"Variables",-1),i=n("blockquote",null,[n("p",null,"CSS stands for Cascading Style Sheets")],-1),l=n("pre",null,[n("code",{class:"lang-css"},`/*CSS custom properties - variables*/
/*Custom property names are case sensitive*/

:root {
/*Typography*/
--font-family: -apple-system, BlinkMacSystemFont,
 "Segoe UI", "Roboto", "Oxygen",
 "Ubuntu", "Cantarell", "Fira Sans",
 "Droid Sans", "Helvetica Neue", sans-serif;

 --font-weight--thin: 100;
 --font-weight--extra-light: 200;
 --font-weight--light: 300;
 --font-weight--normal: 400;

/*colors*/
 --primary-color: #8AEF8A;/*green*/
 --secondary-color: #E83A95;/*red*/

/*Size*/
 --big-size: 300px;
 --small-size: 100px;
}

.css-container {
  --border-color: blue;
  width: var(--big-size);
  height: var(--small-size);
  background: var(--primary-color);
  border: 2px solid var(--border-color);
}

.css-container p {
  font-family: var(--font-family);
  font-size: 18px;
  font-weight: var(--font-weight--light);
  color: var(--scondary-color);
}`)],-1),c=n("hr",null,null,-1),d=[a,i,l,c];function p(h,f,g,m,_,u){return o(),s("div",r,d)}var v=e(t,[["render",p]]);export{v as default};
