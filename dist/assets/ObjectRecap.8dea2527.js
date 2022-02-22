import{_ as n}from"./index.58a79006.js";import{o,c as s,a as e}from"./vendor.8c156a9e.js";const r={mounted(){Prism.highlightAll()}},t={id:"n",class:"post-content"},l=e("h3",{class:"page-title"},"Object Literal Recap",-1),c=e("blockquote",null,[e("p",null,"to come")],-1),a=e("pre",null,[e("code",{class:"lang-js"},`const userOne = {
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
//enter Classes`)],-1),u=e("hr",null,null,-1),i=[l,c,a,u];function g(m,d,h,_,p,f){return o(),s("div",t,i)}var O=n(r,[["render",g]]);export{O as default};
