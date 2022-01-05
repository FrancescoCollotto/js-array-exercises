const Basket = require('./basket');

const candyDouble = {
  getName: () => "Mars",
  getPrice: () => 1.99
}

const basket = new Basket()

describe('Basket', () => {
  it('add an item', () => {
    basket.addItem(candyDouble)
    expect(basket.items).toContain(candyDouble)
  })

  it('get total price', () => {
    basket.addItem(candyDouble)
    expect(basket.getTotal()).toBe(3.98)
  })
})