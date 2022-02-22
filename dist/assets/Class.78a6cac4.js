import{_ as s}from"./index.d81d2172.js";import{o as n,c as t,a as e}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},c=e("h3",{class:"page-title"},"Classes",-1),a=e("blockquote",null,[e("p",null,"to come")],-1),l=e("pre",null,[e("code",{class:"lang-js"},`//Class Constructors
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
//User\xA0{username: "peter", email: "peter@me.com"}
//User\xA0{username: "john", email: "john@me.com"}
//proto__:
//constructor: class User

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object`)],-1),i=e("hr",null,null,-1),m=[c,a,l,i];function u(h,_,d,p,j,f){return n(),t("div",r,m)}var U=s(o,[["render",u]]);export{U as default};
