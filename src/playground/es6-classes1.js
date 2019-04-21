class Author {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return "Hi, " + this.name + "!";
    return `Hi, I am ${this.name}!`
  }
  getDescription() {
    return `My age is ${this.age}.`
  }
}

class Poet {
  
}

const person = new Author("Ernest Hemingway");
console.log(person.getGreeting(), person.getDescription());

const other = new Author("Roxanne Gay", 34);
console.log(other.getGreeting(), other.getDescription());