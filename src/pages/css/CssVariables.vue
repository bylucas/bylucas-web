<template>

<div id="n" class="post-content">

<h3 class="page-title">Variables</h3>
<blockquote>
 <p>CSS stands for Cascading Style Sheets</p>
</blockquote>
<pre><code class="lang-css">/*CSS custom properties - variables*/
/*Custom property names are case sensitive*/

:root {
/*Typography*/
--font-family: -apple-system, BlinkMacSystemFont,
 "Segoe UI", "Roboto", "Oxygen",
 "Ubuntu", "Cantarell", "Fira Sans",
 "Droid Sans", "Helvetica Neue", sans-serif;

 --font-weight--thin: 100;
 --font-weight--extra-light: 200;
 --font-weight--light: 300;
 --font-weight--normal: 400;

/*colors*/
 --primary-color: #8AEF8A;/*green*/
 --secondary-color: #E83A95;/*red*/

/*Size*/
 --big-size: 300px;
 --small-size: 100px;
}

.css-container {
  --border-color: blue;
  width: var(--big-size);
  height: var(--small-size);
  background: var(--primary-color);
  border: 2px solid var(--border-color);
}

.css-container p {
  font-family: var(--font-family);
  font-size: 18px;
  font-weight: var(--font-weight--light);
  color: var(--scondary-color);
}</code></pre>
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