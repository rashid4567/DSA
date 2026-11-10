function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};

const user = new User("Rashid");

user.greet();
