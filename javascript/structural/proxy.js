class CryptoCurrencyAPI {
  getPrice(coin) {
    switch (coin) {
      case "Bitcoin":
        return "$20000";
      case "Ethereum":
        return "$500";
      case "Tron":
        return "$1";
    }
  }
}

class CryptoCurrencyProxy {
  constructor() {
    this.cache = {};
  }

  getPrice(coin) {
    if (!this.cache[coin]) {
      console.log("Calling External API");
      const api = new CryptoCurrencyAPI();
      this.cache[coin] = api.getPrice(coin);
      return this.cache[coin];
    }
    console.log("Fetching Value From Cache");
    return this.cache[coin];
  }
}

const proxy = new CryptoCurrencyProxy();
console.log(proxy.getPrice("Bitcoin"));
console.log(proxy.getPrice("Tron"));
console.log(proxy.getPrice("Bitcoin"));
console.log(proxy.getPrice("Tron"));
console.log(proxy.getPrice("Tron"));
console.log(proxy.getPrice("Tron"));
