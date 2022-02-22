import{_ as s}from"./index.d81d2172.js";import{o as t,c as n,a as e}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},i=e("h3",{class:"page-title"},"Else If Statements",-1),l=e("blockquote",null,[e("p",null,"Using else if we can offer feedback to users even if the conditions are false.")],-1),r=e("pre",null,[e("code",{class:"lang-js"},`const password = 'p@ssword123456';

if(password.length >= 12){

console.log('that password is mighty strong');

} else if(password.length >= 8){

console.log('that password is long enough');

} else {

console.log('password should be at least 8 characters long');
}
//answer: that password is mighty strong

//the above if statement runs through the if statement checking if the condition is true, if not it runs through the else if statement and checks if the condition is true. finally if both conditions are false then it will fire the else (fallback) condition. the user will always see a result.`)],-1),c=e("hr",null,null,-1),h=[i,l,r,c];function d(f,u,p,_,g,m){return t(),n("div",a,h)}var b=s(o,[["render",d]]);export{b as default};
