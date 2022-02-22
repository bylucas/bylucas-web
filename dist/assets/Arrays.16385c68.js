import{_ as n}from"./index.d81d2172.js";import{o,c as l,a as e}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},r=e("h3",{class:"page-title"},"Arrays",-1),a=e("blockquote",null,[e("p",null,"An array is a special variable, which can hold more than one value at a time.")],-1),p=e("pre",null,[e("code",{class:"lang-js"},`let people = ['peter', 'john', 'mike'];

console.log(people);
//result:["peter", "john", "mike"]

people[1] = 'ken';
console.log(people);
//result:["peter", "ken", "mike"]

console.log(people[1]);
//answer: ken

let ages = [20, 25, 30, 35];
console.log(ages[2]);
//answer: 30
//arrays count from 0

//mixed values
//not good practice but does work
let random = ['frank', 'jane', 30, 20];
console.log(random);
//result: ["frank", "jane", 30, 20]

//array length
console.log(people.length);
//result: 3


//common array methods

//join arrays with ','
let result = people.join(',');
console.log(result);
//result: peter,ken,mike

//join arrays with '-'
let result1 = people.join('-');
console.log(result1);
//result: peter-ken-mike

let result2 = people.indexOf('mike');
console.log(result2);
//result: 2

let result3 = people.concat(['mel', 'jane']);
console.log(result3);
//result: ["peter", "ken", "mike", "mel", "jane"]

//The push() method adds new items to the end of an array, and returns the new length.
let result4 = people.push('robert');
console.log(result4);
// result: 4

let result5 = people;
console.log(result5);
//result: ["peter", "ken", "mike", "robert"]

//The pop() method removes the last element of an array, and returns that element.
let result6 = people.pop();
console.log(result6);
//result: robert

let result7 = people
console.log(result7);
//result: ["peter", "ken", "mike"]

//accessing the last array element
let result8 = people[people.length - 1];
console.log(result8);
//result: mike`)],-1),c=e("hr",null,null,-1),u=[r,a,p,c];function i(h,m,d,g,k,_){return o(),l("div",s,u)}var y=n(t,[["render",i]]);export{y as default};
