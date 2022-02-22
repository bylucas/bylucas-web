import{_ as e}from"./index.58a79006.js";import{o as n,c as o,m as t}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},c=t(`<h3 class="page-title">Switch Statements</h3><blockquote><p> A switch statement is like the if statement giving the user options and breaking when the current option (<em>condition</em>) is true. </p></blockquote><pre><code class="lang-js">//The switch expression is evaluated once
//The value of the expression is compared with the values of each case
//If there is a match, the associated block of code is executed
//If there is no match, the default code block is executed

const number = &#39;3&#39;;

switch(number){
 case &#39;1&#39;:
  console.log(&#39;number one&#39;);
 break;
 case &#39;2&#39;:
  console.log(&#39;number two&#39;);
 break;
 case &#39;3&#39;:
  console.log(&#39;number three&#39;);
 break;
 case &#39;4&#39;:
  console.log(&#39;number four&#39;);
 break;
 case &#39;5&#39;:
  console.log(&#39;number five&#39;);
 break;
 default:
  console.log(&#39;run out of numbers&#39;);
}//answer: number three

//using if statements
if(number === &#39;1&#39;){
  console.log(&#39;number one&#39;);
 } else if(number === &#39;2&#39;){
  console.log(&#39;number two&#39;);
 } else if(number === &#39;3&#39;){
  console.log(&#39;number three&#39;);
 } else if(number === &#39;4&#39;){
  console.log(&#39;number four&#39;);
 } else if(number === &#39;5&#39;){
  console.log(&#39;number five&#39;);
 } else {
  console.log(&#39;run out of numbers&#39;);
 }//answer: number three

//the &#39;default&#39; does not have to be last but if used elsewhere &#39;break;&#39; must be used

switch(number){
 default:
  console.log(&#39;run out of numbers&#39;);
 break;
 case &#39;1&#39;:
  console.log(&#39;number one&#39;);
 break;
 case &#39;2&#39;:
  console.log(&#39;number two&#39;);
 break;
}//answer: run out of numbers

//sharing code blocks

switch(number){
 case &#39;1&#39;:
 case &#39;2&#39;:
  console.log(&#39;number one and two&#39;);
 break;
 case &#39;3&#39;:
 case &#39;4&#39;:
  console.log(&#39;number three and four&#39;);
 break;
 default:
  console.log(&#39;run out of numbers&#39;);
}//answer: number three and four

//switch cases use strict comparison (===)
//The values must be of the same type to match
//A strict comparison can only be true if the operands are of the same type

switch(number){
 case 1:
  console.log(&#39;number one&#39;);
 break;
 case 2:
  console.log(&#39;number two&#39;);
 break;
 case 3://not &#39;3&#39;
  console.log(&#39;number three&#39;);
 break;
 case 4:
  console.log(&#39;number four&#39;);
 break;
 default:
  console.log(&#39;run out of numbers&#39;);
}//answer: run out of numbers</code></pre><blockquote><p>practicle example using left and right arrow keys.</p></blockquote><pre><code class="lang-html">&lt;!-- html --&gt;
&lt;div class=&quot;box-container&quot;&gt;
 &lt;div class=&quot;inner-box&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="lang-css">/** css **/
.box-container {
 max-width: 400px;
 height: 30px;
 margin: 0 auto;
 position: relative;
 border: 1px solid gray;
}

.inner-box {
 width: 20px;
 height: 30px;
 background-color: red;
 position: absolute;
 top: 0;
 left: 190px;
}</code></pre><pre><code class="lang-js">//js
let box = document.querySelector(&#39;.inner-box&#39;)
let i = 190
let width = 50

function Gun() {
 document.addEventListener(&#39;keydown&#39;, (e) =&gt; {
  switch (e.key) {
   case &#39;ArrowLeft&#39;:
    if(i + width !== 50)
     i -= 5
     box.style.left = i + &#39;px&#39;
    break
   
   case &#39;ArrowRight&#39;:
    if (i + width !== 430)
     i += 5
    box.style.left = i + &#39;px&#39;
  break
  }
 })
}

Gun()</code></pre><hr>`,8),a=[c];function l(u,i,b,m,h,d){return n(),o("div",r,a)}var p=e(s,[["render",l]]);export{p as default};
