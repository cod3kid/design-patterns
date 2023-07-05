class Car {
  constructor() {
    this.brand = "";
    this.model = "";
    this.year = 0;
  }

  getInfo() {
    return this;
  }

  clone() {
    const clone = new Car();

    clone.brand = this.brand;
    clone.model = this.model;
    clone.year = this.year;

    return clone;
  }
}

const car = new Car();
car.brand = "Mercedes";
car.model = "S Class";
car.year = 2023;

const clonedCar = car.clone();
clonedCar.model = "E Class";
clonedCar.year = 2017;

console.log(car.getInfo());
console.log(clonedCar.getInfo());
