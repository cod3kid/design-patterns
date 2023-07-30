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
