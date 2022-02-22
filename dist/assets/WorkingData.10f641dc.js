import{_ as n}from"./index.d81d2172.js";import{o as t,c as o,a as e}from"./vendor.8c156a9e.js";const c={mounted(){Prism.highlightAll()}},i={id:"n",class:"post-content"},d=e("h3",{class:"page-title"},"Working with Data",-1),s=e("blockquote",null,[e("p",null,"ONE - Getting, Adding and Deleting Data")],-1),a=e("pre",null,[e("code",{class:"lang-js"},`const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => {
 let time = recipe.created_at.toDate();
 let html = \`
  <li data-id="\${id}">
   <div>\${recipe.title}</div>
   <div><small>\${time}</small></div>
   <button>delete</button>
  </li>
\`;

 list.innerHTML += html;
};

// get documents
db.collection('recipes').get().then(snapshot => {
 snapshot.docs.forEach(doc => {
  addRecipe(doc.data(), doc.id);
 });
}).catch(err => {
 console.log(err);
});

// save documents
form.addEventListener('submit', e => {
 e.preventDefault();

 const now = new Date();
 const recipe = {
  title: form.recipe.value,
  created_at: firebase.firestore.Timestamp.fromDate(now)
 };

 db.collection('recipes').add(recipe).then(() => {
  console.log('recipe added');
 }).catch(err => {
  console.log(err);
 });
});

// deleting data
list.addEventListener('click', e => {
 if(e.target.tagName === 'BUTTON'){
  const id = e.target.parentElement.getAttribute('data-id');
   console.log(id);
   db.collection('recipes').doc(id).delete().then(() => {
   console.log('recipe deleted');
  });
 }
});`)],-1),l=e("hr",null,null,-1),r=[d,s,a,l];function p(m,u,h,_,g,f){return t(),o("div",i,r)}var D=n(c,[["render",p]]);export{D as default};
