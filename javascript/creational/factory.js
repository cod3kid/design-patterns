class Developer {
  constructor(name) {
    this.name = name;
    this.type = "Developer";
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = "Tester";
  }
}

class EmployeeFactory {
  create(name, type) {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
      default:
        return "Invalid Employee Type";
    }
  }
}

const factory = new EmployeeFactory();
console.log(factory.create("Sufail", 1));
console.log(factory.create("Ken", 2));
