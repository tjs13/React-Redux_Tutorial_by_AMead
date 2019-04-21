class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return "Hi, " + this.name + "!";
    return `Hi, I am ${this.name}!`
  }
  getDescription() {
    return `I am ${this.name}! My age is ${this.age}.`
  }
}

class Student extends Person {
  constructor(name, age, book) {
    super(name, age);
    this.book = book;
  }
  isPreviouslyPublished() {
    return !!this.book;
  }
  getDescription() {
    let description = super.getDescription();
    if(this.isPreviouslyPublished()) {
      description += ` Their book is ${this.book}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let location = super.getGreeting();
    if(this.homeLocation) {
      location += ` I am from ${this.homeLocation}.`
    }
    return location;
  }
}

const ernest = new Student("Ernest Hemingway", 54, "For Whom the Bell Tolls");
console.log(ernest.getDescription());

const chen = new Traveler("Chen Chen", 30, "China");
console.log(chen.getGreeting());

