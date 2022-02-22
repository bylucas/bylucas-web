import{_ as t}from"./index.d81d2172.js";import{o as n,c as o,a as e}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},r=e("h3",{class:"page-title"},"Async and Await",-1),l=e("blockquote",null,[e("p",null,"Not accepted in all browsers eg. Internet Explorer")],-1),c=e("pre",null,[e("code",{class:"lang-js"},`const getTodos = async () => {

 let response = await fetch('json/blue.json');

 if(response.status !== 200){
 //new error
 throw new Error('cannot fetch the data');
  }

//parses json file
 let data = await response.json();
  return data;
};

getTodos()
 .then(data => console.log('resolved:', data))
//answer: resolved:
//0: {text: "The color Blue", author: "Blue"}
//1: {text: "Blue Box", author: "Blue"}
//2: {text: "I see Blue", author: "Blue"}
 
 .catch(err => console.log('rejected:', err.message));
//answer: if let response = await fetch('json/blueee.json');
//rejected: cannot fetch the data`)],-1),d=e("hr",null,null,-1),i=[r,l,c,d];function h(u,_,p,f,j,g){return n(),o("div",a,i)}var m=t(s,[["render",h]]);export{m as default};
