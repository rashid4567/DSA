function getName(){
    return this.name
}

const person1 = {
    name : "Rashid"
}

const boundFn = getName.bind(person1)
console.log(boundFn())