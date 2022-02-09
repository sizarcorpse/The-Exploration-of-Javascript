// #inheritance

// #Prototypical Inheritance
// Prototype is essentially a parent of another object . prototype = parent
// Object.getPrototypeOf(y) <== check prototype

// #Multi-level Inheritance

// #Descriptors

let person = { name: "sizar" };

let objectBase = Object.getPrototypeOf(person);

// Object.getOwnPropertyDescriptor(objectBase, "target method || property") <== check prototype
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

// set own descriptor || attribute

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

person.name = "trying  to change the name"; // wont work because "writable: false"
console.log(person);
console.log(Object.keys(person)); // wont show because "enumerable: false"
delete person.name; // wont delete because "configurable:false"
console.log(person);

// #Constructor Prototypes

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(1);

// Constructors have a "prototype" property. It returns the object
// that will be used as the prototype for objects created by the constructor.
console.log(Circle.prototype);
let obj = {};
let obj2 = new Object();
console.log("object", obj.prototype); // object doesn't has prototype
console.log("object has proto", obj.__proto__); // has __proto__
console.log("'Constructor' who created upper object 👆", Object.prototype); // has prototype
// so parent for this object "obj.__proto__" === 'Object.prototype' property for this constructor

// #Prototype vs Inheritance members

/**
// without prototype
function CircleProto(radius) {
  this.radius = radius;

  this.draw = function () {
    return console.log("draw");
  };
}

const c1 = new CircleProto(1);
const c2 = new CircleProto(2);
console.log("c1", c1);
console.log("c2", c2);
*/

// with prototype
// essentially we have 2 kinds of properties and members in JS
//1. instance member > instance properties and method
//2. prototype members

function CircleProto(radius) {
  this.radius = radius; //instance member
  this.move = function () {
    console.log("move");
  };
}

//prototype members
CircleProto.prototype.draw = function () {
  this.move();
  console.log("draw");
};

const c1 = new CircleProto(1);
const c2 = new CircleProto(2);
console.log("c1", c1);
console.log("c2", c2);
console.log("c1 proto", c1);
c2.draw();

// overwrite Object's method
console.log(c1.toString());
CircleProto.prototype.toString = function () {
  return "successfully overwrite" + this.radius;
};
console.log(c1.toString());

// both this kinds of members(ins , prot) can reference other members
c1.draw();

// #loop over Instance vs Prototype members

//return only instance member or own properties.   instance === own
console.log(Object.keys(c1));

//return all members(instance + prototype)
for (let keys in c1) console.log(keys);

//
console.log(c1.hasOwnProperty("radius")); // true
console.log(c1.hasOwnProperty("draw")); // false cz draw is a prototype member
