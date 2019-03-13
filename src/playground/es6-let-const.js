var nameVar = "Harry";
nameVar = "Ron"; // CAN REASSIGN
var nameVar = "Hermione" // CAN REDEFINE
console.log("nameVar", nameVar);

// let can be reassigned BUT CANNOT BE redefined

let nameLet = "Draco";
nameLet = "Newt"; // CAN REASSIGN
// let nameLet = "Newt"; CANNOT REDEFINE
console.log("nameLet", nameLet)

const nameConst = "Hedwig";
// nameConst = "Scrabble"; CANNOT REASSIGN
// const nameConst = "Crookshanks"; CANNOT REDEFINE
console.log("nameConst", nameConst)

function getPetName() {
  var petName = "Heng-Heng";
  return petName
}

getPetName();
console.log(getPetName())

// Block scoping

var fullName = "Ray Bradbury";
const firstName;
if(fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
  // var lastName = lastName.split(" ")[1];
  // console.log(lastName);
}
console.log(firstName);

