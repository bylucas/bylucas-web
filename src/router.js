import { createRouter, createWebHistory } from "vue-router"
//const howardlucas = { template: '<div>howardlucas</div>' };
import Home from "./pages/Home.vue"
import Javascript from "./pages/Javascript.vue"
import Php from "./pages/Php.vue"
import Css from "./pages/Css.vue"
import Vue3 from "./pages/Vue3.vue"
import Firebase from "./pages/Firebase.vue"
import Other from "./pages/Other.vue"
import NotFound from "./pages/NotFound.vue"

const routes = [
  //{
  // path: '/howardlucas',
  // name: 'Howardlucas',
  // beforeEnter() {location.href = 'https://howardlucas.co.uk/'},
  // component: howardlucas
  //},
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/javascript",
    name: "Javascript",
    component: Javascript,
    children: [
      //basics
      {
        path: "/variables",
        name: "Variables",
        component: () => import("./pages/java/basics/Variables.vue"),
      },
      {
        path: "/strings",
        name: "Strings",
        component: () => import("./pages/java/basics/Strings.vue"),
      },
      {
        path: "/stringmethods",
        name: "StringMethods",
        component: () => import("./pages/java/basics/StringMethods.vue"),
      },
      {
        path: "/numbers",
        name: "Numbers",
        component: () => import("./pages/java/basics/Numbers.vue"),
      },
      {
        path: "/templatestrings",
        name: "TemplateStrings",
        component: () => import("./pages/java/basics/Templatestrings.vue"),
      },
      {
        path: "/arrays",
        name: "Arrays",
        component: () => import("./pages/java/basics/Arrays.vue"),
      },
      {
        path: "/nullundefined",
        name: "NullUndefined",
        component: () => import("./pages/java/basics/NullUndefined.vue"),
      },
      {
        path: "/booleanscomparisons",
        name: "BooleansComparisons",
        component: () => import("./pages/java/basics/BooleansComparisons.vue"),
      },
      {
        path: "/strictcomparisons",
        name: "StrictComparisons",
        component: () => import("./pages/java/basics/StrictComparisons.vue"),
      },
      {
        path: "/typeconversion",
        name: "TypeConversion",
        component: () => import("./pages/java/basics/TypeConversion.vue"),
      },

      //control flow
      {
        path: "/forloops",
        name: "ForLoops",
        component: () => import("./pages/java/control-flow/ForLoops.vue"),
      },
      {
        path: "/whileloops",
        name: "WhileLoops",
        component: () => import("./pages/java/control-flow/WhileLoops.vue"),
      },
      {
        path: "/dowhileloops",
        name: "DoWhileLoops",
        component: () => import("./pages/java/control-flow/DoWhileLoops.vue"),
      },
      {
        path: "/ifstatements",
        name: "IfStatements",
        component: () => import("./pages/java/control-flow/IfStatements.vue"),
      },
      {
        path: "/elseifstatements",
        name: "ElseIfStatements",
        component: () =>
          import("./pages/java/control-flow/ElseIfStatements.vue"),
      },
      {
        path: "/logicaloperators",
        name: "LogicalOperators",
        component: () =>
          import("./pages/java/control-flow/LogicalOperators.vue"),
      },
      {
        path: "/ternaryoperator",
        name: "TernaryOperator",
        component: () =>
          import("./pages/java/control-flow/TernaryOperator.vue"),
      },
      {
        path: "/breakcontinue",
        name: "BreakContinue",
        component: () => import("./pages/java/control-flow/BreakContinue.vue"),
      },
      {
        path: "/switchstatements",
        name: "SwitchStatements",
        component: () =>
          import("./pages/java/control-flow/SwitchStatements.vue"),
      },
      {
        path: "/blockscope",
        name: "BlockScope",
        component: () => import("./pages/java/control-flow/BlockScope.vue"),
      },

      //functions
      {
        path: "/functions",
        name: "Functions",
        component: () => import("./pages/java/functions/Functions.vue"),
      },
      {
        path: "/arrowfunctions",
        name: "ArrowFunctions",
        component: () => import("./pages/java/functions/ArrowFunctions.vue"),
      },
      {
        path: "/callbackforeach",
        name: "CallbackForEach",
        component: () => import("./pages/java/functions/CallbackForEach.vue"),
      },

      //objects
      {
        path: "/objectliterals",
        name: "ObjectLiterals",
        component: () => import("./pages/java/objects/ObjectLiterals.vue"),
      },
      {
        path: "/mathobject",
        name: "MathObject",
        component: () => import("./pages/java/objects/MathObject.vue"),
      },
      {
        path: "/primativereference",
        name: "PrimativeReference",
        component: () => import("./pages/java/objects/PrimativeReference.vue"),
      },

      //dom
      {
        path: "/queryselectors",
        name: "QuerySelector",
        component: () => import("./pages/java/dom/QuerySelector.vue"),
      },
      {
        path: "/getelement",
        name: "GetElement",
        component: () => import("./pages/java/dom/GetElement.vue"),
      },
      {
        path: "/replacetext",
        name: "ReplaceText",
        component: () => import("./pages/java/dom/ReplaceText.vue"),
      },
      {
        path: "/attributes",
        name: "Attributes",
        component: () => import("./pages/java/dom/Attributes.vue"),
      },
      {
        path: "/classes",
        name: "Classes",
        component: () => import("./pages/java/dom/Classes.vue"),
      },
      {
        path: "/noderelations",
        name: "NodeRelations",
        component: () => import("./pages/java/dom/NodeRelations.vue"),
      },
      {
        path: "/eventlisteners",
        name: "EventListeners",
        component: () => import("./pages/java/dom/EventListeners.vue"),
      },

      //array methods
      {
        path: "/filter",
        name: "Filter",
        component: () => import("./pages/java/array-methods/Filter.vue"),
      },
      {
        path: "/map",
        name: "Map",
        component: () => import("./pages/java/array-methods/Map.vue"),
      },
      {
        path: "/reduce",
        name: "Reduce",
        component: () => import("./pages/java/array-methods/Reduce.vue"),
      },
      {
        path: "/find",
        name: "Find",
        component: () => import("./pages/java/array-methods/Find.vue"),
      },
      {
        path: "/sort",
        name: "Sort",
        component: () => import("./pages/java/array-methods/Sort.vue"),
      },
      {
        path: "/chaining",
        name: "Chaining",
        component: () => import("./pages/java/array-methods/Chaining.vue"),
      },

      //dates
      {
        path: "/dates",
        name: "Dates",
        component: () => import("./pages/java/dates/Dates.vue"),
      },
      {
        path: "/timestamps",
        name: "TimeStamps",
        component: () => import("./pages/java/dates/TimeStamps.vue"),
      },
      {
        path: "/datefns",
        name: "DateFns",
        component: () => import("./pages/java/dates/DateFns.vue"),
      },

      //async javascript
      {
        path: "/async",
        name: "Async",
        component: () => import("./pages/java/async/Async.vue"),
      },
      {
        path: "/localdata",
        name: "LocalData",
        component: () => import("./pages/java/async/LocalData.vue"),
      },
      {
        path: "/callback",
        name: "CallBack",
        component: () => import("./pages/java/async/CallBack.vue"),
      },
      {
        path: "/promise",
        name: "Promise",
        component: () => import("./pages/java/async/Promise.vue"),
      },
      {
        path: "/fetch",
        name: "Fetch",
        component: () => import("./pages/java/async/Fetch.vue"),
      },
      {
        path: "/wait",
        name: "Wait",
        component: () => import("./pages/java/async/Wait.vue"),
      },

      //local storage
      {
        path: "/localstorage",
        name: "LocalStorage",
        component: () => import("./pages/java/local-storage/LocalStorage.vue"),
      },

      //oop
      {
        path: "/objectrecap",
        name: "ObjectRecap",
        component: () => import("./pages/java/oop/ObjectRecap.vue"),
      },
      {
        path: "/class",
        name: "Class",
        component: () => import("./pages/java/oop/Class.vue"),
      },
      {
        path: "/classmethods",
        name: "ClassMethods",
        component: () => import("./pages/java/oop/ClassMethods.vue"),
      },
      {
        path: "/classinheritance",
        name: "ClassInheritance",
        component: () => import("./pages/java/oop/ClassInheritance.vue"),
      },
      {
        path: "/super",
        name: "Super",
        component: () => import("./pages/java/oop/Super.vue"),
      },
      {
        path: "/constructors",
        name: "Constructors",
        component: () => import("./pages/java/oop/Constructors.vue"),
      },

      //es6 extras
      {
        path: "/restparameter",
        name: "RestParameter",
        component: () => import("./pages/java/es6/RestParameter.vue"),
      },
      {
        path: "/sets",
        name: "Sets",
        component: () => import("./pages/java/es6/Sets.vue"),
      },
      {
        path: "/symbols",
        name: "Symbols",
        component: () => import("./pages/java/es6/Symbols.vue"),
      },

      //databases
      {
        path: "/firebase",
        name: "Firebase",
        component: () => import("./pages/java/databases/Firebase.vue"),
      },
      {
        path: "/workingdata",
        name: "WorkingData",
        component: () => import("./pages/java/databases/WorkingData.vue"),
      },
      {
        path: "/realtime",
        name: "RealTime",
        component: () => import("./pages/java/databases/RealTime.vue"),
      },
      {
        path: "/unsubscribe",
        name: "Unsubscribe",
        component: () => import("./pages/java/databases/Unsubscribe.vue"),
      },

      //ui elements
      {
        path: "/activeheader",
        name: "ActiveHeader",
        component: () => import("./pages/java/ui-elements/ActiveHeader.vue"),
      },
      {
        path: "/backtop",
        name: "BackTop",
        component: () => import("./pages/java/ui-elements/BackTop.vue"),
      },
      {
        path: "/dropdown",
        name: "Dropdown",
        component: () => import("./pages/java/ui-elements/DropDown.vue"),
      },
      {
        path: "/signupform",
        name: "SignupForm",
        component: () => import("./pages/java/ui-elements/SignupForm.vue"),
      },
      {
        path: "/modal",
        name: "Modal",
        component: () => import("./pages/java/ui-elements/Modal.vue"),
      },
      {
        path: "/snackbar",
        name: "Snackbar",
        component: () => import("./pages/java/ui-elements/Snackbar.vue"),
      },
      {
        path: "/tabs",
        name: "Tabs",
        component: () => import("./pages/java/ui-elements/Tabs.vue"),
      },
      {
        path: "/tooltip",
        name: "Tooltip",
        component: () => import("./pages/java/ui-elements/Tooltip.vue"),
      },

      //projects
      {
        path: "/quiz",
        name: "Quiz",
        component: () => import("./pages/java/projects/Quiz.vue"),
      },
      {
        path: "/todolist",
        name: "ToDoList",
        component: () => import("./pages/java/projects/ToDoList.vue"),
      },
      {
        path: "/dateproject",
        name: "DateProject",
        component: () => import("./pages/java/projects/DateProject.vue"),
      },
      {
        path: "/weatherapp",
        name: "WeatherApp",
        component: () => import("./pages/java/projects/WeatherApp.vue"),
      },
      {
        path: "/weatherclass",
        name: "WeatherClass",
        component: () => import("./pages/java/projects/WeatherClass.vue"),
      },
      {
        path: "/chat",
        name: "Chat",
        component: () => import("./pages/java/projects/Chat.vue"),
      },
    ],
  },

  {
    path: "/php",
    name: "Php",
    component: Php,
  },

  {
    path: "/css",
    name: "Css",
    component: Css,
    children: [
      {
        path: "/cssvariables",
        name: "CssVariables",
        component: () => import("./pages/css/CssVariables.vue"),
      },
    ],
  },

  {
    path: "/vue3",
    name: "Vue3",
    component: Vue3,
  },

  {
    path: "/firebase",
    name: "Firebase",
    component: Firebase,
  },

  {
    path: "/other",
    name: "Other",
    component: Other,
    children: [
      {
        path: "/command",
        name: "Command",
        component: () => import("./pages/other/Command.vue"),
      },
      {
        path: "/git",
        name: "Git",
        component: () => import("./pages/other/Git.vue"),
      },
    ],
  },

  // 404 catchall
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    return {
      el: "#n",
      top: 10,
      behavior: "smooth",
    }
  },
})

export default router
