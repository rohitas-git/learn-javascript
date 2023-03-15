/* -------------------------------------------------------------------------- */
/*                                  Variable Types                            */
/* -------------------------------------------------------------------------- */

//  8 data type in Javascript
//  - undefined, 
//  - null, 
//  - boolean, 
//  - string, 
//  - symbol, 
//  - bigint, 
//  - number,
//  - object.

/* -------------------------------------------------------------------------- */
/*                                   Variable                                 */
/* -------------------------------------------------------------------------- */

// Variable Declaration Statement have inital value: undefined 

var myVariable;  
var any;

// Assignment:
// everything to the right of the equal sign is resolved before the value is assigned

myVariable = 5;
any=myVariable;

// Mutability in case of var declared variables
var t="sun";
var t="moon"
t="star"

/* ----------------------------------- let ---------------------------------- */
let nickName="Jon";
nickName="Ron"
// let nickName="Om"; ERROR

/* ---------------------------------- const --------------------------------- */
const SUB=100-79;
// SUB=12; ERROR
// const SUB=1; ERROR


// Mathematical Operation with Undefined values -> NaN (Not a Number)
var x; 
x+=5;
console.log(x);

/* --------------------------------- Type of -------------------------------- */
import {println,newline, print} from "./module.js";
newline();

var empty;
var aBool=true;

console.log(typeof  ABC);
console.log(typeof 3);
console.log(typeof '3');
console.log(typeof aBool);
console.log("NaN: " +typeof NaN);
console.log(typeof empty);
console.log("null: "+ typeof null);
console.log(typeof  12.132);
// console.log(typeof  );


