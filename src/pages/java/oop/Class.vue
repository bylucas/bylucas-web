<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Classes</h3>
<blockquote>
<p>to come</p>
</blockquote>
<pre><code class="lang-js">//Class Constructors
class User {
 constructor(username, email){
  this.username = username;
  this.email = email;
 }
}

const userOne = new User('peter', 'peter@me.com');
const userTwo = new User('john', 'john@me.com');

console.log(userOne, userTwo);
//answer: returns object User
//User {username: "peter", email: "peter@me.com"}
//User {username: "john", email: "john@me.com"}
//proto__:
//constructor: class User

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object</code></pre>
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