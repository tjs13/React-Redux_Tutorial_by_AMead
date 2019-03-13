// ARGUMENTS OBJ - NO LONGER BOUND
const add = (a, b) => a + b;
console.log(add(55, 1));

// THIS KEYWORD - NO LONGER BOUND

const user = {
  name: "Ernest Hemingway",
  cities: ["California", "Paris", "Cuba"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());

// CHALLENGE AREA
const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 7,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());