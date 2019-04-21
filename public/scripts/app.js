"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Author = function () {
  function Author() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Author);

    this.name = name;
    this.age = age;
  }

  _createClass(Author, [{
    key: "getGreeting",
    value: function getGreeting() {
      // return "Hi, " + this.name + "!";
      return "Hi, I am " + this.name + "!";
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return "My age is " + this.age + ".";
    }
  }]);

  return Author;
}();

var Poet = function Poet() {
  _classCallCheck(this, Poet);
};

var person = new Author("Ernest Hemingway");
console.log(person.getGreeting(), person.getDescription());

var other = new Author("Roxanne Gay", 34);
console.log(other.getGreeting(), other.getDescription());
