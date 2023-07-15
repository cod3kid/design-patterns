class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length - 1;
  }

  current() {
    return this.items[this.index];
  }

  next() {
    this.index += 1;
    return this.items[this.index];
  }

  reset() {
    this.index = 0;
  }
}

const arr = ["Indira Nagar", "Domulur", "Koramangala", "Silk Board Junction"];
const iterator = new Iterator(arr);

console.log(iterator.current());
while (iterator.hasNext()) {
  console.log(iterator.next());
}

// Can improve this by accepting an extra param so traverse from the end to start.
