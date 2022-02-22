import{_ as n}from"./index.58a79006.js";import{o as t,c as o,a as e}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},l={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Callback Function",-1),c=e("blockquote",null,[e("p",null,"to come")],-1),r=e("pre",null,[e("code",{class:"lang-js"},`const getTodos = (callback) => {

 const request = new XMLHttpRequest();

 request.addEventListener('readystatechange', () => {

 if(request.readyState === 4 && request.status === 200){
  callback(undefined, request.responseText);
  } else if (request.readyState === 4){
  callback('could not fetch the data', undefined);
  }
});
  
 request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
 request.send();

};

console.log(1);
console.log(2);

//callback function
//resolves after 'console.log(4);'
getTodos((err, data) => {
console.log('callback function fired');
 
 if(err){
 console.log(err);
 } else {
 console.log(data);
 }
});

console.log(3);
console.log(4);
//part answer:
//1
//2
//3
//4
//callback function fired
//[
// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// },...more data available`)],-1),d=e("hr",null,null,-1),i=[a,c,r,d];function u(p,_,f,h,g,m){return t(),o("div",l,i)}var b=n(s,[["render",u]]);export{b as default};
