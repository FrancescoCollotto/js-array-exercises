class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getGreeting() {
    return `Hi, my name is ${this.name}!`;
  }
}

module.exports = User;