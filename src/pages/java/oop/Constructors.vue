<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Constructors (under the hood)</h3>
<blockquote>
<p>How classes work</p>
</blockquote>
<pre><code class="lang-js">//Class
class User {
 constructor(username){
  this.username = username;
 }
}

//constructor functions
function User(username, email){
 this.username = username;
 this.email = email;
 this.login = function(){
  console.log(`${this.username} has logged in`);
 };
}

const userOne = new User('peter', 'peter@me.com');
const userTwo = new User('john', 'john@me.com');

console.log(userOne, userTwo);
userOne.login();
//answer:
//User {username: "peter", email: "peter@me.com", login: ƒ}
//User {username: "john", email: "john@me.com", login: ƒ}
//peter has logged in

//recap
// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object</code></pre>

<h4>Prototype Model</h4>
<pre><code class="lang-js">function User(username, email){
 this.username = username;
 this.email = email;
}

User.prototype.login = function(){
 console.log(`${this.username} has logged in`);
 return this;
};

User.prototype.logout = function(){
 console.log(`${this.username} has logged out`);
 return this;
};

const userOne = new User('peter', 'peter@me.com');
const userTwo = new User('john', 'john@me.com');

console.log(userOne);
//answer:
//User {username: "peter", email: "peter@me.com"}
//__proto__: Object
// login: ƒ ()
// logout: ƒ ()
// constructor: ƒ User(username, email)
// __proto__: Object

userOne.login().logout();
//answer:
//peter has logged in
//peter has logged out</code></pre>

<h4>Prototypal Inheritance</h4>
<pre><code class="lang-js">function User(username, email){
 this.username = username;
 this.email = email;
}

User.prototype.login = function(){
 console.log(`${this.username} has logged in`);
 return this;
};

User.prototype.logout = function(){
 console.log(`${this.username} has logged out`);
 return this;
};

//admin
function Admin(username, email){
 User.call(this, username, email);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user){
//delete the user
};

const userOne = new User('peter', 'peter@me.com');
const userTwo = new User('john', 'john@me.com');
const userThree = new Admin('frank', 'frank@me.com');

console.log(userOne, userThree);
//answer:
//User {username: "peter", email: "peter@me.com"}
//__proto__: Object
//login: ƒ ()
//logout: ƒ ()
//constructor: ƒ User(username, email)
//__proto__: Object
 
//Admin {username: "frank", email: "frank@me.com"}
//_proto__: User
//deleteUser: ƒ (user)
//__proto__: Object
//login: ƒ ()
//logout: ƒ ()
//constructor: ƒ User(username, email)
//__proto__: Object</code></pre>

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