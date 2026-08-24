//A Proxy is an object that wraps another object and allows us to
// intercept and customize operations such as property access, assignment,
//  deletion, and checking properties using handler traps like get, set,
// deleteProperty, and has.
const user = {
  name: "Rashid",
  age: 23,
};

const proxyUser = new Proxy(user, {
  get(target, property) {
    console.log(`Reading Property ${property}`);
    return target[property];
  },

  set(target, property, value) {
    console.log(`Setting ${property} = ${value}`);
    target[property] = value;
    return true;
  },
  deleteProperty(target, property) {
    console.log("Deleting:", property);
    delete target[property];
    return true;
  },

  has(target, property) {
    console.log("Checking:", property);
    return property in target;
  },
});

console.log(proxyUser.name);

proxyUser.age = 26;
console.log(user.age);
