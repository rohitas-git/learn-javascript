import {println} from "./module.js";

/* ------------------------------ Random Number ----------------------------- */

// Random decimal number between [0,1)
let randomDecimal = Math.random();

// Random whole number btw [0,10)
let randomWhole= Math.floor(Math.random() * 10);

function randomRange(myMin, myMax) {
    let result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return result
}
println( randomRange(10,100) );

/* ------------------------- parse String to Integer ------------------------ */

const aInt = parseInt("007.1321");
const aNan = parseInt("asa12123");
const aFloat = parseFloat("3.14159265359");

println(aInt, aNan, aFloat);

function binaryToInteger(str){
    return parseInt(str,2);
}
println(binaryToInteger("100010"));

/* ---------------------------- Conditional (Ternary) Operator ---------------------------- */
// a one line if-else expression.
// 
// a ? b : c
// a - the condition
// b - code run when condition true
// c - code run when condition false

println( 15 > 12? "lala" : "lolo"  );
println( 5 > 12? "lala" : "lolo"  );

// Chained Ternary operator
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
}
function checkSign(num) {
    return (num > 0 ) ? "positive" 
      : (num < 0) ? "negative" 
      : "zero";
  
}

/* ----------------------------- Ex of Recursion ---------------------------- */
// Base case: [] when n < 1
// Recursion Rule: countArr[n] = countArr[n-1].push(n)
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
} 
const rangeAsc5 = countup(5);
println(rangeAsc5);

// Base case: [] when n < 1
// Recursion Rule: countArr[n] = countArr[n-1].unshift(n)
function countdown(n){
    if (n<1){
        return []
    } else{
        const countArray= countdown(n-1)
        countArray.unshift(n);
        return countArray;
    }    
}
const rangeDesc5 = countdown(5);
println(rangeDesc5);


// Rule: countArr[a,n]=countArr[a,n-1].push(n)
// Base: when n=startNum, arr = 
function rangeBetween(startNum, endNum){
    if(endNum<startNum){
        return [];
    }else{
        const countArray = rangeBetween(startNum,endNum-1);
        countArray.push(endNum);
        return countArray;
    }
}
println(rangeBetween(6,9));

//Solution2
// function rangeOfNumbers(startNum, endNum) {
//     return endNum < startNum
//       ? []
//       : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
// }

//Solution3:
// function rangeOfNumbers(startNum, endNum) {
//     return endNum < startNum
//       ? []
//       : [...rangeOfNumbers(startNum, endNum - 1), endNum];
// }
