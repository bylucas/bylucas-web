import{_ as n}from"./index.d81d2172.js";import{o as t,c as e,m as o}from"./vendor.8c156a9e.js";const l={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},r=o(`<h3 class="page-title">Active Header</h3><blockquote><p><strong>Active Header</strong> including <em>Hamburger</em> and <em>Menu</em></p><p>You&#39;ll probably have to tweek some of this code to fit your site</p></blockquote><pre><code class="lang-html">&lt;!-- html --&gt;
&lt;!-- active header --&gt;
&lt;header class=&quot;active-header&quot;&gt;
 &lt;h1&gt;Active Header&lt;/h1&gt;
 &lt;!-- hamburger --&gt;
 &lt;!-- Menu --&gt;
&lt;/header&gt;

&lt;div class=&quot;main&quot;&gt;
 &lt;p&gt;Page body&lt;/p&gt;
&lt;/div&gt;</code></pre><pre><code class="lang-html">&lt;!-- html --&gt;
&lt;!-- hamburger --&gt;
&lt;div id=&quot;hamburger&quot;&gt;
 &lt;span&gt;&lt;/span&gt;
 &lt;span&gt;&lt;/span&gt;
 &lt;span&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre><pre><code class="lang-html">&lt;!-- html --&gt;
&lt;!-- Menu --&gt;
&lt;nav id=&quot;menu&quot;&gt;
 &lt;li&gt;&lt;a&gt;Menu 1&lt;/a&gt;&lt;/li&gt;
 
 &lt;li&gt;&lt;a class=&quot;drop&quot;&gt;Menu 2 dropdown &lt;span&gt;\u2023&lt;/span&gt;&lt;/a&gt;
  &lt;ul class=&quot;drop_menu&quot;&gt;
   &lt;a&gt;Sub menu 1&lt;/a&gt;
   &lt;a&gt;Sub menu 2&lt;/a&gt;
   &lt;a&gt;Sub menu 3&lt;/a&gt;
  &lt;/ul&gt;
 &lt;/li&gt;

 &lt;li&gt;&lt;a class=&quot;drop&quot;&gt;Menu 3 dropdown &lt;span&gt;\u2023&lt;/span&gt;&lt;/a&gt;
  &lt;ul class=&quot;drop_menu&quot;&gt;
   &lt;a&gt;Sub menu 1&lt;/a&gt;
   &lt;a&gt;Sub menu 2&lt;/a&gt;
   &lt;a&gt;Sub menu 3&lt;/a&gt;
  &lt;/ul&gt;
 &lt;/li&gt;

 &lt;li&gt;&lt;a&gt;Menu 4&lt;/a&gt;&lt;/li&gt;

 &lt;li&gt;&lt;a class=&quot;drop&quot;&gt;Menu 5 dropdown &lt;span&gt;\u2023&lt;/span&gt;&lt;/a&gt;
   &lt;ul class=&quot;drop_menu&quot;&gt;
    &lt;a&gt;Sub menu 1&lt;/a&gt;
    &lt;a&gt;Sub menu 2&lt;/a&gt;
    &lt;a&gt;Sub menu 3&lt;/a&gt;
   &lt;/ul&gt;
 &lt;/li&gt;

  &lt;li&gt;&lt;a&gt;Menu 6&lt;/a&gt;&lt;/li&gt;
&lt;/nav&gt;</code></pre><pre><code class="lang-js">//js
const body = document.querySelector(&#39;body&#39;);
let last_scroll = 0;
const header = document.querySelector(&#39;.active-header&#39;);
const hamburger = document.querySelector(&#39;#hamburger&#39;);
const items = document.querySelectorAll(&#39;#menu&#39;, &#39;li&#39;, &#39;a&#39;);
const checkMenu = document.querySelectorAll(&#39;.drop_menu&#39;)
//class to rotate the arrows
const checkOpen = document.querySelectorAll(&#39;.drop&#39;)

//if the window is resized when active-header is fully open then close it - closeMenu() bottom of the scripts
window.addEventListener(&quot;resize&quot;, () =&gt; {
 body.classList.remove(&quot;display_menu&quot;);
 close_menu();
});

//if active-header is only required remove &#39;|| body.classList.contains(&quot;display_menu&quot;)&#39;
window.addEventListener(&#39;scroll&#39;, () =&gt; {
 if (Math.abs(last_scroll - scrollY) &lt;= 5 || body.classList.contains(&quot;display_menu&quot;)) return; (scrollY &lt; last_scroll) ? header.style.top = &quot;0&quot; :
  header.style.top = &quot;-&quot; + header.clientHeight + &quot;px&quot;; last_scroll = scrollY;
})

hamburger.addEventListener(&#39;click&#39;, () =&gt; {
 close_menu();
 body.classList.toggle(&#39;display_menu&#39;);
})

// Adding a menu
items.forEach(item =&gt; {
 menu.addEventListener(&#39;click&#39;, e =&gt; {
  if (e.target.classList.contains(&#39;drop&#39;)) {
  //if you have problems check &#39;nextSiblings&#39;
   e.target.nextSibling.nextSibling.classList.toggle(&#39;display&#39;)
   //for the arrow on the span
   e.target.classList.toggle(&#39;open&#39;);
  }
 })
})

//closeMenu() used to reset the dropdowns in the menu before expanding the header
const close_menu = () =&gt; {
 Array.from(checkMenu).forEach(check =&gt; {
  check.classList.remove(&#39;display&#39;)
 })
 //reset the arrows
 Array.from(checkOpen).forEach(open =&gt; {
  open.classList.remove(&#39;open&#39;)
 })
}</code></pre><pre><code class="lang-scss">//scss
//active header
.active-header {
 background-color: #10066b;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 100;
 width: 100%;
 height: 15vh;
 overflow: hidden;
 padding: 1% 2%;
 box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
 transform-origin: 50% 0;
 transition: 0.33s ease;
}

//active header - active
.display_menu .active-header {
 height: 100vh;
 opacity: .9;
 overflow-y: scroll;
}

//hamburger
#hamburger {
 cursor: pointer;
 border-radius: 50%;
 position: absolute;
 z-index: 200;
  left: 3%;
 top: 30px;
 transform: translateY(-50%);

  span {
   height: 2px;
   margin-top: 5px;
   margin-bottom: 5px;
   background-color: rgba(238, 231, 231, 0.904);
   display: block;
   transition: 0.33s;
 }

  span:nth-child(1) {
   width: 12px;
 }

  span:nth-child(2) {
   width: 24px;
 }

  span:nth-child(3) {
   width: 12px;
 }
}

.display_menu #hamburger span:nth-child(1) {
 transform: rotate(45deg) translate(2px, 1px);
}

.display_menu #hamburger span:nth-child(2) {
 transform: rotate(-45deg);
}

.display_menu #hamburger span:nth-child(3) {
 transform: rotate(45deg) translate(6px, -9px);
}

//menu
#menu {
 width: 300px;
 margin: 50px auto;
 border: 1px solid #528BE9;
 padding: 10px;

  li {
   list-style: none;
   margin-bottom: 5px;
   color: rgba(238, 231, 231, 0.904);
  }
  
  a {
   cursor: pointer;
   color: #528BE9;
   font-size: 1.1rem;
   position: relative;
  }

  span {
   display: inline-block;
   font-size: 1.3rem;
   position: absolute;
   right: -25px;
   top: -4px;
   transform: rotate(90deg);
   font-weight: bold;
   transition: transform 0.3s;
  }

  .drop_menu {
   padding: 0;
   margin: 3px 0;
   display: none;

   a {
    font-size: .9rem;
    margin-bottom: 5px;
    display: block;
   }
  }

 .drop_menu.display {
  display: block;
 }

 .open span {
  transform: rotate(-90deg);
 }
}

@include media(700) {
 .active-header {
  top: 62px;
 }

 #menu {
  padding: 15px;

  li {
  margin-bottom: 10px;
  }
  
  a {
  font-size: 1.3rem;
  }

  span {
  font-size: 1.5rem;
  right: -28px;
  }

  .drop_menu {

   a {
    font-size: 1.1rem;
    margin-bottom: 7px;
   }
  }
 }
}

@include media(900) {
  #menu a:hover {
   color: $white;
 }
}</code></pre><hr>`,8),s=[r];function i(d,c,g,u,p,m){return t(),e("div",a,s)}var f=n(l,[["render",i]]);export{f as default};
