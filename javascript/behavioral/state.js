class RedLight {
  constructor(signal) {
    this.signal = signal;
  }

  handle() {
    console.log("Traffic signal: Red light. Stop!");
    this.signal.changeSignal(new GreenLight(this.signal));
  }
}

class GreenLight {
  constructor(signal) {
    this.signal = signal;
  }

  handle() {
    console.log("Traffic signal: Green light. Go!");
    this.signal.changeSignal(new YellowLight(this.signal));
  }
}

class YellowLight {
  constructor(signal) {
    this.signal = signal;
  }

  handle() {
    console.log("Traffic signal: Yellow light. Prepare to stop.");
    this.signal.changeSignal(new RedLight(this.signal));
  }
}

class TrafficSignal {
  constructor() {
    this.state = new GreenLight(this);
  }

  changeSignal(state) {
    this.state = state;
  }

  next() {
    this.state.handle();
  }
}

const trafficSignal = new TrafficSignal();

trafficSignal.next();
trafficSignal.next();
trafficSignal.next();
