const Candy = require('./candy')

const candy = new Candy('Mars', 1.99)

describe('candy', () => {
  it('return candy name', () => {
    expect(candy.getName()).toBe('Mars');
  })

  it('return candy price', () => {
    expect(candy.getPrice()).toBe(1.99);
  })  
})