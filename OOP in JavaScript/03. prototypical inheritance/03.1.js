// #Intermediate function Inheritance
// Code refactor
// #prototypical inheritance

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log("duplicate from super");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Circle, Shape); // Prototypical inheritance w/ Intermediate function

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(23, "red");

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
extend(Square, Shape); // replace from upper two line code

const sq = new Square(4, "green");

// #method overwrite
// * method overwrite must declare after resetting prototype and constructpr
Square.prototype.duplicate = function () {
  // if wanted to  default super constructor duplicate method
  Shape.prototype.duplicate.call(this);

  console.log("square duplicate. method overwrite successful");
};
