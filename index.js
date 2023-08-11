let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let shouldResetScreen = false;

const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const currentScreen = document.querySelector(".current-operation");
const equalsBtn = document.getElementById("equalBtn");
const lastScreen = document.querySelector(".last-operation");
const clearBtn = document.getElementById("btn-clear");
equalsBtn.addEventListener("click", evaluate);

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

clearBtn.addEventListener("click", clearScreen);

function resetScreen() {
  currentScreen.textContent = "";
  shouldResetScreen = false;
}

function appendNumber(num) {
  if (currentScreen.textContent === "0" || shouldResetScreen) resetScreen();
  currentScreen.textContent += num;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "÷" && currentOperationScreen.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondNumber = currentScreen.textContent;
  currentScreen.textContent = roundResult(
    operate(currentOperation, firstNumber, secondNumber)
  );
  lastScreen.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`;
  currentOperation = null;
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstNumber = currentScreen.textContent;
  currentOperation = operator;
  lastScreen.textContent = `${firstNumber} ${currentOperation}`;
  shouldResetScreen = true;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
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

function clearScreen() {
  currentScreen.textContent = "0";
  lastScreen.textContent = "";
  firstNumber = "";
  secondNumber = "";
  currentOperation = null;
}

function operate(operator, a, b) {
  let result;
  a = Number(a);
  b = Number(b);
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
