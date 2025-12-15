function getName(a,b,c){
    console.log(a,b,c)
    console.log(this.name)
    console.log(this.age)
}

const person1 = {
    name : "Rashid",
    age : 22
}

const person2 = {
    name : "Mohan",
    age : 24
}

getName.apply(person1, ["1","2,","3"])
getName.apply(person2, [4,5,6])