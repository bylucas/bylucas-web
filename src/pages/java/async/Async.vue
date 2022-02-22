<template>

<div id="n" class="post-content">

<h3 class="page-title">Async Javascript</h3>
<blockquote>
 <p>Asynchronous Code in Action</p>
<p>Start now and finish later</p>
<p>Takes a callback function to send back later</p>
</blockquote>

<pre><code class="lang-js">//Simulated asynchronous code
console.log(1);
console.log(2);

setTimeout(() => {
  console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);

//result
// 1
// 2
// 3
// 4
// callback function fired</code></pre>

<h4>Making HTTP Requests (XHR)</h4>

<blockquote><p>Using data from: <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a></p>
<p>Free to use fake online REST API for testing and prototyping.</p></blockquote>

<pre><code class="lang-js">//The 4 XHR states are taken from:
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

//An XHR client exists in one of the following states:
//0 UNSENT
//The XMLHttpRequest client has been created, but the open() method hasn't been called yet.

//1 OPENED
// open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch.

//2 HEADERS_RECEIVED
// send() has been called and the response headers have been received.

//3 LOADING
// Response's body is being received. If responseType is "text" or empty string, responseText will have the partial text response as it loads.

//4 DONE
// The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.

//New request
const request = new XMLHttpRequest();

//readystatechange
request.addEventListener('readystatechange', () => {

console.log(request);
//part answer:
//XMLHttpRequest {onreadystatechange: null, readyState: 1,...
//XMLHttpRequest {onreadystatechange: null, readyState: 2,...
//XMLHttpRequest {onreadystatechange: null, readyState: 3,...
//XMLHttpRequest {onreadystatechange: null, readyState: 4,...

//request status
 if(request.readyState === 4 && request.status === 200){
 console.log(request.responseText);
//part answer:
//[
//{
// "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// },
// {
//   "userId": 1,
//   "id": 2,
//   "title": "quis ut nam facilis et officia qui",
//   "completed": false
// },...

  } else if (request.readyState === 4){
 console.log('could not fetch the data');
//part answer - url made invalid
//XMLHttpRequest {onreadystatechange: null, readyState: 1,...
//XMLHttpRequest {onreadystatechange: null, readyState: 4,...
//could not fetch the data
 }
});

//open request and send request
 request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
 request.send();</code></pre>

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