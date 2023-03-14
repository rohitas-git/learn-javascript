// So far we’ve seen two ways to call a function,
// 
// the “function” way, e.g., f(1, 2), and
// the “method” way, e.g., obj.m(1, 2)
// 
// and we’ve seen what happens with this for each of them.

//* There are two more ways to call a function in JavaScript that are worth mentioning.
// 
// One is through the function’s call method, which is useful because 
// it lets you specify the object that should be bound to this when the function’s body is evaluated,
//* ex: f.call(objThatWillBeThis, 1, 2).

// The other way is through the function’s apply method, which is like call 
// except that you pass the arguments as an array, 
// * e.g., f.apply(objThatWillBeThis, [1, 2]). 
// This is useful if, at compile time, you don’t know how many arguments your code will pass to a method or function.

function logged(f) {
    return function() {
      console.log(f.name + ' was called');
      return f.apply(this, arguments);
    };
}

function inc(x) {
    return x + 1;
}
var loggedInc = logged(inc);
loggedInc(5); //Outputs 'inc was called' to the console and returns 6.
  
function add(x, y) {
    return x + y;
}
var loggedAdd = logged(add);
loggedAdd(1, 2); // Outputs 'add was called' to the console and returns 3.