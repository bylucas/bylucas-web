import{_ as o}from"./index.d81d2172.js";import{o as t,c as p,a as n}from"./vendor.8c156a9e.js";const e={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},a=n("h3",{class:"page-title"},"Modal",-1),c=n("pre",null,[n("code",{class:"lang-html"},`<!-- html -->
<div class="popup-content-area">
<button class="submit-button">Click for Modal</button>

<div class="popup-wrapper">
 <div class="popup">
  <div class="popup-close">x</div>
   <div class="popup-content">
    <h2>MODAL HEADER</h2>
    <p>Modal body</p>
    <!-- button a link away from the modal -->
    <a href="#">Button</a>
    </div>
  </div>
 </div>
</div>`)],-1),i=n("pre",null,[n("code",{class:"lang-js"},`//js
const submit = document.querySelector('.submit-button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

submit.addEventListener('click', () => {
 popup.style.display = 'block';
});

close.addEventListener('click', () => {
 popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
 if(e.target.className === 'popup-wrapper'){
  popup.style.display = 'none';
 }
});`)],-1),l=n("pre",null,[n("code",{class:"lang-scss"},`//scss
.popup-content-area {
 position: relative;

.submit-button {
 display: block;
 margin: 20px auto;
 background: crimson;
 color: white;
 border: 0;
 padding: 6px 10px;
}

.popup-wrapper {
 background: rgba(0,0,0,0.5);
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 display: none;

.popup{
 text-align: center;
 width: 100%;
 max-width: 300px;
 margin: 10% auto;
 padding: 20px;
 background: white;
 position: relative;

 a {
  background: crimson;
  color: white;
  text-decoration: none;
  padding: 6px 10px;
 }
}//popup

.popup-close{
 position: absolute;
 top: 5px;
 right: 8px;
 cursor: pointer;
  }
 }//popup-wrapper
}//popup-content-area`)],-1),r=n("hr",null,null,-1),d=[a,c,i,l,r];function u(h,m,_,b,g,v){return t(),p("div",s,d)}var k=o(e,[["render",u]]);export{k as default};
