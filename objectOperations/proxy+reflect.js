const user = {
  name: "Rashid",
  age: 23,
};

const proxyUser = new Proxy(user, {
  get(target, property) {
    console.log(`Getting ${property}`);
    return Reflect.get(target, property);
  },

  set(target, property, value) {
    console.log(`Setting ${property} = ${value}`);
    return Reflect.set(target, property, value);
  },
});

console.log(proxyUser.name);

proxyUser.age = 26;
