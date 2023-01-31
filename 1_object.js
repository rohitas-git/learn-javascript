// * JavaScript’s objects are dictionaries that map property names to values. 

//object constructor to create an object
new Object()

// *object literal
var daddysShirt = {
    type: 'polo',
    color: 'white',
    numButtons: 3
};

// * access and assign values to properties of an obj

//access
daddysShirt.color 
// assign: automatically coresponding property will be added if the object doesn’t already have it
daddysShirt.type = 'guayabera';
daddysShirt.numButtons = 7;
daddysShirt.brand = 'Banana Republic';

// And if you don’t know the name of a property at compile time, 
// there’s also a square bracket syntax that lets you compute the name dynamically
var propName = 'num' + 'Buttons';
// daddysShirt[propName]; --> Evaluates to 7

// * Property names are always strings. 
// IF Non-string property - Access or Assignment of an object
// * the non-string value will be implicitly converted to a string via its toString() method.
var someObject = { foo: 42, bar: 'hello world' };
// someObject’s toString() returns '[object Object]'. Yup, the default toString() is pretty useless.
// Since daddysShirt does not have a property with that name, 
// daddysShirt[someObject] will evaluate to the special value undefined.
daddysShirt[someObject]; 

// * remove a property
// after
delete daddysShirt.color;
// the expression daddysShirt.color will evaluate to undefined.