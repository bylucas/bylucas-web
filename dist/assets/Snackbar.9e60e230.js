import{_ as t}from"./index.d81d2172.js";import{o as a,c as s,a as n}from"./vendor.8c156a9e.js";const e={mounted(){Prism.highlightAll()}},c={id:"n",class:"post-content"},r=n("h3",{class:"page-title"},"Snackbar",-1),o=n("pre",null,[n("code",{class:"lang-html"},`<!-- html -->
<div>
 <button class="snackbar-trigger">SNACKBAR BUTTON</button>
</div>`)],-1),i=n("pre",null,[n("code",{class:"lang-js"},`//js
class Snackbar{
 constructor(){
  this.snackbar = document.createElement('div');
  }
 
 init(){
  this.snackbar.classList.add('snackbar');
  document.querySelector('body').appendChild(this.snackbar);
  }
 
 show(message){
  this.snackbar.textContent = message;
  this.snackbar.classList.add('active');
  setTimeout(() => {
   this.snackbar.classList.remove('active');
   this.snackbar.textContent = '';
  }, 4000);
 }
}

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');

button.addEventListener('click', () => {
 snackbar.show('you clicked me :)');
});`)],-1),d=n("pre",null,[n("code",{class:"lang-scss"},`//scss
.snackbar-area {
 max-width: 600px;
 @include margin(0 auto $spacer auto);
 text-align: center;
 padding: math.div($spacer, 2);
}

.snackbar-trigger {
 width: 200px;
}

.snackbar {
 width: 200px;
 padding: 20px;
 position: fixed;
 left: 50%;
 margin-left: -120px;
 top: 0;
 border-radius: 0 0 5px 5px;
 box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
 background: #ff6565;
 text-align: center;
 color: #fff;
 margin-top: -100%;
 transition: all 0.2s;
 z-index: 1200;//clear this sites menu
}

.snackbar.active {
 margin-top: 0;
}`)],-1),l=n("hr",null,null,-1),p=[r,o,i,d,l];function b(h,u,k,m,g,_){return a(),s("div",c,p)}var v=t(e,[["render",b]]);export{v as default};
