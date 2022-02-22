<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Object Literal Recap</h3>
<blockquote>
<p>to come</p>
</blockquote>
<pre><code class="lang-js">const userOne = {
 username: 'peter',
 email: 'peter@me.com',
 login(){
  console.log('the user logged in');
  },
 logout(){
  console.log('the user logged out');
 }
};

console.log(userOne.email, userOne.username);
userOne.login();
userOne.logout();
//answer: peter@me.com peter
//the user logged in
//the user logged out

const userTwo = {
 username: 'john',
 email: 'john@me.com',
 login(){
  console.log('the user logged in');
 },
 logout(){
  console.log('the user logged out');
 }
};

console.log(userTwo.email, userTwo.username);
userTwo.login();
//answer: john@me.com john
//the user logged in

//see if we can make a new User?
const userThree = new User('frank', 'frank@me.com');

console.log(userThree.email, userThree.name);
//answer: error: User is not defined
//enter Classes</code></pre>
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