<template>
 <div id="n" class="post-content">
<h3 class="page-title">EventListeners</h3>

<blockquote>
<p>See MDN website for list of events - link</p>
</blockquote>

<pre><code class="lang-html">//HTML
&lt;div class="demo"&gt;&lt;/div&gt;
&lt;button&gt;Click me&lt;/button&gt;</code></pre>

<pre><code class="lang-js">//js
//See MDN website for list of events - link

const button = document.querySelector('button');

//very simple addEventListener
 button.addEventListener('click', () => {
 console.log('you clicked me');
 document.querySelector(".demo").innerHTML = 'you clicked me';
 });

//inspect elements
//answer:
//&lt;div class="demo"&gt;you clicked me&lt;/div&gt;
//&lt;button&gt;Click me&lt;/button&gt;</code></pre>

<blockquote>
<p>e.target</p>
</blockquote>

<pre><code class="lang-html">//HTML
&lt;ul&gt;
 &lt;li&gt;This is one&lt;/li&gt;
 &lt;li&gt;This is two&lt;/li&gt;
 &lt;li&gt;This is three&lt;/li&gt;
 &lt;li&gt;This is four&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<pre><code class="lang-js">//js
//results after clicking the first li

const items = document.querySelectorAll('li');

items.forEach(item => {
 item.addEventListener('click', e => {
  //event action
  console.log('item clicked');
  //answer: item clicked
  
  //the event
  console.log(e);
  //answer: PointerEvent - pointerType: "mouse"
  
  //the event target
  console.log(e.target);
  //answer: &lt;li style="text-decoration: line-through;"&gt;This is one&lt;/li&gt;
  
  //the forEach item same result as e.target
  console.log(item);
  //answer: &lt;li style="text-decoration: line-through;"&gt;This is one&lt;/li&gt;
  
  //action on click
  e.target.style.textDecoration = 'line-through';
 });
});</code></pre>

<blockquote>
<p>append - prepend</p>
</blockquote>

<pre><code class="lang-js">//js
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
 const li = document.createElement('li');
 li.textContent = 'something new to do';
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
const items = document.querySelectorAll('li');

items.forEach(item => {
 item.addEventListener('click', e => {
  e.target.style.textDecoration = 'line-through';
   console.log('LI clicked');
 });
});

//clicking the button once to produce another li
//clicking the first three li

//console answer: 2 LI clicked
//inspect elements
//answer:
&lt;li&gt;something new to do&lt;/li&gt;
&lt;li style="text-decoration: line-through;"&gt;This is one&lt;/li&gt;
&lt;li style="text-decoration: line-through;"&gt;This is two&lt;/li&gt;
&lt;li&gt;This is three&lt;/li&gt;
&lt;li&gt;This is four&lt;/li&gt;

//the console log only recognises 2 clicks
//the new created li dosen't get the text decoration
//the code loads and executes on the dom loading therefore any li elements created after the dom has loaded is not recognised by the forEach method</code></pre>

<pre><code class="lang-js">//js
//results after clicking the first li

const items = document.querySelectorAll('li');

items.forEach(item => {
 item.addEventListener('click', e => {
  //event action
  console.log('item clicked');
  //answer: item clicked
  
  //the event
  console.log(e);
  //answer: PointerEvent - pointerType: "mouse"
  
  //the event target
  console.log(e.target);
  //answer: &lt;li style="text-decoration: line-through;"&gt;This is one&lt;/li&gt;
  
  //the forEach item same result as e.target
  console.log(item);
  //answer: &lt;li style="text-decoration: line-through;"&gt;This is one&lt;/li&gt;
  
  //action on click
  e.target.style.textDecoration = 'line-through';
 });
});</code></pre>

<blockquote>
<p>event bubbling</p>
<p>starts at element and bubbles to the top parent element</p>
<p>e.stopPropagation(); - example</p>
</blockquote>

<blockquote>
<p>event delegation</p>
</blockquote>

<pre><code class="lang-js">//js
//use the parent ie the ul and use event.target to check property tagName, this will also work with the new li tags

const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
 const li = document.createElement('li');
 li.textContent = 'something new to do';
 ul.append(li);
});

ul.addEventListener('click', e => {
 if(e.target.tagName === 'LI'){
 e.target.remove();
 }
});
//all clicked li tags are removed including the created li appended (created after) the list</code></pre>

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