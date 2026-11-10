function createUser(name, age) {
  return {
    name: name,
    age: age,

    greet() {
      console.log(`Hello ${this.name} i am ${this.age}`);
    },
  };
}

const user1 = createUser("Rashid", 23);
const user2 = createUser("Aslam", 23);

console.log(user1);
console.log(user2);

user1.greet();
user2.greet();
