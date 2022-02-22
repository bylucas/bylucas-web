import{_ as n}from"./index.d81d2172.js";import{o as s,c as a,a as e}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},t={id:"n",class:"post-content"},r=e("h3",{class:"page-title"},"Sets",-1),l=e("blockquote",null,[e("p",null,"No duplicates allowed")],-1),c=e("pre",null,[e("code",{class:"lang-js"},`const namesArray = ['fred', 'peter', 'fred', 'len'];
console.log(namesArray);
//answer: ["fred", "peter", "fred", "len"] - normal array

//new Set
const namesSet = new Set(['fred', 'john', 'fred', 'michael']);
console.log(namesSet);
//answer: set(3) {"fred", "john", "michael"} //no duplicates
// or use const namesSet = new Set(namesArray);
//answer: set(3) {"fred", "peter", "len"} //no duplicates

//const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);
//answer: (3)\xA0["fred", "john", "michael"] - 1st const uniqueNames
//answer: (3) ["fred", "peter", "len"] - 2nd const uniqueNames

//set methods - chainable
const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);//no dulicates
console.log(ages, ages.size);//.size like .length
//answer: {20, 25, 30} 3

//remove 30
ages.delete(30)
console.log(ages.has(30), ages.has(20));//.has - boolean
//answer: false true

//clear the set
ages.clear();
console.log(ages);
//answer: {}

const people = new Set([
 {name: 'fred', age: 30},
 {name: 'luc', age: 29},
 {name: 'martin', age: 32}
]);

people.forEach(person => {
 console.log(person.name, person.age);
});
//answer:
//fred 30
//luc 29
//martin 32`)],-1),d=e("hr",null,null,-1),i=[r,l,c,d];function m(u,g,p,h,f,_){return s(),a("div",t,i)}var N=n(o,[["render",m]]);export{N as default};
