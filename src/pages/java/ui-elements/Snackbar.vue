<template>

<div id="n" class="post-content">

<h3 class="page-title">Snackbar</h3>

<pre><code class="lang-html">&lt;!-- html --&gt;
&lt;div&gt;
 &lt;button class="snackbar-trigger"&gt;SNACKBAR BUTTON&lt;/button&gt;
&lt;/div&gt;</code></pre>

<pre><code class="lang-js">//js
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
});</code></pre>

<pre><code class="lang-scss">//scss
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
}</code></pre>

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