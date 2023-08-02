class Coffee {
  constructor() {
    this.description = "Plain Coffee";
  }

  cost() {
    return 5;
  }

  getDescription() {
    return this.description;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.cost + 3;
  }

  getDescription() {
    return `${this.coffee.getDescription()} with Milk`;
  }
}

class CaramelDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.cost + 5;
  }

  getDescription() {
    return `${this.coffee.getDescription()} with Caramel`;
  }
}

class ExtraSugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.cost + 1;
  }

  getDescription() {
    return `${this.coffee.getDescription()} with Extra Sugar`;
  }
}

const coffee = new Coffee();
const coffeeWithMilkAndCaramel = new CaramelDecorator(
  new MilkDecorator(coffee)
);

console.log(coffeeWithMilkAndCaramel.getDescription());
