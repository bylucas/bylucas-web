<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Building a Chat Room</h3>
<blockquote>
<p>to come</p>
</blockquote>
<pre><code class="lang-html">&lt;!-- Final html --&gt;
&lt;h2&gt;Chat Room&lt;/h2&gt;
&lt;!-- buttons for chatrooms --&gt;
&lt;div class="chat-rooms"&gt;
 &lt;div class="input-group-text"&gt;Choose a chatroom:&lt;/div&gt;
  &lt;button class="btn" id="general"&gt;#general&lt;/button&gt;
  &lt;button class="btn" id="gaming"&gt;#gaming&lt;/button&gt;
  &lt;button class="btn" id="music"&gt;#music&lt;/button&gt;
 &lt;/div&gt;
&lt;!-- chat list / window --&gt;
&lt;div class="chat-window"&gt;
 &lt;ul class="chat-list"&gt;&lt;/ul&gt;
&lt;/div&gt;
&lt;!-- new chat form --&gt;
&lt;form class="new-chat"&gt;
 &lt;div class="input-group-text"&gt;Your message:&lt;/div&gt;
 &lt;div class="input-group"&gt;
  &lt;input type="text" id="message" required&gt;
   &lt;div class="append"&gt;
    &lt;input type="submit" class="btn" value="send"&gt;
   &lt;/div&gt;
 &lt;/div&gt;
&lt;/form&gt;
&lt;!-- update name form --&gt;
&lt;div class="input-group-text"&gt;Update name:&lt;/div&gt;
 &lt;form class="new-name"&gt;
  &lt;div class="input-group"&gt;
   &lt;input type="text" id="name" required&gt;
    &lt;div class="append"&gt;
     &lt;input type="submit" class="btn" value="update"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;div class="update-mssg"&gt;&lt;/div&gt;
&lt;/form&gt;</code></pre>

<pre><code class="lang-js">//add dateFns - render a better date output
&lt;script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"&gt;&lt;/script&gt;
//setup firebase - base app and firestore
&lt;script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"&gt;&lt;/script&gt;
&lt;script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-firestore.js"&gt;&lt;/script&gt;
&lt;script&gt;

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "????????????????????????????",
  authDomain: "??????",
  databaseURL: "?????????????",
  projectId: "?????????????",
  storageBucket: "?????????????????",
  messagingSenderId: "??????????????????",
  appId: "??????????????????"
 };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore(); </code></pre>

 <pre><code class="lang-js">//Chatroom

class Chatroom {
 constructor(room, username){
  this.room = room;
  this.username = username;
  this.chats = db.collection('chats');
  this.unsub;
}

async addChat(message){
 // format a chat object
 const now = new Date();
 const chat = {
  message: message,
  username: this.username,
  room: this.room,
  created_at: firebase.firestore.Timestamp.fromDate(now)
 };
  // save the chat document
 const response = await this.chats.add(chat);
  return response;
  }

 getChats(callback){
  this.unsub = this.chats
   .where('room', '==', this.room)
   .orderBy('created_at')
   .onSnapshot(snapshot => {
   snapshot.docChanges().forEach(change => {
    if(change.type === 'added'){
     callback(change.doc.data());
     }
    });
   });
  }
 updateName(username){
  this.username = username;
  localStorage.username = username;
  }

 updateRoom(room){
  this.room = room;
   console.log('room updated');
    if(this.unsub){
     this.unsub();
  }
 }
}

/////////////////////////////

//UI

class ChatUI {
 constructor(list){
  this.list = list;
 }
 
 clear(){
  this.list.innerHTML = '';
 }

 render(data){
  const when = dateFns.distanceInWordsToNow(
   data.created_at.toDate(),
    { addSuffix:true }
   );
   const html = `
    &lt;li class="list-group-item"&gt;
     &lt;span class="username"&gt;${data.username}&lt;/span&gt;
     &lt;span class="message"&gt;${data.message}&lt;/span&gt;
     &lt;div class="time"&gt;${when}&lt;/span&gt;
    &lt;/li&gt;
    `;
  this.list.innerHTML += html;
 }
}

/////////////////////////////////////

//chat-room UI

// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');
const btn = document.querySelector('.chat-rooms .btn');

// add a new chat
newChatForm.addEventListener('submit', e => {
 e.preventDefault();
 const message = newChatForm.message.value.trim();
 chatroom.addChat(message)
  .then(() => newChatForm.reset())
  .catch(err => console.log(err));
});

// update the username
newNameForm.addEventListener('submit', e => {
 e.preventDefault();
 // update name via chatroom
 const newName = newNameForm.name.value.trim();
 chatroom.updateName(newName);
 // reset the form
 newNameForm.reset();
 // show then hide the update message
 updateMssg.innerText = `Your name was updated to ${newName}`;
 setTimeout(() => updateMssg.innerText = '', 3000);
});

// update the chat room
rooms.addEventListener('click', e => {
 if(e.target.tagName === 'BUTTON'){
  chatUI.clear(); chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chat => chatUI.render(chat));
  }
});

// check local storage for name
const username = localStorage.username ? localStorage.username : 'anon';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username);

// get chats and render
chatroom.getChats(data => chatUI.render(data));</code></pre>

<pre><code class="lang-scss">//scss
.chat-box{
 max-width: 600px;
 @include margin(null auto);
 @include padding(0 null $spacer null);

 .chat-rooms {
  text-align: center;
  margin-bottom: math.div($spacer, 2);
 }

.btn{
 background: #43d9be;
 color: white;
 outline: none !important;
 box-shadow: none !important;
}

.btn:focus{
 outline: none !important;
}

ul {
 margin-bottom: $spacer;

  li {
   margin-bottom: math.div($spacer, 2);
   border-bottom: $border;
   padding-bottom: 15px;
  }
 }

label {
 text-align: center;
 margin-bottom: 5px;
 }

 .input-group {
  position: relative;
 }

 input {
  width: 100%;
  @include padding(8px);
 }

 .append {
  @include position(absolute, 0 0 null null);
  width: 70px;

  input {
   border: none;
   @include padding(9px);
   @include border-right-radius(5px);

    &:hover {
     background: $hover-color;
     cursor: pointer;
    }
   }
  }

 .username{
  font-weight: bold;
 }

 .time{
  font-size: 0.7em;
  color: #999;
 }

 .input-group-text {
  margin-bottom: math.div($spacer, 4);
  margin-top: math.div($spacer, 4);
  width: 100%;
  font-size: $secondary;
}

 .update-mssg {
  text-align: center;
  margin-top: $spacer;
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