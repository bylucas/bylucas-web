<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Signup Form</h3>

<pre><code class="lang-html">&lt;!-- Adding submit event to form.signup-form enables use of 'click' or 'enter key'.
Adding to the button only allows 'click' --&gt;
&lt;form class="signup-form"&gt;
 &lt;h2&gt;Signup for the latest news&lt;/h2&gt;
  &lt;input type="text" id="username" placeholder="username"&gt;
&lt;!-- can also use 'name' ie.
 &lt;input type="text" name="username" placeholder="username"&gt; --&gt;
 &lt;input type="submit" value="submit"&gt;
 &lt;div class="feedback"&gt;&lt;/div&gt;
&lt;/form&gt;</code></pre>

<pre><code class="lang-js">const form = document.querySelector('.signup-form');
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
});</code></pre>

<pre><code class="lang-scss">//scss
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
}</code></pre>

<hr>

</div>
</template>

<script>

export default {

  mounted() {
    Prism.highlightAll()
  }
}
</script>