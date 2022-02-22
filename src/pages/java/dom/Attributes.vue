<template>
 <div id="n" class="post-content">
<h3 class="page-title">Attributes</h3>

<blockquote>
<p>'getAttribute' and 'setAttribute' are methods hence ()</p>
  <p>Attribute includes 'a', 'class', 'href' etc</p>
  <p>if an attribute dosen't exit javascript will create it</p>
<p>setAttriute over-writes the existing attribute</p>
<p>'innerTEXT' gets all visible text</p>
<p>'textContent' gets all text including any hidden text</p>
</blockquote>

<pre><code class="lang-js">//HTML
&lt;a href="https://website.com"&gt;This link will change&lt;/a&gt;
&lt;h3 class="changeme"&gt;This is a h3 heading with class changeme&lt;/h3&gt;

//js
const link = document.querySelector('a');

//html will change from this
//answer: &lt;a href="https://website.com"&gt;This link will change&lt;/a&gt;

link.setAttribute('href', 'https://phone1st.org');
//'textContent' gets all text including any hidden text
link.textContent = 'The Phone1st website';

//inspect elements
//changed html
//answer: &lt;a href="https://phone1st.org"&gt;The Phone1st website&lt;/a&gt;

const mssg = document.querySelector('h3');

console.log(mssg.getAttribute('class'));
//answer: changeme

//html will change from this
//&lt;h3 class="changeme"&gt;This is a h3 heading with class changeme&lt;/h3&gt;

mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green');

//inspect elements
//setAttriute over-writes the existing attribute
//the class 'changeme' has been replaced with 'success'
//if an attribute dosen't exit javascript will create it
//the style 'color' dosn't exist so javascript creates it
//answer: &lt;h3 class="success" style="color: green"&gt;This is a h3 heading with class changeme&lt;/h3&gt;

//multiple styles
//HTML
&lt;h4&gt;This is a h4 heading&lt;/h4&gt;

//js
const title = document.querySelector('h4');

//we've been using the longer version
title.setAttribute('style', 'margin: 150px; font-size: 60px; color: crimson;');
//inspect elements
//answer: &lt;h4 style="margin: 150px; font-size: 60px; color: crimson;"&gt;This is a h4 heading&lt;/h4&gt;

//shorter version
//if the css style uses '-' eg 'font-size' use camel-case eg fontSize
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';//remove style
//inspect elements
//answer: &lt;h4 style="color: crimson; font-size: 60px;"&gt;This is a h4 heading&lt;/h4&gt;</code></pre>

<hr />
</div>
</template>

<script>

export default {
  mounted() {
    Prism.highlightAll()
  }
};
</script>