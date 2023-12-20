<template>
  <div class="article">
	<div class="outer-header">
  <Header :picture="backgroundImage" :title="title" />
  </div>
<div class="main">
      <h3 class="menu-title">MENU</h3>
   
    <div class="links-wrap">
      <div class="links-left">
    <h5 class="menu-header">Basics</h5>
    <router-link :to="{ name: 'Variables' }">Variables</router-link>
    <router-link :to="{ name: 'Strings' }">Strings</router-link>
    <router-link :to="{ name: 'StringMethods' }">String Methods</router-link>
    <router-link :to="{ name: 'Numbers' }">Numbers</router-link>
    <router-link :to="{ name: 'TemplateStrings' }">TemplateStrings</router-link>
    <router-link :to="{ name: 'Arrays' }">Arrays</router-link>
    <router-link :to="{ name: 'NullUndefined' }">Null and Undefined</router-link>
    <router-link :to="{ name: 'BooleansComparisons' }">Booleans and Comparisons</router-link>
    <router-link :to="{ name: 'StrictComparisons' }">Loose and Strict Comparisons</router-link>
    <router-link :to="{ name: 'TypeConversion' }">Type Conversion</router-link>
    
    <div class="spacer">- - - - - - - - - - -</div>
    <h5 class="menu-header">Control Flow</h5>
    
    <router-link :to="{ name: 'ForLoops' }">For Loops</router-link>
    <router-link :to="{ name: 'WhileLoops' }">While Loops</router-link>
    <router-link :to="{ name: 'DoWhileLoops' }">Do While Loops</router-link>
    <router-link :to="{ name: 'IfStatements' }">If Statements</router-link>
    <router-link :to="{ name: 'ElseIfStatements' }">Else If Statements</router-link>
    <router-link :to="{ name: 'LogicalOperators' }">Logical Operators</router-link>
    <router-link :to="{ name: 'TernaryOperator' }">Ternary Operator</router-link>
    <router-link :to="{ name: 'BreakContinue' }">Break and Continue</router-link>
    <router-link :to="{ name: 'SwitchStatements' }">Switch Statements</router-link>
    <router-link :to="{ name: 'BlockScope' }">Variables and Block-Scope</router-link>

    <div class="spacer">- - - - - - - - - - -</div>
    <h5 class="menu-header">Functions</h5>

    <router-link :to="{ name: 'Functions' }">Functions</router-link>
    <router-link :to="{ name: 'ArrowFunctions' }">Arrow Functions</router-link>
    <router-link :to="{ name: 'CallbackForEach' }">Callback and forEach</router-link>
    <div class="spacer">- - - - - - - - - - -</div>

    <h5 class="menu-header">Objects</h5>
    <router-link :to="{ name: 'ObjectLiterals' }">Object Literals</router-link>
    <router-link :to="{ name: 'MathObject' }">Math Object</router-link>
     <router-link :to="{ name: 'PrimativeReference' }">Primative and Reference Values</router-link>

<div class="spacer">- - - - - - - - - - -</div>
     <h5 class="menu-header">Dom</h5>
    <router-link :to="{ name: 'QuerySelector' }">QuerySelector</router-link>
    <router-link :to="{ name: 'GetElement' }">GetElement</router-link>
    <router-link :to="{ name: 'ReplaceText' }">ReplaceText</router-link>
    <router-link :to="{ name: 'Attributes' }">Attributes</router-link>
    <router-link :to="{ name: 'Classes' }">Classes</router-link>
    <router-link :to="{ name: 'NodeRelations' }">NodeRelations</router-link>
    <router-link :to="{ name: 'EventListeners' }">EventListeners</router-link>

    <div class="spacer">- - - - - - - - - - -</div>

    <h5 class="menu-header">Array Methods</h5>
    <router-link :to="{ name: 'Filter' }">Filter Method</router-link>
    <router-link :to="{ name: 'Map' }">Map Method</router-link>
    <router-link :to="{ name: 'Reduce' }">Reduce Method</router-link>
    <router-link :to="{ name: 'Find' }">Find Method</router-link>
    <router-link :to="{ name: 'Sort' }">Sort Method</router-link>
    <router-link :to="{ name: 'Chaining' }">Chaining Arrays</router-link>
    
    <div class="spacer hidden">- - - - - - - - - - -</div>
    </div>
    
    <div class="links-right">
    
    
    <h5 class="menu-header">Dates</h5>
    <router-link :to="{ name: 'Dates' }">Dates</router-link>
    <router-link :to="{ name: 'TimeStamps' }">Timestamps</router-link>
    <router-link :to="{ name: 'DateFns' }">Date Fns</router-link>
    
    
    <div class="spacer">- - - - - - - - - - -</div>
    <h5 class="menu-header">Async Javascript</h5>
    <router-link :to="{ name: 'Async' }">Async Javascript</router-link>
    <router-link :to="{ name: 'LocalData' }">Local Data</router-link>
    <router-link :to="{ name: 'CallBack' }">Callback Function</router-link>
    <router-link :to="{ name: 'Promise' }">Using Promise</router-link>
    <router-link :to="{ name: 'Fetch' }">Fetch API</router-link>
    <router-link :to="{ name: 'Wait' }">Async and Await</router-link>
    
    

    <div class="spacer">- - - - - - - - - - -</div>
    <h5 class="menu-header">Local Storage</h5>
    <router-link :to="{ name: 'LocalStorage' }">Local Storage</router-link>
    
    <div class="spacer">- - - - - - - - - - -</div>
    <h5 class="menu-header">Object Orientated Javascript</h5>
     <router-link :to="{ name: 'ObjectRecap' }">Object Literal Recap</router-link>
     <router-link :to="{ name: 'Class' }">Classes</router-link>
      <router-link :to="{ name: 'ClassMethods' }">Class Methods and Method Chaining</router-link>
      <router-link :to="{ name: 'ClassInheritance' }">Class Inheritance</router-link>
      <router-link :to="{ name: 'Super' }">Super()</router-link>
      <router-link :to="{ name: 'Constructors' }">Constructors (under the hood)</router-link>
    
    
    <div class="spacer">- - - - - - - - - - -</div>
     <h5 class="menu-header">ES6 Extras</h5>
      <router-link :to="{ name: 'RestParameter' }">Rest Parameter</router-link>
      <router-link :to="{ name: 'Sets' }">Sets</router-link>
      <router-link :to="{ name: 'Symbols' }">Symbols</router-link>
      
      
      <div class="spacer">- - - - - - - - - - -</div>
      <h5 class="menu-header">Databases</h5>
      <router-link :to="{ name: 'Firebase' }">Firebase</router-link>
      <router-link :to="{ name: 'WorkingData' }">Working with Data</router-link>
      <router-link :to="{ name: 'RealTime' }">Real Time Event Listeners</router-link>
      <router-link :to="{ name: 'Unsubscribe' }">Adding Unsubscribe</router-link>
    

    <div class="spacer">- - - - - - - - - - -</div>
      <h5 class="menu-header">UI Elements</h5>
    <router-link :to="{ name: 'ActiveHeader' }">Active Header</router-link>
    <router-link :to="{ name: 'BackTop' }">Back to Top</router-link>
    <router-link :to="{ name: 'Dropdown' }">Dropdown</router-link>
    <router-link :to="{ name: 'SignupForm' }">Signup Form</router-link>
    <router-link :to="{ name: 'Modal' }">Modal</router-link>
    <router-link :to="{ name: 'Snackbar' }">Snackbar</router-link>
    <router-link :to="{ name: 'Tabs' }">Tabs</router-link>
    <router-link :to="{ name: 'Tooltip' }">Tooltip</router-link>

    <div class="spacer">- - - - - - - - - - -</div>
      <h5 class="menu-header">Projects</h5>
<router-link :to="{ name: 'Quiz' }">Quiz</router-link>
<router-link :to="{ name: 'ToDoList' }">Todo List</router-link>
<router-link :to="{ name: 'DateProject' }">Date Project</router-link>
<router-link :to="{ name: 'WeatherApp' }">Weather App</router-link>
<router-link :to="{ name: 'WeatherClass' }">Weather App using Class</router-link>
<router-link :to="{ name: 'Chat' }">Making a Chat Room</router-link>

    </div>
    </div>
<hr>

    <router-view v-slot="{ Component }">
    
    <transition name="fade" mode="out-in">
     
      <component :is="Component" :key="$route.path"></component>
     
    </transition>
    
  </router-view>
 </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'

  export default {

   data() {
    return {
      backgroundImage: 'img/modern-javascript.webp',
      title: 'Modern Javascript'
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
  .outer-header {
    background-color: #404040;
  }
</style>