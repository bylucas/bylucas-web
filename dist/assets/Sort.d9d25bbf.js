import{_ as n}from"./index.d81d2172.js";import{o as s,c as o,a as e}from"./vendor.8c156a9e.js";const r={mounted(){Prism.highlightAll()}},t={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Sort Method",-1),c=e("blockquote",null,[e("p",null,"Alters the array therefore destructive")],-1),l=e("pre",null,[e("code",{class:"lang-js"},`// example 1 - sorting strings

const names = ['john', 'paul', 'eric', 'jane', 'sarah'];

names.sort();//sorts alphabetically
console.log(names);
//result: ["eric", "jane", "john", "paul", "sarah"]

names.reverse();//reverses names
console.log(names);
//result: ["sarah", "jane", "eric", "paul", "john"]

// example 2 - sorting numbers

const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort();
console.log(scores);
//sorts the numbers low to high but only reads the first number
//result: notice the 5 [10, 20, 35, 45, 5, 50, 70]

scores.reverse();
console.log(scores);
//reverses the numbers order as written
//result: [70, 50, 5, 45, 35, 20, 10]

// example 3 - sorting objects

const players = [
  {name: 'hugo', score: 20},
  {name: 'mary', score: 10},
  {name: 'sam', score: 50},
  {name: 'mike', score: 30},
  {name: 'tom', score: 70}
];

//compares a,b and works out as below
//long version
//players.sort((b,a) - reverse
players.sort((a,b) => {
  if(a.score > b.score){
    return -1;
  } else if (b.score > a.score){
    return 1;
  } else {
    return 0;
  }
});

//short version
players.sort((a,b) => b.score - a.score);

console.log(players);
//result:
//0: {name: "tom", score: 70}
//1: {name: "sam", score: 50}
//2: {name: "mike", score: 30}
//3: {name: "hugo", score: 20}
//4: {name: "mary", score: 10}}`)],-1),m=e("hr",null,null,-1),i=[a,c,l,m];function h(u,p,d,_,g,b){return s(),o("div",t,i)}var j=n(r,[["render",h]]);export{j as default};
