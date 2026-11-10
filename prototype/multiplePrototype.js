function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, i am ${this.name}`);
};

Person.prototype.getAge = function () {
  return this.age;
};

Person.prototype.isAdult = function () {
  return this.age >= 18;
};

const person = new Person("Rashid", 23);

person.greet();
console.log(person.getAge());
console.log(person.isAdult());
