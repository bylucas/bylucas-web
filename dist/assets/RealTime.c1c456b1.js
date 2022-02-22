import{_ as n}from"./index.58a79006.js";import{o as t,c as o,a as e}from"./vendor.8c156a9e.js";const c={mounted(){Prism.highlightAll()}},i={id:"n",class:"post-content"},s=e("h3",{class:"page-title"},"Real Time Event Listeners",-1),d=e("blockquote",null,[e("p",null,"TWO - Real Time Event Listeners")],-1),l=e("pre",null,[e("code",{class:"lang-js"},`const list = document.querySelector('ul');
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

const deleteRecipe = (id) => {
 const recipes = document.querySelectorAll('li');
  recipes.forEach(recipe => {
   if(recipe.getAttribute('data-id') === id){
    recipe.remove();
   }
 });
};

// real-time listener
db.collection('recipes').onSnapshot(snapshot => {
 console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
   const doc = change.doc;
    if(change.type === 'added'){
    // console.log(doc);
    addRecipe(doc.data(), doc.id)
   } else if (change.type === 'removed'){
     deleteRecipe(doc.id);
   }
 });
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
  //console.log('recipe added');
  form.reset();
 }).catch(err => {
  console.log(err);
 });
});

// deleting data
list.addEventListener('click', e => {
 if(e.target.tagName === 'BUTTON'){
  const id = e.target.parentElement.getAttribute('data-id');
  db.collection('recipes').doc(id).delete().then(() => {
  // console.log('recipe deleted');
  });
 }
});`)],-1),a=e("hr",null,null,-1),r=[s,d,l,a];function p(m,h,u,_,f,g){return t(),o("div",i,r)}var E=n(c,[["render",p]]);export{E as default};
