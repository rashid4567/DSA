const number = [1,2,3,4,5,6];
const [first, second, ...rest] = number;

console.log(first);
console.log(second);
console.log(rest);


const employee = {
    name : "Rashid",
    age : 21,
    place : "Mananthavady",
    salary : 70000,
}

const {name, ...details} = employee;

console.log(name);
console.log(details)


function add(...nums){
    let sum = 0;

    for(let n of nums){
        sum += n;
    }

    return sum
}

console.log(add(2,4,5,6,7,8,9))