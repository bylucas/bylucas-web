import{_ as n}from"./index.d81d2172.js";import{o as s,c as o,a as e}from"./vendor.8c156a9e.js";const r={mounted(){Prism.highlightAll()}},t={id:"n",class:"post-content"},c=e("h3",{class:"page-title"},"Super()",-1),l=e("blockquote",null,[e("p",null,"to come")],-1),i=e("pre",null,[e("code",{class:"lang-js"},`class User {
 constructor(username, email){
  this.username = username;
  this.email = email;
  this.score = 0;
 }
 login(){
  console.log(\`\${this.username} just logged in\`);
   return this;
 }
 logout(){
  console.log(\`\${this.username} just logged out\`);
   return this;
 }
 incScore(){
  this.score += 1;
   console.log(\`\${this.username} has a score of \${this.score}\`);
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
//User\xA0{username: "peter", email: "peter@me.com", score: 0}
//__proto__: Object
//constructor: class User
//incScore: \u0192 incScore()
//login: \u0192 login()
//logout: \u0192 logout()

//Admin\xA0{username: "frank", email: "frank@me.com", score: 0, title: "Administrator"}
//proto__: User
//constructor: class Admin
//deleteUser: deleteUser(user){ users = users.filter(u => {\u2026}
//__proto__: Object
//constructor: class User
//incScore: \u0192 incScore()
//login: \u0192 login()
//logout: \u0192 logout()`)],-1),u=e("hr",null,null,-1),a=[c,l,i,u];function m(d,h,_,g,p,f){return s(),o("div",t,a)}var $=n(r,[["render",m]]);export{$ as default};
