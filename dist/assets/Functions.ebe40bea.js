import{_ as e}from"./index.58a79006.js";import{o,c as t,a as n}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},r=n("h3",{class:"page-title"},"Functions",-1),i=n("blockquote",null,[n("p",null,"A function is a block of code that is defined once but can be used multiple times")],-1),c=n("pre",null,[n("code",{class:"lang-js"},`//function declaration
function greet(){
 console.log('hello there');
}//no semi-colon
//these functions are hoisted to the top of the page so can be invoked before the function is read

//invoke (call) the function
greet();
//answer: hello there


//function expression
const speak = function(){
 console.log('good day!');
};//notice semi-colon
//these functions are NOT hoisted to the top of the page and will cause an error if invoked before being declared

speak();
//answer: good day!

//arguments & parameters
//name and time are local values scoped to this function
const spoke = function(name, time) {
 console.log(\`good \${time}, \${name}!\`);
};

spoke();
//answer: good undefined undefined!
//there are no default parameters set and no arguments

//arguments should be set in the correct order to match function parameters, if not:
spoke('night', 'peter');
//answer: good peter, night!

//should be:
spoke('peter', 'night');
//answer: good night, peter!

//default parameters
//values are still local to this function
const speaking = function(name = 'peter', time = 'night'){
 console.log(\`good \${time}, \${name}!\`);
};

speaking();
//uses default parameters
//answer: good night, peter!

//set new arguments to over-ride defaults
//aguments must be in the same order as the function parameters
speaking('john', 'morning');
//answer: good morning, john!

//uses default time parameter
speaking('fred');
//answer: good night, fred!

 

//return values
//the area value is stored local
const calcArea = function(radius){
 let area = 3.14 * radius**2;
  return area;
}

//store the return value in a variable so it can be used whenever
const area = calcArea(5);
console.log('area is:', area);
//answer: 78.5
//3.14 x 5 x 5

//remove the local value and return directly
const calcArea2 = function(radius){
 return 3.14 * radius**2;
}

const area2 = calcArea2(5);
console.log('area is:', area2);
//answer: 78.5


const sum = function(a,b,c) {
 return a + b * c;
}

const sums = sum(2,3,4);

console.log(sums);
//answer: 14
//how: B I D M A S: 3 x 4 + 2 - see numbers`)],-1),l=n("hr",null,null,-1),u=[r,i,c,l];function d(h,m,g,p,f,_){return o(),t("div",a,u)}var v=e(s,[["render",d]]);export{v as default};
