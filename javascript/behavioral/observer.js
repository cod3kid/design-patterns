class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    console.log("Subject: State has changed.");

    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`Observer ${this.name}: Received notification.`);
  }
}

const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers();
