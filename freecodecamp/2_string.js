/* -------------------------------------------------------------------------- */
/*                                  //STRING                                  */
/* -------------------------------------------------------------------------- */
// '' ""  +  ' \" (-__-) \" ' 

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
var myStr = '<a href="Address" target="Target"> Link</a>';
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
// const badStr = 'Finn responds, "Let's go!"'; ERROR

/* ---------------------------- Escape Characters --------------------------- */
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \t	tab
// \r	carriage return
// \b	word boundary
// \f	form feed

const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"; 

/* ----------------------------- Concatenation ---------------------------- */
// Build String over Multiple line
// Insert/Add a variable in a String

const myStr3 = "This is the start. " + "This is the end.";

let myStr4 ="This is the first sentence. ";
myStr4 +="This is the second sentence.";

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";

const someAdjective = "Fun";
let funCode = "Learning to code is ";
funCode+=someAdjective
console.log(funCode.length);

/* ---------------------------- Bracket Notation ---------------------------- */
const firstName = "Charles";
const firstLetter = firstName[0];
const thirdLetter =firstName[2];
const lastLetter = firstName[firstName.length - 1];
const thirdToLastLetter = firstName[firstName.length - 3];

/* --------------------------- String Immutability -------------------------- */
var myStr = "Bob";
// myStr[0] = "J"; ERROR because of String Immutability
myStr = "Job"; // Alternative
