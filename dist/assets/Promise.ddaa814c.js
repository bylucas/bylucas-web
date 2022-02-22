import{_ as n}from"./index.58a79006.js";import{o as t,c as o,a as e}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Using promise",-1),l=e("blockquote",null,[e("p",null,"Use promise instead of callback")],-1),d=e("pre",null,[e("code",{class:"lang-js"},`//promise example

const getSomething = () => {

 return new Promise((resolve, reject) => {
 //do something (fetch data)
   resolve('some data');
   reject('some error');
  });
};

 getSomething().then(data => {
  console.log('promise resolved:', data);
}, err => {
  console.log('promise rejected:', err);
});
//answer: promise resolved: some data

 getSomething().then(data => {
  console.log('promise resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});
//answer: promise resolved: some data`)],-1),c=e("pre",null,[e("code",{class:"lang-js"},`//Using promise
const getTodos = (resource) => {

 return new Promise((resolve, reject) => {
 const request = new XMLHttpRequest();

 request.addEventListener('readystatechange', () => {
  
  if(request.readyState === 4 && request.status === 200){
   const data = JSON.parse(request.responseText);
    resolve(data);
    } else if (request.readyState === 4){
    reject('could not fetch the data');
    }
 });
    
 request.open('GET', resource);
 request.send();
 });
};

getTodos('json/blue.json').then(data => {
  console.log('promise resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});
//answer:
//promise resolved:
//0: {text: "The color Blue", author: "Blue"}
//1: {text: "Blue Box", author: "Blue"}
//2: {text: "I see Blue", author: "Blue"}`)],-1),u=e("h4",null,"Chaining Promise",-1),i=e("pre",null,[e("code",{class:"lang-js"},`const getTodos = (resource) => {

 return new Promise((resolve, reject) => {
 const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
  
   if(request.readyState === 4 && request.status === 200){
    const data = JSON.parse(request.responseText);
     resolve(data);
     } else if (request.readyState === 4){
     reject('could not fetch the data');
     }
  });
    
  request.open('GET', resource);
  request.send();
  });
};

//chaining promise is better than callbacks
getTodos('json/blue.json').then(data => {
  console.log('promise 1 resolved:', data);
//answer: promise 1 resolved:
//0: {text: "The color Blue", author: "Blue"}
//1: {text: "Blue Box", author: "Blue"}
//2: {text: "I see Blue", author: "Blue"}
  
  return getTodos('json/green.json');
}).then(data => {
  console.log('promise 2 resolved:', data);
//answer: promise 2 resolved:
//0: {text: "The color Green", author: "Green"}
//1: {text: "Green Box", author: "Green"}
//2: {text: "I see Green", author: "Green"}
  
  return getTodos('json/red.json');
}).then(data => {
  console.log('promise 3 resolved:', data);
//answer: promise 3 resolved:
//0: {text: "The color Red", author: "Red"}
//1: {text: "Red Box", author: "Red"}
//2: {text: "I see Red", author: "Red"}

}).catch(err => {
  console.log('promise rejected:', err);
//answer: if return getTodos('json/greeneee.json');
//promise 1 resolved:
//0: {text: "The color Blue", author: "Blue"}
//1: {text: "Blue Box", author: "Blue"}
//2: {text: "I see Blue", author: "Blue"}
//promise rejected: could not fetch the data`)],-1),h=e("hr",null,null,-1),p=[a,l,d,c,u,i,h];function m(g,_,x,j,B,v){return t(),o("div",r,p)}var T=n(s,[["render",m]]);export{T as default};
