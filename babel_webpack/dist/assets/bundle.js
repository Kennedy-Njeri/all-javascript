"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var greet = function greet(name) {
  console.log("hello ".concat(name, " please send your photos"));
};

greet("kevin1");

var Person = function Person(name, age) {
  _classCallCheck(this, Person);

  this.name = name;
  this.age = age;
};

var person = new Person('Kennedy', 28);
console.log(person);
