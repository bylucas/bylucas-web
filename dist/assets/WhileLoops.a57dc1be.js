import{_ as n}from"./index.d81d2172.js";import{o as e,c as t,a as o}from"./vendor.8c156a9e.js";const l={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},i=o("h3",{class:"page-title"},"While Loops",-1),a=o("blockquote",null,[o("p",null,"while loops as the name implies loop while the condition is true.")],-1),h=o("pre",null,[o("code",{class:"lang-js"},`//like the for loop, no semi-colon to end the code block

let i = 0;
//set the value outside the while loop code block

while(i < 5){//set the condition
 //do something
 console.log('loop: ', i);
  i++;//final expression - without this the loop would be infinite
}
//result:
//loop: 0
//loop: 1
//loop: 2
//loop: 3
//loop: 4

//most of the time you won't know the number of items in your source, ie. when accessing a database, so we find the total with .length

const names = ['peter', 'fred', 'john', 'mel', 'frank', 'martin'];

//it dosen't have to be i
let a = 0;
while(a < names.length){
console.log(names[a]);
  a++;
}
//result:
//peter
//fred
//john
//mel
//frank
//martin

//in this example i-- is i - 1
i = 8;
while(i > 5){
console.log('loop: ', i);
  i--;
}
//answer:
//loop: 8
//loop: 7
//loop: 6`)],-1),c=o("hr",null,null,-1),r=[i,a,h,c];function p(d,m,u,_,f,w){return e(),t("div",s,r)}var b=n(l,[["render",p]]);export{b as default};
