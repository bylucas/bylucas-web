<template>
 
<div id="n" class="post-content">
<h3 class="page-title">Modal</h3>

<pre><code class="lang-html">&lt;!-- html --&gt;
&lt;div class="popup-content-area"&gt;
&lt;button class="submit-button"&gt;Click for Modal&lt;/button&gt;

&lt;div class="popup-wrapper"&gt;
 &lt;div class="popup"&gt;
  &lt;div class="popup-close"&gt;x&lt;/div&gt;
   &lt;div class="popup-content"&gt;
    &lt;h2&gt;MODAL HEADER&lt;/h2&gt;
    &lt;p&gt;Modal body&lt;/p&gt;
    &lt;!-- button a link away from the modal --&gt;
    &lt;a href="#"&gt;Button&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
 &lt;/div&gt;
&lt;/div&gt;</code></pre>

<pre><code class="lang-js">//js
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
});</code></pre>

<pre><code class="lang-scss">//scss
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
}//popup-content-area</code></pre>

<hr>
</div>
</template>

<script>

export default {

  mounted() {
    Prism.highlightAll()
  }
};
</script>