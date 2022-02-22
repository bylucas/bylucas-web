<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Tooltip</h3>
<h4>Tooltip by function</h4>

<pre><code class="lang-html">&lt;!-- html --&gt;
&lt;p&gt;Lorem dolor sit amet consectetur adipisicing elit. Voluptate sequi odit totam. Quod maiores saepe sequi. 
&lt;span class="tooltip" data-message="I'm a tooltip!!"&gt;Illum aspernatur&lt;/span&gt; 
aut voluptatum, sequi quibusdam laudantium? Laborum asperiores consequuntur eum corporis exercitationem debitis.&lt;/p&gt;</code></pre>

<pre><code class="lang-js">//js
const toolTip = () => {
const tooltip = document.querySelector('.tooltip');  
const message = tooltip.getAttribute('data-message');

const tip = document.createElement('div');
tip.classList.add('tip');
tip.textContent = message;
tooltip.appendChild(tip);

tooltip.addEventListener('mouseenter', () => {
 tip.classList.add('active');
 
  });

tooltip.addEventListener('mouseleave', () => {
 tip.classList.remove('active');
  });
};

toolTip();</code></pre>

<h4>Tooltip by class</h4>

<pre><code class="lang-html">&lt;!-- html --&gt;
&lt;p&gt;Lorem dolor sit amet consectetur adipisicing elit. Voluptate sequi odit totam. Quod maiores saepe sequi. 
&lt;span class="tooltip2" data-message="I'm another tooltip!!"&gt;Illum aspernatur&lt;/span&gt; 
aut voluptatum, sequi quibusdam laudantium? Laborum asperiores consequuntur eum corporis exercitationem debitis.&lt;/p&gt;</code></pre>

<pre><code class="lang-js">//js
class Tooltip {
 constructor(element){
  this.element = element;
  this.message = element.getAttribute('data-message2');
 }
 init(){
  const tip = document.createElement('div');
  tip.classList.add('tip2');
  tip.textContent = this.message;
  this.element.appendChild(tip);

  this.element.addEventListener('mouseenter', () => {
  tip.classList.add('active');
  });
  this.element.addEventListener('mouseleave', () => {
  tip.classList.remove('active');
  });
 }
}

// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip2'));
tooltip.init();</code></pre>

<pre><code class="lang-scss">//scss for both tooltips
.tooltip,
.tooltip2 {
 position: relative;
 display: inline-block;
 cursor: help;
}

.tooltip {
 color: #ff6565;
 border-bottom: 1px dotted #ff6565;
}

.tooltip2 {
 color: #5849FF;
 border-bottom: 1px dotted #5849FF;
}

.tip,
.tip2 {
 visibility: hidden;
 width: 150px;
 color: #fff;
 text-align: center;
 border-radius: 10px;
 padding: 5px 0;
 position: absolute;
 bottom: 120%;
 left: 50%;
 margin-left: -75px;
 opacity: 0;
 transition: opacity 0.3s;

  &.active {
   visibility: visible;
   opacity: 1;
 }

  &::after {
   content: "";
   position: absolute;
   top: 100%;
   left: 50%;
   margin-left: -4px;
   border-width: 4px;
   border-style: solid;
   border-color: transparent;
  }
}

.tip {
 background-color: #ff6565;

  &::after {
   border-top-color: #ff6565;
 }
}

.tip2 {
 background-color: #5849FF;

  &::after {
   border-top-color: #5849FF;
 }
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