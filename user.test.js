const User = require('./user')

describe("user", () => {
  it("should be able to get name", () => {
    uma = new User("Uma");
    expect(uma.getName()).toEqual("Uma");
  })
  it("should be able to give a greeting", () => {
    uma = new User("Uma");
    expect(uma.getGreeting()).toEqual("Hi, my name is Uma!");
  })
})