const user = {
    name : "Rashid",
}


Object.freeze(user);

user.name = "Jhon";

console.log(user.name);