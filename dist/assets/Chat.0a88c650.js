import{_ as t}from"./index.58a79006.js";import{o as n,c as e,m as o}from"./vendor.8c156a9e.js";const a={mounted(){Prism.highlightAll()}},s={id:"n",class:"post-content"},r=o(`<h3 class="page-title">Building a Chat Room</h3><blockquote><p>to come</p></blockquote><pre><code class="lang-html">&lt;!-- Final html --&gt;
&lt;h2&gt;Chat Room&lt;/h2&gt;
&lt;!-- buttons for chatrooms --&gt;
&lt;div class=&quot;chat-rooms&quot;&gt;
 &lt;div class=&quot;input-group-text&quot;&gt;Choose a chatroom:&lt;/div&gt;
  &lt;button class=&quot;btn&quot; id=&quot;general&quot;&gt;#general&lt;/button&gt;
  &lt;button class=&quot;btn&quot; id=&quot;gaming&quot;&gt;#gaming&lt;/button&gt;
  &lt;button class=&quot;btn&quot; id=&quot;music&quot;&gt;#music&lt;/button&gt;
 &lt;/div&gt;
&lt;!-- chat list / window --&gt;
&lt;div class=&quot;chat-window&quot;&gt;
 &lt;ul class=&quot;chat-list&quot;&gt;&lt;/ul&gt;
&lt;/div&gt;
&lt;!-- new chat form --&gt;
&lt;form class=&quot;new-chat&quot;&gt;
 &lt;div class=&quot;input-group-text&quot;&gt;Your message:&lt;/div&gt;
 &lt;div class=&quot;input-group&quot;&gt;
  &lt;input type=&quot;text&quot; id=&quot;message&quot; required&gt;
   &lt;div class=&quot;append&quot;&gt;
    &lt;input type=&quot;submit&quot; class=&quot;btn&quot; value=&quot;send&quot;&gt;
   &lt;/div&gt;
 &lt;/div&gt;
&lt;/form&gt;
&lt;!-- update name form --&gt;
&lt;div class=&quot;input-group-text&quot;&gt;Update name:&lt;/div&gt;
 &lt;form class=&quot;new-name&quot;&gt;
  &lt;div class=&quot;input-group&quot;&gt;
   &lt;input type=&quot;text&quot; id=&quot;name&quot; required&gt;
    &lt;div class=&quot;append&quot;&gt;
     &lt;input type=&quot;submit&quot; class=&quot;btn&quot; value=&quot;update&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;div class=&quot;update-mssg&quot;&gt;&lt;/div&gt;
&lt;/form&gt;</code></pre><pre><code class="lang-js">//add dateFns - render a better date output
&lt;script src=&quot;http://cdn.date-fns.org/v1.9.0/date_fns.min.js&quot;&gt;&lt;/script&gt;
//setup firebase - base app and firestore
&lt;script src=&quot;https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://www.gstatic.com/firebasejs/5.8.4/firebase-firestore.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;

// Your web app&#39;s Firebase configuration
 var firebaseConfig = {
  apiKey: &quot;????????????????????????????&quot;,
  authDomain: &quot;??????&quot;,
  databaseURL: &quot;?????????????&quot;,
  projectId: &quot;?????????????&quot;,
  storageBucket: &quot;?????????????????&quot;,
  messagingSenderId: &quot;??????????????????&quot;,
  appId: &quot;??????????????????&quot;
 };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore(); </code></pre><pre><code class="lang-js">//Chatroom

class Chatroom {
 constructor(room, username){
  this.room = room;
  this.username = username;
  this.chats = db.collection(&#39;chats&#39;);
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
   .where(&#39;room&#39;, &#39;==&#39;, this.room)
   .orderBy(&#39;created_at&#39;)
   .onSnapshot(snapshot =&gt; {
   snapshot.docChanges().forEach(change =&gt; {
    if(change.type === &#39;added&#39;){
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
   console.log(&#39;room updated&#39;);
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
  this.list.innerHTML = &#39;&#39;;
 }

 render(data){
  const when = dateFns.distanceInWordsToNow(
   data.created_at.toDate(),
    { addSuffix:true }
   );
   const html = \`
    &lt;li class=&quot;list-group-item&quot;&gt;
     &lt;span class=&quot;username&quot;&gt;\${data.username}&lt;/span&gt;
     &lt;span class=&quot;message&quot;&gt;\${data.message}&lt;/span&gt;
     &lt;div class=&quot;time&quot;&gt;\${when}&lt;/span&gt;
    &lt;/li&gt;
    \`;
  this.list.innerHTML += html;
 }
}

/////////////////////////////////////

//chat-room UI

// dom queries
const chatList = document.querySelector(&#39;.chat-list&#39;);
const newChatForm = document.querySelector(&#39;.new-chat&#39;);
const newNameForm = document.querySelector(&#39;.new-name&#39;);
const updateMssg = document.querySelector(&#39;.update-mssg&#39;);
const rooms = document.querySelector(&#39;.chat-rooms&#39;);
const btn = document.querySelector(&#39;.chat-rooms .btn&#39;);

// add a new chat
newChatForm.addEventListener(&#39;submit&#39;, e =&gt; {
 e.preventDefault();
 const message = newChatForm.message.value.trim();
 chatroom.addChat(message)
  .then(() =&gt; newChatForm.reset())
  .catch(err =&gt; console.log(err));
});

// update the username
newNameForm.addEventListener(&#39;submit&#39;, e =&gt; {
 e.preventDefault();
 // update name via chatroom
 const newName = newNameForm.name.value.trim();
 chatroom.updateName(newName);
 // reset the form
 newNameForm.reset();
 // show then hide the update message
 updateMssg.innerText = \`Your name was updated to \${newName}\`;
 setTimeout(() =&gt; updateMssg.innerText = &#39;&#39;, 3000);
});

// update the chat room
rooms.addEventListener(&#39;click&#39;, e =&gt; {
 if(e.target.tagName === &#39;BUTTON&#39;){
  chatUI.clear(); chatroom.updateRoom(e.target.getAttribute(&#39;id&#39;));
    chatroom.getChats(chat =&gt; chatUI.render(chat));
  }
});

// check local storage for name
const username = localStorage.username ? localStorage.username : &#39;anon&#39;;

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom(&#39;gaming&#39;, username);

// get chats and render
chatroom.getChats(data =&gt; chatUI.render(data));</code></pre><pre><code class="lang-scss">//scss
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

    &amp;:hover {
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
}</code></pre><hr>`,7),u=[r];function i(c,l,d,m,g,p){return n(),e("div",s,u)}var b=t(a,[["render",i]]);export{b as default};
