// 1. FUNCTION
const square = function(num) {
  return num * num
};

// 2. ANONYMOUS FUNCTION
function square(num) {
  return num * num;
};
console.log(square(8));

// // 3. REGULAR ARROW FUNCTION
// const squareArrow = (num) => {
//   return num * num;
// };

// // 4. ARROW EXPRESSION
const squareArrowExp = (num) => num * num;
console.log(squareArrowExp(6));

// // 5. REGULAR ARROW EXPRESSION
const getFirstNameReg = (name) => {
  return name.split(" ")[0];;
}
console.log(getFirstNameReg("Teju Cole"));

// // ARROW EXPRESSION
const getFirstNameExp = (name) => name.split(" ")[0];
console.log(getFirstNameExp("Ruth Ozeki"))