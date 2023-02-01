// declare a function: 'function' keyword
function add(x, y) {
    return x + y;
}
// * Functions are first-class values. 
//
// * This means you can store a function in a variable, property, or an array. 
// You can also return a function from another function or a method.
// 
// Note that you don’t have to declare a function in order to get your hands on a function value.
// *  In JavaScript, there are two ways to write function expressions. 
// 
// *  One looks similar to a function declaration:
// 
// 
    (function(x) { return x + 1; })(5)
//
// 
// * fat arrow function
//
// 
    //! [1, 2, 3].map(x => x + 1)
//


// * example that shows that a function can reference variables from its enclosing environment:
//
// 
function makeCounter() {
  var count = 0;
  return function() {console.log(count); return count++; };
}

var counter = makeCounter();
counter();  //0
counter();  //1
counter();  //2


//
// In JavaScript, you can call a function with any number of arguments, no matter how many formal parameters that function has in its declaration.
// 
// * In JavaScript, Argument in Function Call >= <= == Arguments in Function Declaration
//
// A function can access the arguments that were passed to it via its formal parameters or the arguments object, which is, erm, not entirely unlike an array.
// The arguments can be used to write variadic functions, i.e., functions that take a variable number of arguments.
// 
function sum(/* a, b, c, … */) {
    var ans = 0;
    for (var idx = 0; idx < arguments.length; idx++) {
      ans += arguments[idx];
    }
    console.log("Ans:", ans);
    return ans;
  }
  
  sum(5, 10, -2);

// * Warning! The arguments object is array-like, but it’s not really an array.
// This is unfortunate for a number of reasons, not least of all because it means that arguments doesn’t support useful Array methods like map and reduce.
// If you really want to use those methods, here’s a way to create an array that contains the arguments that were passed to your function:
var args = Array.prototype.slice.call(arguments);