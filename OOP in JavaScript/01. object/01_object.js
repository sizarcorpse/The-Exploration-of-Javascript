// #object literals
// The simplest way to create an object is using an object literal

// const circle = {
//   radius: 1,
//   location: { x: 1, y: 1 },
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw();

// To create multiple objects with the same structure and behaviour (methods), use a factory or a constructor.

// #Factory function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("factory function");
    },
  };
}
const CreateCircle = createCircle(1);
CreateCircle.draw();

// #Constructor function
// this should be Upper case

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("construction function");
  };
}
const circle = new Circle(10);
circle.draw();

// 'new' keyword create an empty object.
// Adds a property to the new object (__proto__) that links to the constructor function's prototype object.
// Binds the newly created object instance as the 'this' context
// Returns 'this' if the function doesn't return an object.

// #Constructor Property

// every object of JS has a property called 'Constructor'. that references the function was used to create that object.
// another.constructor
// createCircle.constructor
// let x = {} ==>; let x  = new Object()

// #Function are object
// Circle.["name",'length',]
const CircleFunction = new Function(
  "radius",
  `  
this.radius = radius;
this.draw = function () {
  console.log("Circle Function function");
};`
);
const circleFunction = new CircleFunction(1);

// method available for functions
//Circle.call : for call a function
// Circle.call({}, 1,2,3) === const circle = new Circle(1); first agr is {} specified the target of "this" , 2 are args(are explicitly)
//Circle.apply({},[1,2,3])

// #Value Type vs References Type
// Number,String,Boolean,Symbol,undefined,null = Value Type
// Object,Function,Array = References Type
// Primitives are copied by their value
// Object are copied by their reference

//#Adding and removing functions
// dot notation

circle.location = { x: 1 };

// branch notation
circle["location-y"] = { y: 1 };

//delete properties

delete circle["location-y"];

//#LOOP
// "for in loop"
// for( let key in objectName)

for (let key in circle) {
  console.log(key);
}

// with value
for (let key in circle) {
  console.log(key, circle[key]);
}
// only properties not method

for (let key in circle) {
  if (typeof circle[key] != "function") console.log(key, circle[key]);
}

//another approach
// Object <== keyword

const keys = Object.keys(circle);
console.log("keys", keys);

// checking if "Properties"  in "Object"
// "in" <== keyword

if ("radius" in circle) console.log("yes. circle has radius properties");

//# Abstraction #Private method and properties
// hide the details and show the essentials

// "scope" are temporary but "closure" stayed

function CircleAbstract(radius) {
  let defaultLocation = { x: 0, y: 0 }; // private but more accurately not private member,technically they are not inside of circle object. tey are local variable defined in circle object. like as private member
  let computeOptimumLocation = function (factor) {
    // private same
    //...
  };

  this.radius = radius; // properties

  this.draw = function () {
    computeOptimumLocation(0.1);
    console.log("abstraction");
  };
}
const circleAbstract = new CircleAbstract(10);
circleAbstract.draw();

// #Getter and setter

function CircleGetterSetter(radius) {
  let defaultLocation = { x: 0, y: 0 };
  this.radius = radius;

  //way 1
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    console.log("Getter and Setter");
  };

  // way 2
  // defineProperty <== keyword
  // 1 arg = the 'Object' that we wanna add new property to.
  // 2 arg = name of property
  // 3 arg = an "Object". we will ad key value pair. "Key" = [set || get], "value" = function.   [set]

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location");
      defaultLocation = value;
    },
  });
}
const circleGetterSetter = new CircleGetterSetter(10);
circleGetterSetter.getDefaultLocation();
circleGetterSetter.defaultLocation;
circleGetterSetter.defaultLocation = 1;
circleGetterSetter.draw();
