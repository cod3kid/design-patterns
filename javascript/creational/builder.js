class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setOccupation(occupation) {
    this.user.occupation = occupation;
    return this;
  }

  build() {
    return this.user;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

const john = new UserBuilder("John Wick")
  .setAge(32)
  .setOccupation("Assassin")
  .build();

console.log(john);
