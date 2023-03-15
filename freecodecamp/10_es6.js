// 9_keywords.js is part of ES6 Section

/* -------------------------------------------------------------------------- */
/*                               ES6 Additional                               */
/* -------------------------------------------------------------------------- */

// - Arrow Functions
// - Rest parameters
// - Spread Operator
// - Destructuring assignment
// - Template Literals 
// - Concise Object Literal Declarations  
// - Concise Declarative Functions
// - Class Syntax to define Constructor function

import { println } from "./module.js";


/* -------------------------------------------------------------------------- */
/*                Arrow Function Syntax for Anonymous Functions               */
/* -------------------------------------------------------------------------- */
//create inline functions
// note: const declaration is better practice 

const myFunc = function() {
    const myVar = "value";
    return myVar;
}

const myFunc2 = () => {
    const myVar = "value";
    return myVar;
}

const myFunc3 = () => "value";

// arrow fns with parameters
const doubler = (item) => item * 2;
doubler(4);

const doubler2 = item => item * 2;

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

// default parameters
var greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());


/* -------------------------------------------------------------------------- */
/*                               Rest parameters                              */
/* -------------------------------------------------------------------------- */
// With the rest parameter, you can create functions that take a variable number of arguments.

function secondArgument(...arg){
    return arg[1];
}
let ex=secondArgument(12,999,"asd");
println(ex);

/* -------------------------------------------------------------------------- */
/*             Use the Spread Operator to Evaluate Arrays In-Place            */
/* -------------------------------------------------------------------------- */
// unpacks all contents of an array into a comma-separated list.
// spread operator only works in-place, like in an argument to a function or in an array literal.

var arr = [6, 89, 3, 45];
var maximus = Math.max(...arr);
println(maximus);

var arr2=[... arr]; // [6, 89, 3, 45]

/* -------------------------------------------------------------------------- */
/*                          Destructuring assignment                          */
/* -------------------------------------------------------------------------- */

var user = { name: 'John Doe', age: 34 , gender: 'male'};
var { name, gender, age } = user;
println(name, gender, age);

/* ------ Use Destructuring Assignment to Assign Variables from Objects ----- */
var { name: userName, age: userAge } = user;
println(userName, userAge);

/* -- Use Destructuring Assignment to Assign Variables from Nested Objects -- */
var user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

// Variables of same name as those in obj properties
var { johnDoe: { age, email }} = user;

// Variables with different name
var { johnDoe: { age: userAge, email: userEmail }} = user;

var LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};    
var {today: {low:lowToday, high:highToday } } = LOCAL_FORECAST;

/* ------ Use Destructuring Assignment to Assign Variables from Arrays ------ */

// * Key difference between spread operator and array destructuring:
// spread operator unpacks all contents of an array into a comma-separated list.
// cannot pick or choose which elements you want to assign to variables.

var [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

var swapA = 8, swapB = 6;
[swapA,swapB]= [swapB,swapA];

/* --------------------- Destructuring via rest elements -------------------- */
var [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// [a,b,c,...rest_params_array]

/* ------- use Destructuring to Pass an Object as a Function's Parameters ------- */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ( {max,min} ) => (max + min) / 2.0; 

var profileUpdate = ({ name, age, nationality, location }) => { };
var profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}

/* -------------------------------------------------------------------------- */
/*                              Template literal                              */
/* -------------------------------------------------------------------------- */
// This is a special type of string that makes creating complex strings easier.
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

// -backticks ` `
// -multiline in input/output
// -${variablePlaceholder}
//      To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }
var person = {
    name: "Zodiac Hasbro",
    age: 56
};
var greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

println(greeting);

/* -------------------------------------------------------------------------- */
/*                  Write Concise Object Literal Declarations                 */
/* -------------------------------------------------------------------------- */

var getMousePosition = (x, y) => ({
    x: x,
    y: y
});

var getMousePosition = (xpos, ypos) => ({ xpos, ypos });

println(getMousePosition(10,19));


/* -------------------------------------------------------------------------- */
/*                Write Concise Declarative Functions with ES6                */
/* -------------------------------------------------------------------------- */

// With ES6, you can remove the function keyword and colon altogether when defining functions in objects.

var person = {
    name:"Tom",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
};

var person = {
    name:"Tom",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
};

/* -------------------------------------------------------------------------- */
/*              Use CLASS Syntax to Define a Constructor Function             */
/* -------------------------------------------------------------------------- */
// ES6 provides a new syntax to create objects, using the class keyword.

// ES5: an object can be created by defining a constructor function and using the new keyword to instantiate the object.
// ES6: a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

// Explicit constructor
class Music {
    constructor(rating) {
      this.rating = rating;
    }
    charts(){
      console.log("Its " + this.rating + " star !");
    }
}

// Implicit constructor (no arguments)
class Rocket {
    launch() {
      console.log("To the moon!");
    }
  }
  
var hit= new Music(5);
hit.charts();

/* -------------------------------------------------------------------------- */
/*           Use getters and setters to Control Access to an Object           */
/* -------------------------------------------------------------------------- */

// Getters and setters are important because they hide internal implementation details.
// Note: It is convention to precede the name of a private variable with an underscore (_). 
//      However, the practice itself does not make a variable private.

class Book {
    constructor(author) {
      this._author = author;
    }

    
    get writer() {
      return this._author;
    }

    set writer2(updatedAuthor) {
      this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer); //   calling getter 
novel.writer2 = 'newAuthor'; //  calling setter 
console.log(novel.writer);

// This is the power of a getter and a setter. 
// You are creating an API for another user, who can get the correct result regardless of which one you track.
// In other words, you are abstracting implementation details from the user.

// setter and getter are like an alias over object's properties