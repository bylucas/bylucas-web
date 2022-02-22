import{_ as n}from"./index.58a79006.js";import{o,c as s,a as e}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},l=e("h3",{class:"page-title"},"Constructors (under the hood)",-1),c=e("blockquote",null,[e("p",null,"How classes work")],-1),a=e("pre",null,[e("code",{class:"lang-js"},`//Class
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
  console.log(\`\${this.username} has logged in\`);
 };
}

const userOne = new User('peter', 'peter@me.com');
const userTwo = new User('john', 'john@me.com');

console.log(userOne, userTwo);
userOne.login();
//answer:
//User\xA0{username: "peter", email: "peter@me.com", login: \u0192}
//User\xA0{username: "john", email: "john@me.com", login: \u0192}
//peter has logged in

//recap
// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object`)],-1),i=e("h4",null,"Prototype Model",-1),u=e("pre",null,[e("code",{class:"lang-js"},`function User(username, email){
 this.username = username;
 this.email = email;
}

User.prototype.login = function(){
 console.log(\`\${this.username} has logged in\`);
 return this;
};

User.prototype.logout = function(){
 console.log(\`\${this.username} has logged out\`);
 return this;
};

const userOne = new User('peter', 'peter@me.com');
const userTwo = new User('john', 'john@me.com');

console.log(userOne);
//answer:
//User\xA0{username: "peter", email: "peter@me.com"}
//__proto__: Object
// login: \u0192 ()
// logout: \u0192 ()
// constructor: \u0192 User(username, email)
// __proto__: Object

userOne.login().logout();
//answer:
//peter has logged in
//peter has logged out`)],-1),m=e("h4",null,"Prototypal Inheritance",-1),h=e("pre",null,[e("code",{class:"lang-js"},`function User(username, email){
 this.username = username;
 this.email = email;
}

User.prototype.login = function(){
 console.log(\`\${this.username} has logged in\`);
 return this;
};

User.prototype.logout = function(){
 console.log(\`\${this.username} has logged out\`);
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
//User\xA0{username: "peter", email: "peter@me.com"}
//__proto__: Object
//login: \u0192 ()
//logout: \u0192 ()
//constructor: \u0192 User(username, email)
//__proto__: Object
 
//Admin\xA0{username: "frank", email: "frank@me.com"}
//_proto__: User
//deleteUser: \u0192 (user)
//__proto__: Object
//login: \u0192 ()
//logout: \u0192 ()
//constructor: \u0192 User(username, email)
//__proto__: Object`)],-1),p=e("hr",null,null,-1),_=[l,c,a,i,u,m,h,p];function d(g,U,f,j,w,O){return o(),s("div",r,_)}var k=n(t,[["render",d]]);export{k as default};
