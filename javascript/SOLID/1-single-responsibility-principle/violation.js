class Calculator {
  add(a, b) {
    const result = a + b;
    console.log(`The result is ${result}`);
    return result;
  }

  subtract(a, b) {
    const result = a - b;
    console.log(`The result is ${result}`);
    return result;
  }
}

const calculator = new Calculator();
calculator.add(5, 3);
calculator.subtract(10, 7);
