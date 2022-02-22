import{_ as t}from"./index.58a79006.js";import{o as e,c as i,a as n}from"./vendor.8c156a9e.js";const a={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},o=n("h3",{class:"page-title"},"Tabs",-1),c=n("pre",null,[n("code",{class:"lang-html"},`<!-- html -- >
<div class="tabs-area">
 <h2>Tabs Title</h2>
 <!-- tabs -->
 <div class="tabs">
  <ul>
   <li class="trigger active" data-target="#one">Tab one</li>
   <li class="trigger" data-target="#two">Tab two</li>
   <li class="trigger" data-target="#three">Tab three</li>
  </ul>
 
 <div id="one" class="content active">
  <h3>Tab one</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.</p>
 </div>
 
 <div id="two" class="content">
  <h3>Tab two</h3>
  <p>Non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque.</p>
  </div>
 
 <div id="three" class="content">
  <h3>Tab three</h3>
  <p>Adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, lorem ipsum dolor sit amet consectetur ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.</p>
 </div>
</div>
</div>`)],-1),l=n("pre",null,[n("code",{class:"lang-js"},`//js
class Tabs {
 constructor(container){
  this.container = container;
  this.tabs = container.querySelectorAll('.trigger');
 }
 
 init(){
  this.tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
   if(e.target.tagName === 'LI'){
    this.toggleTabs(e);
    this.toggleContent(e);
   }
  });
 });
}
 
 toggleTabs(e){
  // remove current active classes
  this.tabs.forEach(tab => tab.classList.remove('active'));
  // add new active class
  e.target.classList.add('active');
 }
 
 toggleContent(e){
 // remove current active classes
 this.container.querySelectorAll('.content').forEach(item => {
 item.classList.remove('active');
 });
 // add new active class
 const selector = e.target.getAttribute('data-target');
 const content = this.container.querySelector(selector);
 content.classList.add('active');
 }
}

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();`)],-1),r=n("pre",null,[n("code",{class:"lang-scss"},`//scss
.tabs-area {
 max-width: 600px;
 @include margin($spacer auto);
 padding: math.div($spacer, 2);
}

.tabs .trigger {
 list-style-type: none;
 background: #f2f2f2;
 margin: 3px;
 border-radius: 6px;
 display: inline-block;
 padding: 5px 10px;
 font-size: $third;
 cursor: pointer;
}

.tabs .trigger.active{
 background: #ff6565;
 color: white;
}

.tabs .content{
 background: #fbfbfb;
 padding: 10px 20px;
 border-radius: 6px;
 display: none;
}

.tabs .content.active{
 display: block;
}

@include media(700) {
 .tabs .trigger{
  list-style-type: none;
  background: #f2f2f2;
  margin: 4px;
  border-radius: 6px;
  display: inline-block;
  padding: 10px 20px;
  font-size: $secondary;
  cursor: pointer;
 }
}`)],-1),d=n("hr",null,null,-1),u=[o,c,l,r,d];function m(b,p,g,h,v,f){return e(),i("div",s,u)}var x=t(a,[["render",m]]);export{x as default};
