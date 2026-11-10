const person1 = {
  name : "Rashid"
}

function greet(age){
  console.log(`Hello ${this.name} and he is ${age}`)
}

greet.call(person1,21)