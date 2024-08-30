class AreaCalculator {
  calculateArea(shape) {
    if (shape.type === "circle") {
      return Math.PI * Math.pow(shape.radius, 2);
    } else if (shape.type === "square") {
      return shape.side * shape.side;
    } else {
      throw new Error("Shape not supported");
    }
  }
}

const circle = { type: "circle", radius: 5 };
const square = { type: "square", side: 4 };

const calculator = new AreaCalculator();
console.log(calculator.calculateArea(circle));
console.log(calculator.calculateArea(square));
