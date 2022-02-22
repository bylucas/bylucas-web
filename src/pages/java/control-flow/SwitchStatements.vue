<template>
  <div id="n" class="post-content">
    <h3 class="page-title">Switch Statements</h3>
    <blockquote>
      <p>
        A switch statement is like the if statement giving the user options and
        breaking when the current option (<em>condition</em>) is true.
      </p>
    </blockquote>
    <pre><code class="lang-js">//The switch expression is evaluated once
//The value of the expression is compared with the values of each case
//If there is a match, the associated block of code is executed
//If there is no match, the default code block is executed

const number = '3';

switch(number){
 case '1':
  console.log('number one');
 break;
 case '2':
  console.log('number two');
 break;
 case '3':
  console.log('number three');
 break;
 case '4':
  console.log('number four');
 break;
 case '5':
  console.log('number five');
 break;
 default:
  console.log('run out of numbers');
}//answer: number three

//using if statements
if(number === '1'){
  console.log('number one');
 } else if(number === '2'){
  console.log('number two');
 } else if(number === '3'){
  console.log('number three');
 } else if(number === '4'){
  console.log('number four');
 } else if(number === '5'){
  console.log('number five');
 } else {
  console.log('run out of numbers');
 }//answer: number three

//the 'default' does not have to be last but if used elsewhere 'break;' must be used

switch(number){
 default:
  console.log('run out of numbers');
 break;
 case '1':
  console.log('number one');
 break;
 case '2':
  console.log('number two');
 break;
}//answer: run out of numbers

//sharing code blocks

switch(number){
 case '1':
 case '2':
  console.log('number one and two');
 break;
 case '3':
 case '4':
  console.log('number three and four');
 break;
 default:
  console.log('run out of numbers');
}//answer: number three and four

//switch cases use strict comparison (===)
//The values must be of the same type to match
//A strict comparison can only be true if the operands are of the same type

switch(number){
 case 1:
  console.log('number one');
 break;
 case 2:
  console.log('number two');
 break;
 case 3://not '3'
  console.log('number three');
 break;
 case 4:
  console.log('number four');
 break;
 default:
  console.log('run out of numbers');
}//answer: run out of numbers</code></pre>

    <blockquote>
      <p>practicle example using left and right arrow keys.</p>
    </blockquote>

    <pre><code class="lang-html">&lt;!-- html --&gt;
&lt;div class="box-container"&gt;
 &lt;div class="inner-box"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>

    <pre><code class="lang-css">/** css **/
.box-container {
 max-width: 400px;
 height: 30px;
 margin: 0 auto;
 position: relative;
 border: 1px solid gray;
}

.inner-box {
 width: 20px;
 height: 30px;
 background-color: red;
 position: absolute;
 top: 0;
 left: 190px;
}</code></pre>

    <pre><code class="lang-js">//js
let box = document.querySelector('.inner-box')
let i = 190
let width = 50

function Gun() {
 document.addEventListener('keydown', (e) => {
  switch (e.key) {
   case 'ArrowLeft':
    if(i + width !== 50)
     i -= 5
     box.style.left = i + 'px'
    break
   
   case 'ArrowRight':
    if (i + width !== 430)
     i += 5
    box.style.left = i + 'px'
  break
  }
 })
}

Gun()</code></pre>

    <hr />
  </div>
</template>

<script>
export default {
  mounted() {
    Prism.highlightAll()
  },
}
</script>
