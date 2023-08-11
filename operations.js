let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const currentScreen = document.querySelector(".current-operation");
const equalsBtn = document.getElementById("equalBtn");

equalsBtn.addEventListener(
  "click",
  evaluate(currentOperation, firstNumber, secondNumber)
);

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    currentOperation = button.textContent;
  });
});
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

function resetScreen() {
  currentScreen.textContent = "";
}

function appendNumber(num) {
  if (currentScreen.textContent === "0") resetScreen();
  currentScreen.textContent += num;
}

function evaluate(currentOperation, numberA, numberB) {
  currentScreen.textContent = operate(currentOperation, numberA, numberB);
}

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
    case "÷":
      result = divide(a, b);
      break;
    case "x":
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
