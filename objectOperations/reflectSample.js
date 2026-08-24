const user = {
  name: "Rashid",
  age: 22,
};

//get
console.log(Reflect.get(user, "name"));
console.log(Reflect.get(user, "age"));

//set
Reflect.set(user, "age", 26);
console.log(user.age);

//has
console.log(Reflect.has(user, "name"));
//delete
Reflect.deleteProperty(user, "age");