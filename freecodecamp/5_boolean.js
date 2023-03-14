/* -------------------------------------------------------------------------- */
/*                                   Boolean                                  */
/* -------------------------------------------------------------------------- */

//* TOC:
// Bool
// Inequalities
// Logical Operators
// if, else, else if
// Switch 

// Possible values of a Boolean: 
// true 
// false


/* ----------------------------------- if Statement ----------------------------------- */

// if CondnTrue { ExecuteThis;}

function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
}
test(true);
test(false);

// Useful 
function print(arg1){console.log(arg1);}
function newline(){print("-------------------");}

/* ----------------------------------- Inequalities ---------------------------------- */
// 1.   == 
// 2.   ===
// 3.   !=
// 4.   !==
// 5.   >
// 6.   >=
// 7.   <=


// In order for JavaScript to compare two different data types (for example, numbers and strings), 
// it must convert one type to another. 
// This is known as Type Coercion. 
// Once it does, however, it can compare terms as follows:

// == Equality : Does Type Coercion
print("12"==12);
print('12'==12);
print(12.00==12);
print(11==12);

newline();

// === Strict Equality : Does not Type Coercion
print("12"===12);
print('12'===12);
print(12.00===12);

newline();

// Inequality : != : Does Type Coercion
print("12"!=12);
print('12'!=12);
print(12.00!=12);
print(11!=12);

newline();

// Strict Inequality: !== : Does not Type Coercion
print("12"!==12);
print('12'!==12);
print(12.00!==12);

// > : Does Type Coercion
// >= : Does Type Coercion
// < : Does Type Coercion
// <= : Does Type Coercion


// Returning Boolean Values from Functions
function isEqual(a, b) {
    return a === b;
}

function isLess(a, b) {
    return a <= b;
}

newline();

/* --------------------------- Logical Operations --------------------------- */

// AND: && 
print(true &&false);

// OR: ||
print(true || false);

newline();
/* ----------------------------- else Statement ----------------------------- */

function test2 (myCondition) {
    if (myCondition) {
        return "It was true";
    } else{
        return "It was false";
    }
}
print(test2(true));
print(test2(false));

newline();
/* --------------------------------- else if -------------------------------- */

function rangeOf(number){
    if (number > 10) {print(">10");}
    else if ( number < 0 ) {print("<0");}
    else {print("Between 0 and 10");}
}
rangeOf(5);
rangeOf(-1);
rangeOf(14);

/* ----------------------------- Chained if else statement ---------------------------- */
function testSize(num) {  
  if (num < 5) { return "Tiny";}
  else if(num < 10){return "Small";}
  else if(num < 15){return "Medium";}
  else if(num < 20){return "Large";}
  else if(num >= 20){return 'Huge';}
  else {return "Change Me";}      
}
print(testSize(7));

/* ------------------------------ Golf Example ------------------------------ */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
newline();

function golfScore(par, strokes) {
  if (strokes ==1) { return names[0];}
  else if(strokes <= par-2) {return names[1];}
  else if(strokes == par-1) {return names[2];}
  else if(strokes == par)   {return names[3];}
  else if(strokes == par+1) {return names[4];}
  else if(strokes == par+2) {return names[5];}
  else if(strokes >= par+3) {return names[6];}
  else {return "Change Me";}      
}
print(golfScore(5, 2));

newline();
/* --------------------------------- Switch --------------------------------- */
// A switch statement tests a value and can have many case statements which define various possible values. 
// Statements are executed from the first matched case value until a break is encountered.
// ** case values are tested with strict equality (===)
// If the break is omitted, the next statement will be executed.
// 
// The default statement which will be executed if no matching case statements are found.

function caseInSwitch(val) {
    let answer = "";
    switch (val){
        case 1:
        answer+= "alpha";
        break;

        case 2:
        answer+= "beta";
        break;
        
        case 3:
        answer+= "gamma";
        break;
        
        case 4:
        answer+= "delta";
        break;

        case 5:
        case 6:
        case 7:
        answer+="psi";
        break;

        default:
        answer+="pi";
    }
    return answer;
}
print(caseInSwitch(8));

/* ------------------------- Example: Card Counting in BlackJack------------------------- */
import {print} from './module.js'

let count=0;
function cc(card) {
  // Only change code below this line
    switch (card){

    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;

    case 9:
    case 8:
    case 7:
    // count++;
    break;

    case "K":
    case "Q":
    case "J":
    case "A":
    case 10:
    count-=1;
    break;

    }

    if(count>0){return count + " Bet";}
    if(count<=0){return count + " Hold";}

}

print(cc(2));
print(cc(3));
print(cc(7));
print(cc('K'));
print(cc('A'));
