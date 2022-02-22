import{_ as t}from"./index.58a79006.js";import{o as e,c as n,m as o}from"./vendor.8c156a9e.js";const l={mounted(){Prism.highlightAll()}},i={id:"n",class:"post-content"},s=o(`<h3 class="page-title">EventListeners</h3><blockquote><p>See MDN website for list of events - link</p></blockquote><pre><code class="lang-html">//HTML
&lt;div class=&quot;demo&quot;&gt;&lt;/div&gt;
&lt;button&gt;Click me&lt;/button&gt;</code></pre><pre><code class="lang-js">//js
//See MDN website for list of events - link

const button = document.querySelector(&#39;button&#39;);

//very simple addEventListener
 button.addEventListener(&#39;click&#39;, () =&gt; {
 console.log(&#39;you clicked me&#39;);
 document.querySelector(&quot;.demo&quot;).innerHTML = &#39;you clicked me&#39;;
 });

//inspect elements
//answer:
//&lt;div class=&quot;demo&quot;&gt;you clicked me&lt;/div&gt;
//&lt;button&gt;Click me&lt;/button&gt;</code></pre><blockquote><p>e.target</p></blockquote><pre><code class="lang-html">//HTML
&lt;ul&gt;
 &lt;li&gt;This is one&lt;/li&gt;
 &lt;li&gt;This is two&lt;/li&gt;
 &lt;li&gt;This is three&lt;/li&gt;
 &lt;li&gt;This is four&lt;/li&gt;
&lt;/ul&gt;</code></pre><pre><code class="lang-js">//js
//results after clicking the first li

const items = document.querySelectorAll(&#39;li&#39;);

items.forEach(item =&gt; {
 item.addEventListener(&#39;click&#39;, e =&gt; {
  //event action
  console.log(&#39;item clicked&#39;);
  //answer: item clicked
  
  //the event
  console.log(e);
  //answer: PointerEvent - pointerType: &quot;mouse&quot;
  
  //the event target
  console.log(e.target);
  //answer: &lt;li style=&quot;text-decoration: line-through;&quot;&gt;This is one&lt;/li&gt;
  
  //the forEach item same result as e.target
  console.log(item);
  //answer: &lt;li style=&quot;text-decoration: line-through;&quot;&gt;This is one&lt;/li&gt;
  
  //action on click
  e.target.style.textDecoration = &#39;line-through&#39;;
 });
});</code></pre><blockquote><p>append - prepend</p></blockquote><pre><code class="lang-js">//js
const button = document.querySelector(&#39;button&#39;);
const ul = document.querySelector(&#39;ul&#39;);

button.addEventListener(&#39;click&#39;, () =&gt; {
 const li = document.createElement(&#39;li&#39;);
 li.textContent = &#39;something new to do&#39;;
 ul.appendChild(li);//add to the end of the li list
 //ul.prepend(li);//add to the beginning of the li list
});


//clicking the button once

//inspect elements
//answer:
&lt;ul&gt;
 &lt;li&gt;something new to do;/li&gt;
 &lt;li&gt;This is one&lt;/li&gt;
 &lt;li&gt;This is two&lt;/li&gt;
 &lt;li&gt;This is three&lt;/li&gt;
 &lt;li&gt;This is four&lt;/li&gt;
&lt;/ul&gt;

//add another event to the above code
const items = document.querySelectorAll(&#39;li&#39;);

items.forEach(item =&gt; {
 item.addEventListener(&#39;click&#39;, e =&gt; {
  e.target.style.textDecoration = &#39;line-through&#39;;
   console.log(&#39;LI clicked&#39;);
 });
});

//clicking the button once to produce another li
//clicking the first three li

//console answer: 2 LI clicked
//inspect elements
//answer:
&lt;li&gt;something new to do&lt;/li&gt;
&lt;li style=&quot;text-decoration: line-through;&quot;&gt;This is one&lt;/li&gt;
&lt;li style=&quot;text-decoration: line-through;&quot;&gt;This is two&lt;/li&gt;
&lt;li&gt;This is three&lt;/li&gt;
&lt;li&gt;This is four&lt;/li&gt;

//the console log only recognises 2 clicks
//the new created li dosen&#39;t get the text decoration
//the code loads and executes on the dom loading therefore any li elements created after the dom has loaded is not recognised by the forEach method</code></pre><pre><code class="lang-js">//js
//results after clicking the first li

const items = document.querySelectorAll(&#39;li&#39;);

items.forEach(item =&gt; {
 item.addEventListener(&#39;click&#39;, e =&gt; {
  //event action
  console.log(&#39;item clicked&#39;);
  //answer: item clicked
  
  //the event
  console.log(e);
  //answer: PointerEvent - pointerType: &quot;mouse&quot;
  
  //the event target
  console.log(e.target);
  //answer: &lt;li style=&quot;text-decoration: line-through;&quot;&gt;This is one&lt;/li&gt;
  
  //the forEach item same result as e.target
  console.log(item);
  //answer: &lt;li style=&quot;text-decoration: line-through;&quot;&gt;This is one&lt;/li&gt;
  
  //action on click
  e.target.style.textDecoration = &#39;line-through&#39;;
 });
});</code></pre><blockquote><p>event bubbling</p><p>starts at element and bubbles to the top parent element</p><p>e.stopPropagation(); - example</p></blockquote><blockquote><p>event delegation</p></blockquote><pre><code class="lang-js">//js
//use the parent ie the ul and use event.target to check property tagName, this will also work with the new li tags

const ul = document.querySelector(&#39;ul&#39;);
const button = document.querySelector(&#39;button&#39;);

button.addEventListener(&#39;click&#39;, () =&gt; {
 const li = document.createElement(&#39;li&#39;);
 li.textContent = &#39;something new to do&#39;;
 ul.append(li);
});

ul.addEventListener(&#39;click&#39;, e =&gt; {
 if(e.target.tagName === &#39;LI&#39;){
 e.target.remove();
 }
});
//all clicked li tags are removed including the created li appended (created after) the list</code></pre><hr>`,14),c=[s];function r(a,g,d,u,h,m){return e(),n("div",i,c)}var q=t(l,[["render",r]]);export{q as default};
