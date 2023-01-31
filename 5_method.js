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
    m2: function() { … }
  }).m1();

//   This is a subtle bug, and JavaScript programmers get bit by it all the time. 
// The usual work-around, once you realize that this is the problem, 
// is to declare a local variable called self through which the helper function can access the receiver
