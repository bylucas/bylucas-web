import{_ as t}from"./index.d81d2172.js";import{o as n,c as s,a as e}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},c=e("h3",{class:"page-title"},"Fetch API",-1),l=e("blockquote",null,[e("p",null,'A newer way of calling data, "fetch API", built into javascript much simpler and quicker.')],-1),r=e("pre",null,[e("code",{class:"lang-js"},`//fetch API

fetch('json/blue.json').then(response => {
 console.log(response);
//answer: Response\xA0{type: "basic", url: "https://howardlucas.co.uk/json/blue.json", redirected: false, status: 200, ok: true,\xA0\u2026}

 return response.json();
  }).then(data => {
  console.log(data);
//0: {text: "The color Blue", author: "Blue"}
//1: {text: "Blue Box", author: "Blue"}
//2: {text: "I see Blue", author: "Blue"}
  
  }).catch(err => {
  console.log(err);
//answer: if fetch('json/blueeee.json')... 
//Response\xA0{type: "basic", url: "https://howardlucas.co.uk/json/blueeee.json", redirected: false, status: 404, ok: false,\xA0\u2026}
//SyntaxError: Unexpected token < in JSON at position 0
});`)],-1),u=e("hr",null,null,-1),i=[c,l,r,u];function d(h,p,_,f,j,m){return n(),s("div",a,i)}var k=t(o,[["render",d]]);export{k as default};
