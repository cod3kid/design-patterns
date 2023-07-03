class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.logs = [];
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  log(content) {
    console.log(content);
    this.logs.push(content);
  }

  count() {
    console.log(this.logs.length);
  }
}

const first = new Singleton();
const second = new Singleton();

first.log("Hello 1");
second.log("Hello 2");
second.log("Hello 2");
second.log("Hello 2");
second.log("Hello 2");
first.log("Hello 3");
first.count();

// While exporting an instance, use freeze static method
// Object.freeze(first)
// export default first
