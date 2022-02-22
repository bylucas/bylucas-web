<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Working with Data</h3>
<blockquote>
<p>ONE - Getting, Adding and Deleting Data</p>
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