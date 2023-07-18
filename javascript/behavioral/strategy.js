class CreditCardPayment {
  pay(amount) {
    console.log(`Paid ${amount} with Credit Card.`);
  }
}

class GooglePayPayment {
  pay(amount) {
    console.log(`Paid ${amount} with Google Pay.`);
  }
}

class PaymentGatewayStrategy {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  changePaymentProcessor(newProcessor) {
    this.paymentProcessor = newProcessor;
  }

  processPayment(amount) {
    this.paymentProcessor.pay(amount);
  }
}

const creditCard = new CreditCardPayment();
const gPay = new GooglePayPayment();

const paymentMethod = new PaymentGatewayStrategy(gPay);

paymentMethod.processPayment(1000);
paymentMethod.changePaymentProcessor(creditCard);
paymentMethod.processPayment(2000);
