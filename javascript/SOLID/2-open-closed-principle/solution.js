class Shape {
  calculateArea() {
    throw new Error("This method must be overridden by subclasses");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }
}

class AreaCalculator {
  calculateArea(shape) {
    return shape.calculateArea();
  }
}

const circle = new Circle(5);
const square = new Square(4);
const calculator = new AreaCalculator();

console.log(calculator.calculateArea(circle));
console.log(calculator.calculateArea(square));
