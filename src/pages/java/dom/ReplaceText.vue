<template>
 <div id="n" class="post-content">
<h3 class="page-title">Replacing Text</h3>

<blockquote>
<p>grabbing the document elements with 'querySelector', getElementById, getElementsByClassName or getElementsByTagName are all done with methods</p>
 <p>'innerText' and 'innerHTML' are properties</p>
</blockquote>

<pre><code class="lang-html">//HTML
&lt;p&gt;This is the first 'p'&lt;/p&gt;
&lt;p&gt;This is the second 'p'&lt;/p&gt;
&lt;p class="error"&gt;This is the third 'p'&lt;/p&gt;
&lt;div class="story"&gt;
 &lt;p&gt;this is the story 'p'&lt;/p&gt;
&lt;/div&gt;</code></pre>

<pre><code class="lang-js">//js
const text = document.querySelector('p');

//'innerText' is a property
console.log(text.innerText);
//answer: This is the first 'p'

//replace the text
text.innerText = 'This is some new text';

console.log(text.innerText);
//answer: This is some new text

//using forEach to change all paragraph text
const texts = document.querySelectorAll('p');

texts.forEach(p => {
 console.log(p.innerText);
//answer:
//This is the first 'p'
//This is the second 'p'
//This is the third 'p'
//this is the story 'p'

p.innerText = 'new text!';

 console.log(p.innerText);
//answer:
//new text!
//new text!
//new text!
//new text!
});

const story = document.querySelector('.story');

//'innerHTML' is a property
console.log(story.innerHTML);
//answer: &lt;p&gt;this is the story 'p'&lt;/p&gt;

//replace the innerHTML
story.innerHTML = '&lt;h2&gt;this is a new h2&lt;/h2&gt;';

console.log(story.innerHTML);
//answer: &lt;h2&gt;this is a new h2&lt;/h2&gt;

//add to the innerHTML
story.innerHTML += '&lt;h4&gt;this is a h4 added to the story&lt;/h4&gt;';

console.log(story.innerHTML);
//anwser:
//&lt;h2&gt;this is a new h2&lt;/h2&gt;
//&lt;h4&gt;this is a h4 added to the story&lt;/h4&gt;

//querying a database (array in this case) and add [+=] the results to the 'div' class 'story'
const people = ['frank', 'joseph', 'mary'];

people.forEach(person =&gt; {
  story.innerHTML += `&lt;p&gt;${person}&lt;/p&gt;`;
});
console.log(story.innerHTML);
//answer:
//&lt;h2&gt;this is a new h2&lt;/h2&gt;
//&lt;h4&gt;this is a h4 added to the story&lt;/h4&gt;
//&lt;p&gt;frank&lt;/p&gt;
//&lt;p&gt;joseph&lt;/p&gt;
//&lt;p&gt;mary&lt;/p&gt;</code></pre>
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