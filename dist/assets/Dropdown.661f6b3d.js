import{_ as t}from"./index.d81d2172.js";import{o,c as e,a as n}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},i={id:"n",class:"post-content"},r=n("h3",{class:"page-title"},"Dropdown",-1),a=n("pre",null,[n("code",{class:"lang-html"},`<!-- html -->
<!-- showing 2 dropdowns -->
<div class="dropdown-area">

<h2>Dropdowns Title</h2>
 
 <div class="dropdown">
  <div class="trigger">Dropdown One</div>
  <div class="content">
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus, a natus totam sequi velit? Vel cupiditate hic incidunt quam laboriosam tenetur nam, voluptate, necessitatibus ex porro, soluta accusantium aspernatur.</p>
   </div>
  </div>
 
 <div class="dropdown">
  <div class="trigger">Dropdown Two</div>
  <div class="content">
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus, a natus totam sequi velit? Vel cupiditate hic incidunt quam laboriosam tenetur nam, voluptate, necessitatibus ex porro, soluta accusantium aspernatur.</p>
 </div>
</div>

<!-- Dropdown Three -->
<!-- Dropdown Four -->

</div>`)],-1),d=n("pre",null,[n("code",{class:"lang-js"},`//js
class Dropdown {
 constructor(container){
  this.container = container;
  this.trigger = container.querySelector('.trigger');
  this.content = container.querySelector('.content');
 }
 
 init(){
  this.trigger.addEventListener('click', () => {
  this.trigger.classList.toggle('active');
  this.content.classList.toggle('active');
  });
 }
}

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
 const instance = new Dropdown(dropdown);
 instance.init();
});`)],-1),c=n("pre",null,[n("code",{class:"lang-scss"},`//scss
.dropdown-area {
 max-width: 600px;
 @include margin($spacer auto);
 padding: math.div($spacer, 2);
}

.dropdown .trigger{
 border-bottom: 1px solid #ddd;
 padding: 10px;
 position: relative;
 cursor: pointer;
}

.dropdown .trigger::after{
 content: ">";
 display: inline-block;
 position: absolute;
 right: 15px;
 transform: rotate(90deg) scale(0.5, 1);
 font-weight: bold;
 transition: transform 0.3s;
}

.dropdown .trigger.active::after{
 transform: rotate(-90deg) scale(0.5, 1);
}

.dropdown .content{
 display: none;

 p {
  font-size: $secondary;
  padding: math.div($spacer, 2) 10px;
  margin-bottom: 0;
  }
}

.dropdown .content.active{
 display: block;
}
`)],-1),p=n("hr",null,null,-1),l=[r,a,d,c,p];function u(g,m,h,w,v,_){return o(),e("div",i,l)}var b=t(s,[["render",u]]);export{b as default};
