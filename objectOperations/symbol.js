const id = Symbol("id");

const user = {
    name : "Rashid",
    [id] : 123,
}


console.log(user[id]);