import {println, print} from "./module.js";

/* -------------------------------------------------------------------------- */
/*                            Using the Test Method                           */
/* -------------------------------------------------------------------------- */

// - Match a Single Literal Strings 
// - Match a Literal String with Different Possibilities
// - Ignore Case While Matching
//  - Extract Matches

// Regular expressions are used in programming languages to match parts of strings. 
// You create patterns to help you do that matching.

var testStr = "freeCodeCamp";
var testRegex = /Code/;  // Regular Expression

console.log(testRegex.test(testStr) + "\n-----------------");

/* -------------------------- Match Literal Strings ------------------------- */

var testStr = "Hello, my name is Kevin.";
var testRegex = /Kevin/;
var wrongRegex = /kevin/;

println(testRegex.test(testStr)); // true
println(wrongRegex.test(testStr)); //false

/* ----------- Match a Literal String with Different Possibilities ---------- */

var myName ="Rohitas"
var nameRegex=/rohitas | Rohitas| ROHITAS/;
println(nameRegex.test(myName));


/* ----------------------- Ignore Case While Matching ----------------------- */
// Lettercase Differences: aA bB ...
// You can match both cases using what is called a flag. 
// There are other flags but here you'll focus on the flag that ignores case - the i flag. 
// You can use it by appending it to the regex.

var myName ="RohitasBansal"
var nameRegex=/rohitasBanSal/i;
println(nameRegex.test(myName));

/* ----------------------------- Extract Matches ---------------------------- */
// You can also extract the actual matches you found with the .match() method.

var extractStr = "Extract the word 'coding' from this string.";
var anyRegex = /roh/; 
var result = extractStr.match(anyRegex);
println(result);

// Match vs Test
'string'.match(/regex/);
/regex/.test('string');

/* --------------------- Find More Than the First Match --------------------- */
// To search or extract a pattern more than once, you can use the global search flag: g.

var extractStr = "Extract the word 'coding' from this string.";
var anyRegex = /e/g; 
var result = extractStr.match(anyRegex); //['t','t','t','t','t']
println(result);