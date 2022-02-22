import{_ as n}from"./index.58a79006.js";import{o as t,c as s,a as e,d as o}from"./vendor.8c156a9e.js";const l={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},r=e("h3",{class:"page-title"},"Loose and Strict Comparisons",-1),c=e("blockquote",null,[e("p",null,[e("em",null,"Loose Comparison"),o(" '==' allows us to compare two or more operands by converting their value to a common type first and then checking for the equality between them.")]),e("p",null,[e("em",null,"Strict Comparison"),o(" '===' allows us to compare two or more operands by checking the equality between the values as well as their types . It returns true only if the values and the type both match with the other operand.")])],-1),i=e("pre",null,[e("code",{class:"lang-js"},`let age = 25;

//loose comparison (different types can still be equal)

console.log('1', age == 25);
//result: true

console.log('2', age == '25');
//result: true

console.log('3', age != 25);
//result: false

console.log('4', age != '25');
//result: false


//strict comparison (different types cannot be equal)

console.log('5', age === 25);
//result: true

console.log('6', age === '25');
//result: false

console.log('7', age !== 25);
//result: false

console.log('8', age !== '25');
//result: true`)],-1),u=e("hr",null,null,-1),p=[r,c,i,u];function h(d,g,m,_,f,y){return t(),s("div",a,p)}var v=n(l,[["render",h]]);export{v as default};
