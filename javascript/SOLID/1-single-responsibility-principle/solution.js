class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

class Logger {
  constructor() {}

  log(message) {
    console.log(message);
  }
}

const calculator = new Calculator();
const logger = new Logger();

const result1 = calculator.add(5, 3);
logger.log(`The result of addition is ${result1}`);

const result2 = calculator.subtract(10, 7);
logger.log(`The result of subtraction is ${result2}`);
