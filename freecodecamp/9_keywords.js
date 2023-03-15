/* --------------------- Different scopes of var and let -------------------- */

import { println } from "./module.js";

// When you declare a variable with the var keyword, it is declared globally, 
// or locally if declared inside a function.

// When you declare a variable with the let keyword inside a block, statement, or expression, 
// its scope is limited to that block, statement, or expression.

// 'let' more scope limited compared to 'var' which tends to be global of all scopes except that of function

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
println(numArray,i);  //[0,1,2] , 3

// var keyword for i
var printNumTwo;
for (var i = 0; i < 10; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
println(printNumTwo()); // i=10 not 2 

// let keyword for k 
let printNum;
for (let k = 0; k < 10; k++) {
    if (k === 5) {
      printNum = function() {
        return k;
      };
    }
}
println(printNum()); // k=5 not 10 
// print(k); Error

/* ----------------------- Mutate an Array Declared with const ----------------------- */

// Using the const declaration only prevents reassignment of the variable identifier.
const s = [5, 6, 7];
// s = [1, 2, 3];  
s[2] = 45; 
console.log(s);

function editInPlace() {
  const toChange=[2,5,7];
  for(let i=0;i<s.length;i++){
    s[i]=toChange[i];
  }
}
editInPlace();
println(s);

// const declaration alone doesn't really protect your data from mutation. 

/* ------------------------- Prevent Object Mutation ------------------------ */

// To ensure your data doesn't change, JavaScript provides 
// a function Object.freeze to prevent data mutation.

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS)
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
