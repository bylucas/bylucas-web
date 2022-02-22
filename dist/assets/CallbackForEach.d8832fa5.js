import{_ as e}from"./index.d81d2172.js";import{o as l,c as o,a as n}from"./vendor.8c156a9e.js";const t={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},c=n("h3",{class:"page-title"},"Callback and forEach",-1),r=n("blockquote",null,[n("p",null,"Functions taking functions as arguments are called 'callback functions'. ForEach is a method that expects a callback function")],-1),s=n("pre",null,[n("code",{class:"lang-js"},`//callback functions
//long example of callback function
const myFunc = (callbackFunc) => {
 //do something
 let value = 100;//simple example
 callbackFunc(value);
}

//pass callback function into another function
myFunc(function(value) {
 //do something
 console.log(value);
})
//answer: 100

//shorten to arrow function
myFunc(value => {
 //do something
 console.log(value);
});
//answer: 100


//another example
//regular function
function greeting(name) {
 console.log('Hello ' + \`\${name}\`)
}

//arrow function
greeting = (name => {
 console.log('Hello ' + \`\${name}\`)
})

//regular callback function
function user(callback) {
 let name = 'John';
 callback(name);
}

//arrow callback function
user = (callback => {
 let name = 'John';
 callback(name);
})

//evoke the two functions
user(greeting);
//answer: Hello John


//forEach

let people = ['peter', 'fred', 'john', 'mel', 'george'];

//built-in array method forEach
people.forEach(function() {
 //do something
});

//add parameters
//in this example person is a singular value of people. The 'person' value can be given any name eg. 'x'. The forEach iterates through the array values
people.forEach(function(person) {
 //do something
});

//convert to arrow function
people.forEach(person => {
 //do something
});

//make callback function
//console.log the value of each person and the index property
const logPerson = (person, index) => {
 console.log(\`\${index} - hello \${person}\`);
};<>

//evoke logPerson
people.forEach(logPerson);
//answer:
//0 - hello peter
//1 - hello fred
//2 - hello john
//3 - hello mel
//4 - hello george


//outputting to the dom
//select an element from the dom
const ul = document.querySelector('ul');

//prepare an empty template
let html = \`\`;

//make the callback
people.forEach(person => {
 //create html template for each person
 html += \`<li style="color: purple">\${person}</li>\`; 
});

console.log(html);
//answer:
//<li style="color: purple">peter</li>
//<li style="color: purple">fred</li>
//<li style="color: purple">john</li>
//<li style="color: purple">mel</li>
//<li style="color: purple">george</li>

//display the html template
ul.innerHTML = html; 
//inspect elements
//<ul>
//<li style="color: purple">peter</li>
//<li style="color: purple">fred</li>
//<li style="color: purple">john</li>
//<li style="color: purple">mel</li>
//<li style="color: purple">george</li>
//</ul>`)],-1),i=n("hr",null,null,-1),p=[c,r,s,i];function u(h,m,f,g,d,k){return l(),o("div",a,p)}var b=e(t,[["render",u]]);export{b as default};
