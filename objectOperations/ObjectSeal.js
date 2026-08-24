const User = {
    name : "Rashid",
}

Object.seal(user);

user.name = "Jhon";
user.age = 22;
delete user.name;