function getName(){
    console.log(this.name)
    console.log(this.age)
}

const person1 = {
    name : "Rashid",
    age : 21
}
const person2 = {
    name : "Mohan",
    age : 22
}

getName.call(person1)
getName.call(person2)