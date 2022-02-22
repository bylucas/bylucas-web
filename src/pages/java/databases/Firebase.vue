<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Firebase</h3>
<blockquote>
<p>Setup Firebase</p>
<p>Only setup firebase core and firestore</p>
</blockquote>

<pre><code class="lang-html">&lt;!-- html --&gt;
&lt;h2&gt;Recipes&lt;/h2&gt;
&lt;ul&gt;&lt;/ul&gt;
 &lt;form&gt;
  &lt;label for="recipe"&gt;Add a new recipe:&lt;/label&gt;
   &lt;div class="input-group"&gt;
    &lt;input type="text" id="recipe" required&gt;
    &lt;div class="append"&gt;
     &lt;input type="submit" value="add"&gt;
    &lt;/div&gt;
   &lt;/div&gt;
 &lt;/form&gt;
&lt;button class="unsub"&gt;Unsubscribe from changes&lt;/button&gt;</code></pre>

<pre><code class="lang-js">//setup firebase
&lt;script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"&gt;&lt;/script&gt;
&lt;script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-firestore.js"&gt;&lt;/script&gt;
&lt;script&gt;

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "???",
  authDomain: "???",
  databaseURL: "???",
  projectId: "???",
  storageBucket: "???",
  messagingSenderId: "???",
  appId: "???"
 };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore(); </code></pre>
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