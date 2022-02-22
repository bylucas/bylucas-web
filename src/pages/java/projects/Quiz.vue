<template>
 
<div id="n" class="post-content">

<h3 class="page-title">Quiz</h3>
<blockquote>
<p>to come</p>
</blockquote>
<pre><code class="lang-html">&lt;!-- html -- &gt;
&lt;!-- top section --&gt;
&lt;h2&gt;What Do You Know?&lt;/h2&gt;
&lt;!-- result section --&gt;
&lt;div class="result d-none"&gt;
 &lt;h3&gt;You are &lt;span&gt;0%&lt;/span&gt; in the know&lt;/h3&gt;
&lt;/div&gt;

&lt;!-- quiz section --&gt;
&lt;h3&gt;On with the questions...&lt;/h3&gt;
 &lt;form class="quiz-form"&gt;
  
 &lt;div class="my-5"&gt;
  &lt;p&gt;1. What was the most downloaded app of 2020?&lt;/p&gt;
  &lt;div class="form-wrap"&gt;
   &lt;input type="radio" name="q1" value="A" checked&gt;
   &lt;label&gt;WhatsApp&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="form-wrap"&gt;
   &lt;input type="radio" name="q1" value="B"&gt;
   &lt;label&gt;Tik Tok&lt;/label&gt;
  &lt;/div&gt;
 &lt;/div&gt;
        
 &lt;!-- question 2 --&gt;

 &lt;!-- question 3 --&gt;

 &lt;!-- question 4 --&gt;

 &lt;div class="but-wrap"&gt;
  &lt;input type="submit" class="but"&gt; 
 &lt;/div&gt;
&lt;/form&gt;</code></pre>

<pre><code class="lang-js">const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
 e.preventDefault();

 let score = 0;
 const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

// check the answers
 userAnswers.forEach((answer, index) => {
  if (answer === correctAnswers[index]){
   score += 25;
 }
});

// show the result
 scrollTo(0, 200);
 result.classList.remove('d-none');

 let output = 0;
 const timer = setInterval(() => {
  result.querySelector('span').textContent = `${output}%`;
   if(output === score){
    clearInterval(timer);
   } else {
    output++;
  }
 }, 10);
});</code></pre>

<pre><code class="lang-scss">//scss
.result {
 text-align: center;
 margin: $spacer 0;

  h3 {
   font-size: 2rem;
   color: $alert-color;

    span {
     font-size: 3rem;
  }
 }
}

.d-none {
 display: none;
}

.quiz-form {
 
 h4 {
  text-align: center;
 }

 .my-5 {
  margin: $spacer 0;

  p {
   margin-bottom: 15px;
  }

 label {
  display: inline;
  width: 100%;
  margin-left: 6px;
  color: $alert-color;
 }

 border-bottom: $border;
  padding: 0 math.div($spacer, 2) math.div($spacer, 2);
 }

 .but-wrap {
  text-align: center;
 }
}

@include media(700) {
 .quiz-form {
  margin: $spacer;
 }

 .result {

  h3 {
   font-size: 2.5rem;

    span {
     font-size: 3.5rem;
   }
  }
 }
}

@include media(900) {
 .result {
  
  h3 {
   font-size: 3rem;
    
    span {
     font-size: 4rem;
   }
  }
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