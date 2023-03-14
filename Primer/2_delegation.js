// * JavaScript is a prototype-based language: 
// every object has a prototype from which it may inherit properties. 
// For example, the prototype of all strings is String.prototype, which is where methods like indexOf and substr are defined. 

// * object delegates to its prototype ==> property look-up operation
// * prototype chain is used for property look-up
//
// We eventually reach null, which is not an object and therefore does not have any properties, 
// then obj.p will evaluate to the special value undefined.
// 
// * Create object that delegates to another object
// My shirt is like daddy’s shirt…
var myShirt = Object.create(daddysShirt);