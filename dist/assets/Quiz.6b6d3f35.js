import{_ as e}from"./index.d81d2172.js";import{o as t,c as s,a as n}from"./vendor.8c156a9e.js";const o={mounted(){Prism.highlightAll()}},r={id:"n",class:"post-content"},a=n("h3",{class:"page-title"},"Quiz",-1),l=n("blockquote",null,[n("p",null,"to come")],-1),i=n("pre",null,[n("code",{class:"lang-html"},`<!-- html -- >
<!-- top section -->
<h2>What Do You Know?</h2>
<!-- result section -->
<div class="result d-none">
 <h3>You are <span>0%</span> in the know</h3>
</div>

<!-- quiz section -->
<h3>On with the questions...</h3>
 <form class="quiz-form">
  
 <div class="my-5">
  <p>1. What was the most downloaded app of 2020?</p>
  <div class="form-wrap">
   <input type="radio" name="q1" value="A" checked>
   <label>WhatsApp</label>
  </div>
  <div class="form-wrap">
   <input type="radio" name="q1" value="B">
   <label>Tik Tok</label>
  </div>
 </div>
        
 <!-- question 2 -->

 <!-- question 3 -->

 <!-- question 4 -->

 <div class="but-wrap">
  <input type="submit" class="but"> 
 </div>
</form>`)],-1),c=n("pre",null,[n("code",{class:"lang-js"},`const correctAnswers = ['B', 'B', 'B', 'B'];
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
  result.querySelector('span').textContent = \`\${output}%\`;
   if(output === score){
    clearInterval(timer);
   } else {
    output++;
  }
 }, 10);
});`)],-1),u=n("pre",null,[n("code",{class:"lang-scss"},`//scss
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
}`)],-1),d=n("hr",null,null,-1),m=[a,l,i,c,u,d];function p(h,f,v,_,q,w){return t(),s("div",r,m)}var z=e(o,[["render",p]]);export{z as default};
