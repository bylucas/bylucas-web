import{_ as n}from"./index.58a79006.js";import{o,c as s,a as e}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Rest Parameters",-1),l=e("blockquote",null,[e("p",null,"Bundles into a single array")],-1),c=e("pre",null,[e("code",{class:"lang-js"},`//if we don't know how many different parameters use rest parameter (...parameter)
const double = (...nums) => {
 console.log(nums);
//answer: [1, 3, 5, 7, 2, 4, 6, 8]
 return nums.map(num => num*2);//double the numbers - const result
};

const result = double(1,3,5,7,2,4,6,8);
console.log(result);
//answer: [2, 6, 10, 14, 4, 8, 12, 16]

//spread syntax (arrays)
//spread works opposite to rest parameter
//use to spread out the array into individual components
const people = ['fred', 'john', 'michael'];
const members = ['hugo', 'len', ...people];
console.log(members);
//answer: ["hugo", "len", "fred", "john", "michael"]

//spread syntax (objects)
const person = { name: 'fred', age: 30, job: 'baker' };
const personClone = { ...person, location: 'manchester' };
console.log(person, personClone);
//answer:
//{name: "fred", age: 30, job: "baker"}
//{name: "fred", age: 30, job: "baker", location: "manchester"}`)],-1),d=e("hr",null,null,-1),m=[a,l,c,d];function p(i,u,h,_,f,b){return o(),s("div",r,m)}var k=n(t,[["render",p]]);export{k as default};
