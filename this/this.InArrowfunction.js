const user = {
    name : "Rashid",

    greet : () =>{
        console.log(this.name)
    }
}

user.greet() // undefined