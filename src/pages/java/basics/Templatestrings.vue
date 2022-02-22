<template>
 
<div id="n" class="post-content">


<h3 class="page-title">Template Strings</h3>
<blockquote>
<p>Concatenation (join together) or Template string? Below shows examples of both. Both are correct it's your choice which you prefer.</p>
</blockquote>
<pre><code class="lang-js">const title = 'Practical Fly Fishing';
const author = 'J R Harpur';
const likes = 30;

//concatenation way

let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

console.log(result);
//result: The blog called Practical Fly Fishing by J R Harpur has 30 likes


//template string way(``)

let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result2);
//result: The blog called Practical Fly Fishing by J R Harpur has 30 likes

//creating html templates
let html = `
 &lt;h2&gt;${title}&lt;/h2&gt;
 &lt;h3&gt;By ${author}&lt;/h3&gt;
 &lt;p&gt;This blog has ${likes} likes&lt;/p&gt;
`;

console.log(html);
//result:
//&lt;h2&gt;Practical Fly Fishing&lt;/h2&gt;
//&lt;h3&gt;By J R Harpur&lt;/h3&gt;
//&lt;p&gt;This blog has 30 likes&lt;/p&gt;</code></pre>

<hr>

</div>
</template>

<script>
export default {
  mounted() {
    Prism.highlightAll()
  }
}
</script>