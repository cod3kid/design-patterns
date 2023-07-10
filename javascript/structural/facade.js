class Waiter {
  writeOrder() {
    console.log("Writing down customer's order");
  }

  sendToKitchen() {
    console.log("Sending customer's order to the kitchen");
  }

  serveTheCustomer() {
    console.log("Serving the food obtained from the kitchen to the customer ");
  }
}

class Kitchen {
  prepareFood() {
    console.log("Preparing food based on customer's order");
  }

  giveToWaiter() {
    console.log("Giving food to the waiter");
  }
}

class OrderFacade {
  constructor() {
    this.waiter = new Waiter();
    this.kitchen = new Kitchen();
  }

  orderFood() {
    this.waiter.writeOrder();
    this.waiter.sendToKitchen();
    this.kitchen.prepareFood();
    this.kitchen.giveToWaiter();
    this.waiter.serveTheCustomer();
  }
}

const orderFacade = new OrderFacade();
orderFacade.orderFood();
