import{_ as s}from"./index.d81d2172.js";import{o as n,c as t,a as e}from"./vendor.8c156a9e.js";const i={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},a=e("h3",{class:"page-title"},"Firebase",-1),o=e("blockquote",null,[e("p",null,"Setup Firebase"),e("p",null,"Only setup firebase core and firestore")],-1),c=e("pre",null,[e("code",{class:"lang-html"},`<!-- html -->
<h2>Recipes</h2>
<ul></ul>
 <form>
  <label for="recipe">Add a new recipe:</label>
   <div class="input-group">
    <input type="text" id="recipe" required>
    <div class="append">
     <input type="submit" value="add">
    </div>
   </div>
 </form>
<button class="unsub">Unsubscribe from changes</button>`)],-1),p=e("pre",null,[e("code",{class:"lang-js"},`//setup firebase
<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"><\/script>
<script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-firestore.js"><\/script>
<script>

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "???",
  authDomain: "???",
  databaseURL: "???",
  projectId: "???",
  storageBucket: "???",
  messagingSenderId: "???",
  appId: "???"
 };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore(); `)],-1),l=e("hr",null,null,-1),d=[a,o,c,p,l];function u(b,f,_,h,m,g){return n(),t("div",r,d)}var w=s(i,[["render",u]]);export{w as default};
