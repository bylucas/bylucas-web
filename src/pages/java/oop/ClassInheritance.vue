<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Class Inheritance (subclasses)</h3>
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

//deleteUser only applies to Admin
class Admin extends User {
 deleteUser(user){
  users = users.filter(u => u.username !== user.username);
  return this; // allow method chaining
 }
}

const userOne = new User('peter', 'peter@me.com');
const userTwo = new User('john', 'john@me.com');
const userThree = new Admin('frank', 'frank@me.com');

console.log(userOne, userTwo, userThree);
//answer: object
//User {username: "peter", email: "peter@me.com", score: 0}
//User {username: "john", email: "john@me.com", score: 0}
//Admin {username: "frank", email: "frank@me.com", score: 0}

let users = [userOne, userTwo, userThree];
console.log(users);
//answer: array, object
//[User, User, Admin]
//0: User {username: "peter", email: "peter@me.com", score: 0}
//1: User {username: "john", email: "john@me.com", score: 0}
//2: Admin {username: "frank", email: "frank@me.com", score: 0}

userThree.deleteUser(userTwo);
console.log(users);
//answer: array, object
//[User, Admin]
//0: User {username: "peter", email: "peter@me.com", score: 0}
//1: Admin {username: "frank", email: "frank@me.com", score: 0}</code></pre>
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