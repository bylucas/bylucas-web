<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Todo List</h3>
<blockquote>
<p>to come</p>
</blockquote>
<pre><code class="lang-html">&lt;!-- html -- &gt;
&lt;div class="todo-box"&gt;
 &lt;form class="search"&gt;
   &lt;input type="text" name="search" placeholder="search todos" /&gt;
   &lt;/form&gt;

  &lt;ul class="todos"&gt;
  &lt;li&gt;
   &lt;span&gt;Dentist at 4pm&lt;/span&gt;
   &lt;span class="delete"&gt;&lt;/span&gt;
  &lt;/li&gt;
  
  &lt;li&gt;
    &lt;span&gt;Make Dinner&lt;/span&gt;
   &lt;span class="delete"&gt;&lt;/span&gt;
  &lt;/li&gt;
  
  &lt;li&gt;
   &lt;span&gt;Arrange Holiday&lt;/span&gt;
   &lt;span class="delete"&gt;&lt;/span&gt;
  &lt;/li&gt;
  &lt;/ul&gt;

  &lt;form class="add"&gt;
  &lt;input type="text" name="add" placeholder="Add a new todo..." /&gt;
  &lt;/form&gt;
&lt;/div&gt;</code></pre>

<pre><code class="lang-js">//js
const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
 const html = `
  &lt;li class="list-group-item d-flex justify-content-between align-items-center"&gt;
   &lt;span&gt;${todo}&lt;/span&gt;
   &lt;span class="delete"&gt;&lt;/span&gt;
  &lt;/li&gt;
  `;
  list.innerHTML += html;
};

const filterTodos = term => {

// add filtered class
Array.from(list.children)
 .filter(todo => !todo.textContent.toLowerCase().includes(term))
 .forEach(todo => todo.classList.add('filtered'));

// remove filtered class
Array.from(list.children)
 .filter(todo => todo.textContent.toLowerCase().includes(term))
 .forEach(todo => todo.classList.remove('filtered'));

};

// add todos event
addForm.addEventListener('submit', e => {
  
 e.preventDefault();
 const todo = addForm.add.value.trim();

 if(todo.length){
  generateTemplate(todo);
  addForm.reset();
  }

});

// delete todos event
list.addEventListener('click', e => {

 if(e.target.classList.contains('delete')){
  e.target.parentElement.remove();
 }

});

// filter todos event
search.addEventListener('keyup', () => {

 const term = search.value.trim().toLowerCase();
 filterTodos(term);

});</code></pre>

<pre><code class="lang-scss">//scss
.todo-box{
 max-width: 400px;
 @include margin($spacer auto);
 padding: $spacer/2;

input,
input:focus{
 max-width: 400px;
 padding: 8px;
}

.todos {
 @include margin($spacer null);
  
 li{
 background: $light-gray;
 font-size: $secondary;
 @include margin($spacer/4 null);
 @include padding($spacer/3 $spacer/4);
}
}

.delete{
 cursor: pointer;
 float: right;
 width: 23px;
 height: 23px;
 @include padding(4px 5px null null);
 background-image: url(../images/trash-icon.svg);
 background-repeat: no-repeat;
 background-size: cover;
}

.filtered{
 display: none !important;
}
}</code></pre>
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