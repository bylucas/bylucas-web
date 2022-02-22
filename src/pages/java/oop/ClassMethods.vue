<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Class Methods and Method Chaining</h3>
<blockquote>
<p>to come</p>
</blockquote>
<pre><code class="lang-js">class User {
 constructor(username, email){
  this.username = username;
  this.email = email;
  this.score = 0;
  }
 login(){
  console.log(`${this.username} just logged in`);
   return this;
  }
 logout(){
  console.log(`${this.username} just logged out`);
   return this;
  }
 incScore(){
  this.score += 1;
   console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

const userOne = new User('peter', 'peter@me.com');
const userTwo = new User('john', 'john@me.com');

userOne.login();//answer: peter just logged in
userOne.logout();//answer: peter just logged out
userTwo.login();//answer: john just logged in
userTwo.logout();////answer: john just logged out

userTwo.login()//answer: john just logged in
 .incScore()//answer: john has a score of 1
 .incScore()//answer: john has a score of 2
 .logout();//answer: john just logged out

userOne.incScore()//answer: peter has a score of 1
 .incScore()//answer: peter has a score of 2
 .incScore()//answer: peter has a score of 3</code></pre>
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