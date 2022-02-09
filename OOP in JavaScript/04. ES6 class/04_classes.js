// #Classes

// this is a constructor
/**
    function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
        console.log("draw");
    };
    }
*/
// 👇convert to ES6 classes👇

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {}; // this will add to instance
  }

  // instance method
  // this will add to phototype
  draw() {
    console.log("draw");
  }

  // static method . it not tide to the particular object 🈴
  // it no longer available to the "class object". it only accessible through "Class itself"

  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const c = new Circle(2566);

// using Static meth ods
const cp = Circle.parse('{"radius":25}');

// #Hoisting

// in JS two type of function declaration
// 1. function declaration  =>> function sayHello(){}
// it is hoisted meaning they raised to top of the code. so //* it can be called before declaration

// 2. function expression   =>> const sayGoodbye = function(){};  put semicolon in the end
// it is not hoisted meaning. so //! it has to call after declaration

// For class declaration is the same to function declaration but //! both class declaration are not hoisted

// #Static Method
// two types of methods 1.Instance Method, 2. Static Method 🈴

class Math2 {
  static abs(number) {
    console.log(`absolute number is ${number}`);
  }

  static add(number1, number2) {
    console.log(`add is :${number1 + number2}`);
  }
}

Math2.abs(5);
Math2.add(5, 5);

// #This <== keyword

const ThisX = function () {
  this.print = function () {
    console.log(this); //😈
  };
};

const t = new ThisX(); // its point to the "ThisX" class
// called : method call.  because we calling a "method" of an "object"
// it this case "this 😈" keyword is pointing to "t" object
t.print();

const print = t.print; // get the function reference
console.log(print); // print the function code not execute

//called: function call. it a stand alone function not part of an object/
// when we call this function as a method by default "this 😈" pointing to global obj "window"
print(); // will see 'window' object

// using " 'use strict' "" (at the top of code) will change the behaviour of 'this' keyword

//while using "Class", "Class" will execute the body in " 'use strict' "" mode.

// # Private Properties with symbol
// Using symbols to implement private properties and methods

const _color = Symbol();
const _death = Symbol();
class PrivatePropertyWithSymbol {
  constructor(color) {
    // "Kind of" private property
    this[_color] = color;
  }
  // "Kind of" private method
  [_death]() {}
}
/**
    By "kind of" means: these properties and methods are essentially
    part of the object and are accessible from the outside. But accessing
    them is hard and awkward. 
 */

const pps = new PrivatePropertyWithSymbol("red");

// #using WeakMaps to implement private properties and methods
const _width = new WeakMap();
const _move = new WeakMap();
const _moveArrowFunction = new WeakMap();
class Rectangle {
  constructor(width) {
    _width.set(this, width);

    _move.set(this, function () {
      console.log("move", this); // here "this" is undefined. because it is 'use strict' mode
    });
    // now we have to use "Instance of Rectangle Object"
    // so use 👇 way. "Arrow Function" will solve this
    _moveArrowFunction.set(this, () => {
      console.log("_moveArrowFunction", this);
      console.log("this is an output");
    });
  }

  draw() {
    console.log("get the value of _width", _width.get(this));
  }

  useMoveFunctionFromHere() {
    _move.get(this)(); // so this return a function so we have to call it. () <== use it for call

    _moveArrowFunction.get(this)();
    console.log("useMoveFunctionFromHere");
  }
}

// WeakMaps give us better protection than symbols. There is no way
// to access private members implemented using WeakMaps from the
// outside of an object.

const r = new Rectangle(10);

// #Getter And Setters
// we want to show only value, and like properties not method

const _name = new WeakMap();

class Person {
  constructor(name) {
    _name.set(this, name);
  }

  // #getter

  get name() {
    return _name.get(this);
  }

  set name(value) {
    if (!value) throw new Error("Cant be Empty");
    _name.set(this, value);
  }
}

const person = new Person("sizar");

// #Inheritance

class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("moving");
  }

  overWriteMe() {
    console.log("overWrite me");
  }
}

class Triangle extends Shape {
  // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  // use "super(from super arguments,addition argument)" <== keyword

  constructor(color, additionalArguments) {
    super(color); // color from parent(Shape) class
    this.additionalArguments = additionalArguments; //  from (Triangle) class
  }

  draw() {
    console.log("drawing triangles");
  }

  // method overwrite
  overWriteMe() {
    console.log("overWrite done from super class");

    // now if you wanted to use some code from patent "move method".
    super.overWriteMe();
  }
}

const tr = new Triangle("red", 25);
