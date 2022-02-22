import{_ as n}from"./index.d81d2172.js";import{o as t,c as s,a as e}from"./vendor.8c156a9e.js";const r={mounted(){Prism.highlightAll()}},o={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Signup Form",-1),c=e("pre",null,[e("code",{class:"lang-html"},`<!-- Adding submit event to form.signup-form enables use of 'click' or 'enter key'.
Adding to the button only allows 'click' -->
<form class="signup-form">
 <h2>Signup for the latest news</h2>
  <input type="text" id="username" placeholder="username">
<!-- can also use 'name' ie.
 <input type="text" name="username" placeholder="username"> -->
 <input type="submit" value="submit">
 <div class="feedback"></div>
</form>`)],-1),l=e("pre",null,[e("code",{class:"lang-js"},`const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username'); alternative
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// - /^pattern$/ - pattern layout

// validation
form.addEventListener('submit', e => {
//prevent default action - refresh page
 e.preventDefault();
//method one queryselector
//username.value;

//method two dot notation
const username = form.username.value;

 if(usernamePattern.test(username)){
  feedback.textContent = 'that username is valid!'
 } else {
  feedback.textContent = 'username must contain only letters & be between 6 & 12 characters';
 }
});

// live feedback
form.username.addEventListener('keyup', e => {
console.log(e.target.value, form.username.value);//use either
//answer: yourname yourname
 
 if(usernamePattern.test(e.target.value)){
  form.username.setAttribute('class', 'success');
  } else {
  form.username.setAttribute('class', 'error');
 }
});`)],-1),i=e("pre",null,[e("code",{class:"lang-scss"},`//scss
.signup-form {
 display: flex;
 flex-direction: column;
 flex-wrap: nowrap;
 justify-content: center;
 align-items: center;
 width: 100%;
 max-width: 400px;
 border: $border;
 @include padding(20px null);
 @include margin(math.div($spacer, 2) auto);

  input {
  margin-bottom: math.div($spacer, 2);
  padding: 10px 5px;
 }

 .feedback {
  text-align: center;
  font-size: $third;
  padding: 0 20px;
 }
}

.signup-form .success {
 border: 2px solid $success-color;
 color: $success-color;
}

.signup-form .error {
 border: 2px solid $error-color;
 color: $error-color;
}`)],-1),u=e("hr",null,null,-1),d=[a,c,l,i,u];function m(p,f,h,g,_,b){return t(),s("div",o,d)}var y=n(r,[["render",m]]);export{y as default};
