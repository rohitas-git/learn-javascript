/* -------------------------------------------------------------------------- */
/*                               Iterate | Loop                               */
/* -------------------------------------------------------------------------- */


/* ---------------------------------- While --------------------------------- */
import {print, newline} from "./module.js";

var i=10;
let daysCount=[];
while(i>=0){
    daysCount.push(i);
    i--;
}

/* -------------------------------- For loop -------------------------------- */
// for loop runs for a specific number of times.
// For loops are declared with three optional expressions separated by semicolons:

// for (a; b; c) {...}
// where 
//  a is the initialization statement,
//  b is the condition statement, 
//  c is the final expression.

const myArray = [];

for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

/* -------------------------------- do While -------------------------------- */
var i=6;
do{
    myArray.push(i);
    i++
} while(i<10);

// print(myArray);

/* ---------------------------- Iterate on Array ---------------------------- */

for(let i=0; i< myArray.length; i++){
    // print(myArray[i]);
}

/* -------------------------------- Recursion ------------------------------- */

// Recursion is the concept that a function can be expressed in terms of itself. 
// Important to find the recursion rule
// Note: Recursive functions must have a base case when they return without calling the function again

// multiply the first n elements of an array to create the product of those elements.
// Recursion Rule: multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]
function multiply(array, index){
    // base case
    if (n <= 0) {
        return 1;
    } 
    else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

 /* --------------------------- Ex: Profile Lookup --------------------------- */

 // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    let nameFound;
    let propFound;
  
    for(let i=0;i< contacts.length;i++){
      nameFound = contacts[i].firstName == name;
      
      if (nameFound){
        propFound = contacts[i][prop] != undefined;

        if(propFound){
            return contacts[i][prop];   
        } else {
            return "No such property";
        }
      }
    }
    //debug 
    print(nameFound);
    print(propFound);

    if(!nameFound){
        return "No such contact";
    }
    
    
  }
  print(lookUpProfile("Harry", "likes"));
  print(lookUpProfile("Sherlocks", "likes"));
