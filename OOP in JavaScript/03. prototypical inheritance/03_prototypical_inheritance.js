// #prototypical inheritance

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  // Call the super constructor 🈴
  // SuperObjectName.call(this,propertyName) <==
  Shape.call(this, color);

  this.radius = radius;
}
// create prototypical inheritance
// new Circle.prototype.constructor === new Circle()
// for default => Circle.prototype = Object.create(Object.prototype)
// Object.create(ParentObject.prototype)  <== keyword

Circle.prototype = Object.create(Shape.prototype);

// *when you reset the prototype you much reset the constructor
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(23, "red");

// #Call the super constructor 🈴

// #Intermediate function Inheritance

function Square(size, color) {
  Shape.call(this, color);
  this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const sq = new Square(4, "green");
