class Basket {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((accumulator, item) => {
      return accumulator + item.getPrice();
    }, 0)
  }
}

module.exports = Basket; 
