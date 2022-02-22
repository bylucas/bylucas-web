<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Real Time Event Listeners</h3>
<blockquote>
<p>TWO - Real Time Event Listeners</p>
</blockquote>
<pre><code class="lang-js">const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => {
 let time = recipe.created_at.toDate();
 let html = `
  &lt;li data-id="${id}"&gt;
   &lt;div&gt;${recipe.title}&lt;/div&gt;
   &lt;div&gt;&lt;small&gt;${time}&lt;/small&gt;&lt;/div&gt;
   &lt;button&gt;delete&lt;/button&gt;
  &lt;/li&gt;
`;

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
});</code></pre>
<hr />
</div>
</template>

<script>

export default {

  mounted() {
    Prism.highlightAll()
  }
};
</script>