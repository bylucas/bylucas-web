import{_ as t}from"./index.58a79006.js";import{o,c as e,m as u}from"./vendor.8c156a9e.js";const n={mounted(){Prism.highlightAll()}},q={id:"n",class:"post-content"},a=u(`<h3 class="page-title">Local Data</h3><blockquote><p>to come</p></blockquote><pre><code class="lang-json">//Local Data
todos.json
[
 {&quot;text&quot;: &quot;I see Green&quot;, &quot;author&quot;: &quot;Green&quot;},
 {&quot;text&quot;: &quot;I see Blue&quot;, &quot;author&quot;: &quot;Blue&quot;},
 {&quot;text&quot;: &quot;I see Red&quot;, &quot;author&quot;: &quot;Red&quot;}
]</code></pre><pre><code class="lang-js">//calling local data
//json is strings
//json must be in double quotes(&quot;&quot;)
//numbers and booleans don&#39;t have quotes

 const getTodos = (callback) =&gt; {

 const request = new XMLHttpRequest();

 request.addEventListener(&#39;readystatechange&#39;, () =&gt; {

 if(request.readyState === 4 &amp;&amp; request.status === 200){
 //parse the json strings into javascript objects
  const data = JSON.parse(request.responseText);
 //error undefined
   callback(undefined, data);
   } else if (request.readyState === 4){
//data undefined
   callback(&#39;could not fetch the data&#39;, undefined);
   }
 });
  
request.open(&#39;GET&#39;, &#39;todos.json&#39;);
request.send();
};

getTodos((err, data) =&gt; {
 console.log(&#39;callback function fired&#39;);
  if(err){
  console.log(err);
 } else {
  console.log(data);
 }
});
//err: callback function fired
//could not fetch the data

//data:
//0: {text: &quot;I see Green&quot;, author: &quot;Green&quot;}
//1: {text: &quot;I see Blue&quot;, author: &quot;Blue&quot;}
//2: {text: &quot;I see Red&quot;, author: &quot;Red&quot;}</code></pre><pre><code class="lang-json">//Local Data
json/blue.json
[
 {&quot;text&quot;: &quot;The color Blue&quot;, &quot;author&quot;: &quot;Blue&quot;},
 {&quot;text&quot;: &quot;Blue Box&quot;, &quot;author&quot;: &quot;Blue&quot;},
 {&quot;text&quot;: &quot;I see Blue&quot;, &quot;author&quot;: &quot;Blue&quot;}
]

json/green.json
[
 {&quot;text&quot;: &quot;The color Green&quot;, &quot;author&quot;: &quot;Green&quot;},
 {&quot;text&quot;: &quot;Green Box&quot;, &quot;author&quot;: &quot;Green&quot;},
 {&quot;text&quot;: &quot;I see Green&quot;, &quot;author&quot;: &quot;Green&quot;}
]

json/red.json
[
 {&quot;text&quot;: &quot;The color Red&quot;, &quot;author&quot;: &quot;Red&quot;},
 {&quot;text&quot;: &quot;Red Box&quot;, &quot;author&quot;: &quot;Red&quot;},
 {&quot;text&quot;: &quot;I see Red&quot;, &quot;author&quot;: &quot;Red&quot;}
]</code></pre><pre><code class="lang-js">//Too many callbacks

const getTodos = (resource, callback) =&gt; {

const request = new XMLHttpRequest();

 request.addEventListener(&#39;readystatechange&#39;, () =&gt; {

 if(request.readyState === 4 &amp;&amp; request.status === 200){
  const data = JSON.parse(request.responseText);
   callback(undefined, data);
  } else if (request.readyState === 4){
   callback(&#39;could not fetch the data&#39;, undefined);
  }
});
  
request.open(&#39;GET&#39;, resource);
request.send();
};

//To many callbacks
//after one getTodos returns data, request another, then another

getTodos(&#39;json/blue.json&#39;, (err, data) =&gt; {
 console.log(data);
//answer:
//0: {text: &quot;The color Blue&quot;, author: &quot;Blue&quot;}
//1: {text: &quot;Blue Box&quot;, author: &quot;Blue&quot;}
//2: {text: &quot;I see Blue&quot;, author: &quot;Blue&quot;}
  getTodos(&#39;json/green.json&#39;, (err, data) =&gt; {
  console.log(data);
//answer:
//0: {text: &quot;The color Green&quot;, author: &quot;Green&quot;}
//1: {text: &quot;Green Box&quot;, author: &quot;Green&quot;}
//2: {text: &quot;I see Green&quot;, author: &quot;Green&quot;}
   getTodos(&#39;json/red.json&#39;, (err, data) =&gt; {
   console.log(data);
//answer:
//0: {text: &quot;The color Red&quot;, author: &quot;Red&quot;}
//1: {text: &quot;Red Box&quot;, author: &quot;Red&quot;}
//2: {text: &quot;I see Red&quot;, author: &quot;Red&quot;}
  });
 });
});</code></pre><hr>`,7),s=[a];function r(d,c,l,h,i,x){return o(),e("div",q,s)}var f=t(n,[["render",r]]);export{f as default};
