let a = 20;
let b = 40;
const operator = "*";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    if (b !== 0) {
      console.log(a / b);
    } else {
      console.log("Error: Division by zero");
    }
    break;
  default:
    console.log("Invalid operator");
}