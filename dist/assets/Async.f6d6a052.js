import{_ as e}from"./index.58a79006.js";import{o as t,c as n,m as o}from"./vendor.8c156a9e.js";const s={mounted(){Prism.highlightAll()}},a={id:"n",class:"post-content"},r=o(`<h3 class="page-title">Async Javascript</h3><blockquote><p>Asynchronous Code in Action</p><p>Start now and finish later</p><p>Takes a callback function to send back later</p></blockquote><pre><code class="lang-js">//Simulated asynchronous code
console.log(1);
console.log(2);

setTimeout(() =&gt; {
  console.log(&#39;callback function fired&#39;);
}, 2000);

console.log(3);
console.log(4);

//result
// 1
// 2
// 3
// 4
// callback function fired</code></pre><h4>Making HTTP Requests (XHR)</h4><blockquote><p>Using data from: <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a></p><p>Free to use fake online REST API for testing and prototyping.</p></blockquote><pre><code class="lang-js">//The 4 XHR states are taken from:
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

//An XHR client exists in one of the following states:
//0 UNSENT
//The XMLHttpRequest client has been created, but the open() method hasn&#39;t been called yet.

//1 OPENED
// open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch.

//2 HEADERS_RECEIVED
// send() has been called and the response headers have been received.

//3 LOADING
// Response&#39;s body is being received. If responseType is &quot;text&quot; or empty string, responseText will have the partial text response as it loads.

//4 DONE
// The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.

//New request
const request = new XMLHttpRequest();

//readystatechange
request.addEventListener(&#39;readystatechange&#39;, () =&gt; {

console.log(request);
//part answer:
//XMLHttpRequest\xA0{onreadystatechange: null, readyState: 1,...
//XMLHttpRequest\xA0{onreadystatechange: null, readyState: 2,...
//XMLHttpRequest\xA0{onreadystatechange: null, readyState: 3,...
//XMLHttpRequest\xA0{onreadystatechange: null, readyState: 4,...

//request status
 if(request.readyState === 4 &amp;&amp; request.status === 200){
 console.log(request.responseText);
//part answer:
//[
//{
// &quot;userId&quot;: 1,
//   &quot;id&quot;: 1,
//   &quot;title&quot;: &quot;delectus aut autem&quot;,
//   &quot;completed&quot;: false
// },
// {
//   &quot;userId&quot;: 1,
//   &quot;id&quot;: 2,
//   &quot;title&quot;: &quot;quis ut nam facilis et officia qui&quot;,
//   &quot;completed&quot;: false
// },...

  } else if (request.readyState === 4){
 console.log(&#39;could not fetch the data&#39;);
//part answer - url made invalid
//XMLHttpRequest\xA0{onreadystatechange: null, readyState: 1,...
//XMLHttpRequest\xA0{onreadystatechange: null, readyState: 4,...
//could not fetch the data
 }
});

//open request and send request
 request.open(&#39;GET&#39;, &#39;https://jsonplaceholder.typicode.com/todos/&#39;);
 request.send();</code></pre><hr>`,7),l=[r];function c(d,u,i,p,h,q){return t(),n("div",a,l)}var m=e(s,[["render",c]]);export{m as default};
