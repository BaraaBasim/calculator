const calculator = require("./index");

describe("add", () => {
  test("adds 0 and 0", () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("adds 2 and 2", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test("adds positive numbers", () => {
    expect(calculator.add(2, 6)).toBe(8);
  });
});

describe("subtract", () => {
  test("subtracts numbers", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });
});

describe("multiply", () => {
  test("multiplies two numbers", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  describe("deleteNumber", () => {
    beforeEach(() => {
      // Set up the initial state before each test
      currentScreen.textContent = "12345";
    });

    test("should delete the last character from the screen", () => {
      deleteNumber();
      expect(currentScreen.textContent).toBe("1234");
    });

    test("should handle an empty screen", () => {
      currentScreen.textContent = "";
      deleteNumber();
      expect(currentScreen.textContent).toBe("");
    });
  });

  describe("appendPoint", () => {
    beforeEach(() => {
      // Set up the initial state before each test
      currentScreen.textContent = "";
      shouldResetScreen = false;
    });

    test("should add a decimal point to the screen", () => {
      appendPoint();
      expect(currentScreen.textContent).toBe("0.");
    });

    test("should not add a decimal point if the screen already contains one", () => {
      currentScreen.textContent = "0.5";
      appendPoint();
      expect(currentScreen.textContent).toBe("0.5");
    });

    test("should reset the screen before adding a decimal point if needed", () => {
      shouldResetScreen = true;
      appendPoint();
      expect(currentScreen.textContent).toBe("0.");
    });
  });

  describe("appendNumber", () => {
    beforeEach(() => {
      // Set up the initial state before each test
      currentScreen.textContent = "";
      shouldResetScreen = false;
    });

    test("should append the provided number to the screen", () => {
      appendNumber(5);
      expect(currentScreen.textContent).toBe("5");
    });

    test("should handle appending multiple numbers", () => {
      appendNumber(1);
      appendNumber(2);
      appendNumber(3);
      expect(currentScreen.textContent).toBe("123");
    });

    test("should reset the screen if it contains '0' or shouldResetScreen is true", () => {
      currentScreen.textContent = "0";
      appendNumber(5);
      expect(currentScreen.textContent).toBe("5");

      shouldResetScreen = true;
      appendNumber(7);
      expect(currentScreen.textContent).toBe("7");
    });
  });

  // test("multiplies several numbers", () => {
  //   expect(calculator.multiply([2, 4, 6, 8, 10, 12, 14])).toBe(645120);
  // });
});

// describe("power", () => {
//   test("raises one number to the power of another number", () => {
//     expect(calculator.power(4, 3)).toBe(64); // 4 to third power is 64
//   });
// });

// describe('factorial', () => {
//   test('computes the factorial of 0', () => {
//     expect(calculator.factorial(0)).toBe(1); // 0! = 1
//   });

//   test('computes the factorial of 1', () => {
//     expect(calculator.factorial(1)).toBe(1);
//   });

//   test('computes the factorial of 2', () => {
//     expect(calculator.factorial(2)).toBe(2);
//   });

//   test('computes the factorial of 5', () => {
//     expect(calculator.factorial(5)).toBe(120);
//   });

//   test('computes the factorial of 10', () => {
//     expect(calculator.factorial(10)).toBe(3628800);
//   });
// });
