function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Are you crazy?!";
  return a / b;
}

function operate(a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    default:
      return "Unknown operation!";
  }
  return result;
}

// module.exports = {
//   add,
//   subtract,
//   divide,
//   multiply,
// };
