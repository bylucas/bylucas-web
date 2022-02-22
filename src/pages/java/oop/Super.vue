<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Super()</h3>
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

class Admin extends User {
 constructor(username, email, title){
  super(username, email);
  this.title = title;
 }
 deleteUser(user){
  users = users.filter(u => u.username !== user.username);
  return this; // allow method chaining
 }
}

const userOne = new User('peter', 'peter@me.com');
const userTwo = new User('john', 'john@me.com');
const userThree = new Admin('frank', 'frank@me.com', 'Administrator');

console.log(userOne, userThree);
//answer:
//User {username: "peter", email: "peter@me.com", score: 0}
//__proto__: Object
//constructor: class User
//incScore: ƒ incScore()
//login: ƒ login()
//logout: ƒ logout()

//Admin {username: "frank", email: "frank@me.com", score: 0, title: "Administrator"}
//proto__: User
//constructor: class Admin
//deleteUser: deleteUser(user){ users = users.filter(u => {…}
//__proto__: Object
//constructor: class User
//incScore: ƒ incScore()
//login: ƒ login()
//logout: ƒ logout()</code></pre>
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