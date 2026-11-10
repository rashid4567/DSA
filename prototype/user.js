function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};

User.prototype.sayAge = function () {
  console.log(`Hello ${this.age}`);
};

User.prototype.intoduce = function () {
  console.log(`Hello i am ${this.name} and i am ${this.age}`);
};

const user = new User("Rashid", 23);

user.sayHello();
user.sayAge();
user.intoduce();
