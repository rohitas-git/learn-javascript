// JavaScript does not have support for classes, but it does have a syntactic sugar for declaring them.
// Under the hood, it’s still all just objects, delegation, etc. 
// but the sugar really makes it feel like you’re programming in a “classy” language.

// example of a class declaration:
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ',' + this.y + ')';
    }
}

// And here’s its desugaring, i.e., what it really means:
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return '(' + this.x + ',' + this.y + ')';
};