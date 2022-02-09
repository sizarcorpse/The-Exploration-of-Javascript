//  #Polymorphism

// intermediate function inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate from super");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("duplicate from overwrite");
};

function Square() {}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("duplicate from Square overwrite");
};

const c = new Circle();

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}

// #MIXIN | COMPOSITION

function mixin(target, ...sources) {
  Object.assign(target.prototype, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

// Assign COMPOSITION
// Object.assign({}, ...objects); 1st arg : empty object literal, 2nd arg : list of object you want to assign
const person = Object.assign({}, canWalk, canEat);
console.log(person);

// Best way
// Assign with Constructor

function Person() {}
Object.assign(Person.prototype, canWalk, canEat);

const p = new Person();
console.log(p);

function Goldfish() {}
// Object.assign(Goldfish.prototype, canEat, canSwim);
// convert this line 👆 win "mixin function"
mixin(Goldfish, canEat, canSwim);
const f = new Goldfish();
console.log(f);
/**
 * 


















 */
// # Practice

function HtmlElement() {
  this.click = function click() {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

const html = new HtmlElement();

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    items.push(item);
  };
  this.removeItem = function (item) {
    this.items.slice(this.items.indexOf(item, 1));
  };

  this.render = function () {
    return `
    <select>
    ${this.items.map((item) => `<option>${item}</option>`).join("")}
    </select>
    `;
  };
}

// ! only inherits prototype not instance member
// here can access prototype member but not instance member
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// * prototype and instance member
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const xx = new HtmlSelectElement([1, 2, 3]);

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}"/>`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const im = new HtmlImageElement();

const elements = [
  new HtmlSelectElement([1, 2, 3, 4, 5, 6]),
  new HtmlImageElement("http://"),
];

for (let e of elements) {
  console.log(e.render());
}
