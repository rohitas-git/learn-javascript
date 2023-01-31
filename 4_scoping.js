// * In JavaScript, the only thing that is a lexical scope is a function.
// catch blocks also get their own lexical scope.

// So when you write this: 
function f(x) {
    if (x > 5) {
        var y = x * x;
        …
    }
    …
}

//   What it really means is this: 
function f(x) {
    var y;
    if (x > 5) {
        y = x * x;
        …
    }
    …
}
// Usually this isn’t a problem, but it’s something you should be aware of. 
// * And if you’re used to shadowing variable declarations, 
// get ready to spend countless hours debugging your programs and cursing Brendan Eich!
// 