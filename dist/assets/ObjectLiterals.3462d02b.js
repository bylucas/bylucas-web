import{_ as e}from"./index.58a79006.js";import{o as n,c as o,m as t}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},l={id:"n",class:"post-content"},r=t(`<h3 class="page-title">Object Literals</h3><blockquote><p>Objects are variables, that can contain many values. The values are written as name:value pairs (<em>name and value separated by a colon</em>).</p><p>You define (<em>and create</em>) a JavaScript object with an object literal</p><p>The name:values pairs in JavaScript objects are called properties</p><p>Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.</p><p>In a function definition, <strong>this</strong> refers to the &quot;owner&quot; of the function.</p></blockquote><pre><code class="lang-js">//surround objects with curly braces
//objects contain key value pairs
//key = name: value = &#39;fred&#39;
//place each property on a new line for better reading
let user = {
 name: &#39;fred&#39;,//key value pair
 age: 30,
 email: &#39;fred@me.com&#39;,
 location: &#39;london&#39;,
 blogs: [&#39;all the worlds a stage&#39;, &#39;tomorrow never comes&#39;]
};

console.log(user);
//answer: name: &quot;fred&quot;, age: 30, email: &quot;fred@me.com&quot;, location: &quot;london&quot;, blogs: Array(2) [&#39;all the worlds a stage&#39;, &#39;tomorrow never comes&#39;]

//access properties with dot notation
console.log(user.name);
//answer: fred

//change the properties
user.name = &#39;john&#39;;
console.log(user.name);
//answer: john

//access using brackets
user[&#39;name&#39;] = &#39;eric&#39;;
console.log(user[&#39;name&#39;]);
//answer: eric

//brackets advantage is you can use variables which isn&#39;t possible with dot notation:
const key = &#39;location&#39;;

console.log(user[key]);
//answer: london

console.log(user.key);
//answer: undefined
//will not work with dot notation


//adding methods
let user2 = {
 name: &#39;fred&#39;,//key value pair
 age: 30,
 email: &#39;fred@me.com&#39;,
 location: &#39;london&#39;,
 blogs: [&#39;all the worlds a stage&#39;, &#39;tomorrow never comes&#39;],
//Methods
 login: function() {
  console.log(&#39;user 2 logged in&#39;)
 },

 logout: function() {
  console.log(&#39;user 2 logged out&#39;)  
 }
};//user

//methods are functions on objects
user2.login();//answer: the user logged in
user2.logout();//answer: the user logged out

//[this] key word
//in order to access the blogs array we need to use the [this] key word
let user3 = {
 name: &#39;fred&#39;,
 age: 30,
 email: &#39;fred@me.com&#39;,
 location: &#39;london&#39;,
 blogs: [&#39;all the worlds a stage&#39;, &#39;tomorrow never comes&#39;],
//Methods
 login: function() {
  console.log(&#39;user 3 logged in&#39;)
 },

 logout: function() {
  console.log(&#39;user 3 logged out&#39;)  
 },

//access the blogs using the [this] keyword
//arrow function will not work here with [this] keyword use normal function
 logBlogs: function() {
 console.log(this.blogs);
 //answer: [&quot;all the worlds a stage&quot;, &quot;tomorrow never comes&quot;]
 
 //we can list the blogs using an arrow function and the forEach method
 this.blogs.forEach(blog =&gt; {
  console.log(blog);
 });
 }
};//user3

user3.logBlogs();
//answer:
//all the worlds a stage
//tomorrow never comes

//the [this] keyword is local to the user object
//logBlogs must be a normal function for the [this] keyword to work


//the functions can still be shortened and still allow us to use the [this] keyword inside the functions when using objects
let user4 = {
 name: &#39;fred&#39;,
 age: 30,
 email: &#39;fred@me.com&#39;,
 location: &#39;london&#39;,
 blogs: [&#39;all the worlds a stage&#39;, &#39;tomorrow never comes&#39;],
 //shorthand
 login() {
  console.log(&#39;user 4 logged in&#39;)
 },

 logout() {
  console.log(&#39;user 4 logged out&#39;)  
 },

 logBlogs() {
  this.blogs.forEach(blog =&gt; {
   console.log(blog);
  });
 }
};//user4

user4.logBlogs();
//answer:
//all the worlds a stage
//tomorrow never comes


//storing objects in arrays

//quick example
const blogs = [
{title: &#39;all the worlds a stage&#39;, likes: 30},
{title: &#39;tomorrow never comes&#39;, likes: 10}
]

console.log(blogs);
//answer:
//0: {title: &quot;all the worlds a stage&quot;, likes: 30}
//1: {title: &quot;tomorrow never comes&quot;, likes: 10}


//Put the blogs into our user example
let user5 = {
 name: &#39;fred&#39;,
 age: 30,
 email: &#39;fred@me.com&#39;,
 location: &#39;london&#39;,
 //objects in arrays
 blogs: [
  {title: &#39;all the worlds a stage&#39;, likes: 30},
  {title: &#39;tomorrow never comes&#39;, likes: 10}
 ],
    
 login() {
  console.log(&#39;user 5 logged in&#39;)
 },

 logout() {
  console.log(&#39;user 5 logged out&#39;)  
 },

 logBlogs() {
  this.blogs.forEach(blog =&gt; {
   console.log(blog.title, blog.likes);
  });
 }
};//user5

user5.logBlogs();
//answer:
//all the worlds a stage 30
//tomorrow never comes 10</code></pre><hr>`,4),a=[r];function i(c,g,u,d,h,m){return n(),o("div",l,a)}var f=e(s,[["render",i]]);export{f as default};
