import{_ as n}from"./index.d81d2172.js";import{o,c as s,a as e}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Class Methods and Method Chaining",-1),c=e("blockquote",null,[e("p",null,"to come")],-1),l=e("pre",null,[e("code",{class:"lang-js"},`class User {
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
 .incScore()//answer: peter has a score of 3`)],-1),i=e("hr",null,null,-1),u=[a,c,l,i];function h(g,d,m,_,p,j){return o(),s("div",r,u)}var $=n(t,[["render",h]]);export{$ as default};
