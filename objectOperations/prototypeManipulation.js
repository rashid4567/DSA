const person = {
    greet(){
        console.log("Hello");
    }
}


const user = Object.create(person);

user.greet();