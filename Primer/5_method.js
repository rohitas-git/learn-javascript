// LINK: https://www.cs.cmu.edu/~aldrich/courses/17-396/js/

// * A method is just a function that’s stored in a property.

var aPoint = {
    x: -2,
    y: 5,
    toString: function() {
      return '(' + this.x + ',' + this.y + ')';
    }
};

// To evaluate a method call e_recv.m(e1, e2, …, en), a JavaScript interpreter will:
//
// evaluate e_recv to get the object that is the receiver of the message,
// evaluate the arguments,
// look up the function that is stored in the receiver’s m property, and
// call that function with the values of the arguments, and with the pseudo-variable this bound to the receiver.

// So if you declare a helper function inside of a method — which seems like a reasonable thing to do! — 
// it won’t work as you would expect:

/* 
The above code is calling the m1 method on an object.
The m1 method calls the m2 method on the same object.
The m1 method also calls a helper function. The helper function calls the m2 method on the same object. 
*/
({
    m1: function() {
      // here, `this` is the receiver
      this.m2();  // works
  
      function helper() {
        // but here, `this` is `undefined`
        this.m2();  // ERROR!
      }
      helper();
    },
    m2: function() { return 0 }
  }).m1();

//   This is a subtle bug, and JavaScript programmers get bit by it all the time. 
// The usual work-around, once you realize that this is the problem, 

// * is to declare a local variable called self through which the helper function can access the receiver
({
  m1: function() {
    var self = this;
    function helper() {
      // here, `this` is still `undefined`
      // but we have access to the receiver through `self`
      self.m2();  // works!
    }
    helper();
  },
  m2: function() { return 0 }
}).m1();

// * This works because a fat arrow function captures not only the local variables, but also this from its enclosing lexical scope.
({
  m1: function() {
    var helper = () => this.m2();  // works!
    helper();
  },
  m2: function() { return 0 }
}).m1();