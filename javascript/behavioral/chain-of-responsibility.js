class BankATM {
  constructor(amount) {
    this.amount = amount;
    console.log(`Requested amount ${amount}`);
  }

  get(currency) {
    const count = Math.floor(this.amount / currency);
    this.amount -= count * currency;

    console.log(`Dispense ${count} number of ${currency} note(s)`);
    return this;
  }
}

const atm = new BankATM(265);
atm.get(100).get(50).get(10).get(5);

// More original version of Chain of Responsibility design
// /**
//  * Chain of Responsibility Design Pattern
//  *
//  * Intent: Lets you pass requests along a chain of handlers. Upon receiving a
//  * request, each handler decides either to process the request or to pass it to
//  * the next handler in the chain.
//  */

// /**
//  * The Handler interface declares a method for building the chain of handlers.
//  * It also declares a method for executing a request.
//  */
// class AbstractHandler {
//   setNext(handler) {
//     this.nextHandler = handler;
//     // Returning a handler from here will let us link handlers in a
//     // convenient way like this:
//     // monkey.setNext(squirrel).setNext(dog);
//     return handler;
//   }

//   handle(request) {
//     if (this.nextHandler) {
//       return this.nextHandler.handle(request);
//     }

//     return null;
//   }
// }

// /**
//  * All Concrete Handlers either handle a request or pass it to the next handler
//  * in the chain.
//  */
// class MonkeyHandler extends AbstractHandler {
//   handle(request) {
//     if (request === "Banana") {
//       return `Monkey: I'll eat the ${request}.`;
//     }
//     return super.handle(request);
//   }
// }

// class SquirrelHandler extends AbstractHandler {
//   handle(request) {
//     if (request === "Nut") {
//       return `Squirrel: I'll eat the ${request}.`;
//     }
//     return super.handle(request);
//   }
// }

// class DogHandler extends AbstractHandler {
//   handle(request) {
//     if (request === "MeatBall") {
//       return `Dog: I'll eat the ${request}.`;
//     }
//     return super.handle(request);
//   }
// }

// /**
//  * The client code is usually suited to work with a single handler. In most
//  * cases, it is not even aware that the handler is part of a chain.
//  */
// function clientCode(handler) {
//   const foods = ["Nut", "Banana", "Cup of coffee"];

//   for (const food of foods) {
//     console.log(`Client: Who wants a ${food}?`);

//     const result = handler.handle(food);
//     if (result) {
//       console.log(`  ${result}`);
//     } else {
//       console.log(`  ${food} was left untouched.`);
//     }
//   }
// }

// /**
//  * The other part of the client code constructs the actual chain.
//  */
// const monkey = new MonkeyHandler();
// const squirrel = new SquirrelHandler();
// const dog = new DogHandler();

// monkey.setNext(squirrel).setNext(dog);

// /**
//  * The client should be able to send a request to any handler, not just the
//  * first one in the chain.
//  */
// console.log("Chain: Monkey > Squirrel > Dog\n");
// clientCode(monkey);
// console.log("");

// console.log("Subchain: Squirrel > Dog\n");
// clientCode(squirrel);
