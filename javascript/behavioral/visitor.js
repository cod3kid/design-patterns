class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(newSalary) {
    this.salary = newSalary;
  }

  acceptVisitor(visitor) {
    return visitor(this);
  }
}

const john = new Employee("John", 50000);

console.log(john.getSalary());

function addBonus(obj) {
  obj.salary = obj.salary + 15000;
}

john.acceptVisitor(addBonus);

console.log(john.getSalary());
