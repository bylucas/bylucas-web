import{_ as t}from"./index.d81d2172.js";import{o as e,c as n,m as o}from"./vendor.8c156a9e.js";const i={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},a=o(`<h3 class="page-title">Tooltip</h3><h4>Tooltip by function</h4><pre><code class="lang-html">&lt;!-- html --&gt;
&lt;p&gt;Lorem dolor sit amet consectetur adipisicing elit. Voluptate sequi odit totam. Quod maiores saepe sequi. 
&lt;span class=&quot;tooltip&quot; data-message=&quot;I&#39;m a tooltip!!&quot;&gt;Illum aspernatur&lt;/span&gt; 
aut voluptatum, sequi quibusdam laudantium? Laborum asperiores consequuntur eum corporis exercitationem debitis.&lt;/p&gt;</code></pre><pre><code class="lang-js">//js
const toolTip = () =&gt; {
const tooltip = document.querySelector(&#39;.tooltip&#39;);  
const message = tooltip.getAttribute(&#39;data-message&#39;);

const tip = document.createElement(&#39;div&#39;);
tip.classList.add(&#39;tip&#39;);
tip.textContent = message;
tooltip.appendChild(tip);

tooltip.addEventListener(&#39;mouseenter&#39;, () =&gt; {
 tip.classList.add(&#39;active&#39;);
 
  });

tooltip.addEventListener(&#39;mouseleave&#39;, () =&gt; {
 tip.classList.remove(&#39;active&#39;);
  });
};

toolTip();</code></pre><h4>Tooltip by class</h4><pre><code class="lang-html">&lt;!-- html --&gt;
&lt;p&gt;Lorem dolor sit amet consectetur adipisicing elit. Voluptate sequi odit totam. Quod maiores saepe sequi. 
&lt;span class=&quot;tooltip2&quot; data-message=&quot;I&#39;m another tooltip!!&quot;&gt;Illum aspernatur&lt;/span&gt; 
aut voluptatum, sequi quibusdam laudantium? Laborum asperiores consequuntur eum corporis exercitationem debitis.&lt;/p&gt;</code></pre><pre><code class="lang-js">//js
class Tooltip {
 constructor(element){
  this.element = element;
  this.message = element.getAttribute(&#39;data-message2&#39;);
 }
 init(){
  const tip = document.createElement(&#39;div&#39;);
  tip.classList.add(&#39;tip2&#39;);
  tip.textContent = this.message;
  this.element.appendChild(tip);

  this.element.addEventListener(&#39;mouseenter&#39;, () =&gt; {
  tip.classList.add(&#39;active&#39;);
  });
  this.element.addEventListener(&#39;mouseleave&#39;, () =&gt; {
  tip.classList.remove(&#39;active&#39;);
  });
 }
}

// create tooltip
const tooltip = new Tooltip(document.querySelector(&#39;.tooltip2&#39;));
tooltip.init();</code></pre><pre><code class="lang-scss">//scss for both tooltips
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

  &amp;.active {
   visibility: visible;
   opacity: 1;
 }

  &amp;::after {
   content: &quot;&quot;;
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

  &amp;::after {
   border-top-color: #ff6565;
 }
}

.tip2 {
 background-color: #5849FF;

  &amp;::after {
   border-top-color: #5849FF;
 }
}</code></pre><hr>`,9),l=[a];function p(r,c,d,u,m,g){return e(),n("div",s,l)}var f=t(i,[["render",p]]);export{f as default};
