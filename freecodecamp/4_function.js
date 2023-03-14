/* -------------------------------------------------------------------------- */
/*                                  Function                                  */
/* -------------------------------------------------------------------------- */

// function fnName( parameters, ...) { fn Body}


function print(arg1){console.log(arg1);}

function printHelloWorld() {
    console.log("Hello World");
}

/* --------------- Passing Values to Functions with Arguments --------------- */
// Parameter: Variables that act as placeholders for the values that are to be input to a function when it is called.
// Argument: The actual values that are input (or "passed") into a function when it is called 

function printFun(param1, param2) {
    console.log(param1, param2);
}
printFun("God","World");

/* --------------- Return a Value from a Function with Return --------------- */

function plusThree(num) {
    return num + 3;
}
const answer = plusThree(5); // Assignment with a Returned Value
print(answer);

/* --------------------------- Scope and Function --------------------------- */
//  Global scope: 
//  Variables which are defined outside of a function block have it.
//  Variables which are declared without the let or const keywords are automatically created in the global scope.

// Local Scope:
// Variables which are declared within a function, as well as the function parameters

// Precedence in case of same name:
// It is possible to have both local and global variables with the same name.
// When you do this, the local variable takes precedence over the global variable.

let myGlobal= 5;
function local() {
    let mylocal=12;
    anotherGlobal=99;
    // print(myGlobal);
    
    let myGlobal=125;
    print(myGlobal);
}
print(myGlobal);
// print(anotherGlobal); 

local();
print(anotherGlobal);
// print(mylocal);

/* ------------------------- Undefined Return Value ------------------------- */

// A function can include the return statement but it does not have to. 
// In the case that the function doesn't have a return statement, when you call it, 
// the function processes the inner code but the returned value is undefined.

print(local());

