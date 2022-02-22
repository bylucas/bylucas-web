import{_ as e}from"./index.d81d2172.js";import{o as t,c as s,a as n}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},d=n("h3",{class:"page-title"},"Todo List",-1),l=n("blockquote",null,[n("p",null,"to come")],-1),r=n("pre",null,[n("code",{class:"lang-html"},`<!-- html -- >
<div class="todo-box">
 <form class="search">
   <input type="text" name="search" placeholder="search todos" />
   </form>

  <ul class="todos">
  <li>
   <span>Dentist at 4pm</span>
   <span class="delete"></span>
  </li>
  
  <li>
    <span>Make Dinner</span>
   <span class="delete"></span>
  </li>
  
  <li>
   <span>Arrange Holiday</span>
   <span class="delete"></span>
  </li>
  </ul>

  <form class="add">
  <input type="text" name="add" placeholder="Add a new todo..." />
  </form>
</div>`)],-1),i=n("pre",null,[n("code",{class:"lang-js"},`//js
const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
 const html = \`
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <span>\${todo}</span>
   <span class="delete"></span>
  </li>
  \`;
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

});`)],-1),c=n("pre",null,[n("code",{class:"lang-scss"},`//scss
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
}`)],-1),p=n("hr",null,null,-1),m=[d,l,r,i,c,p];function u(h,f,g,_,x,v){return t(),s("div",a,m)}var L=e(o,[["render",u]]);export{L as default};
