class UserBase {

  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(user => user.getName());
  }

  getGreetings() {
    return this.users.map(user => user.getGreeting());
  }
}

module.exports = UserBase;