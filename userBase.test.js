const UserBase = require('./userBase')
const User = require('./user')

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

describe("userbase", () => {
  userBase = new UserBase(users);
  it("can count users", () => {
    expect(userBase.count()).toBe(3);
  })
  it("can give a list of names", () => {
    expect(userBase.getNames()).toEqual(['Uma', 'Josh', 'Ollie']);
  })
  it("can give a list of greetings", () => {
    expect(userBase.getGreetings()).toEqual(
    ['Hi, my name is Uma!',
    'Hi, my name is Josh!',
    'Hi, my name is Ollie!']);
  }) 
})