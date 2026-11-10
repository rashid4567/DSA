let employees = [
    { name: "A", dept: "IT", salary: 50000 },
    { name: "B", dept: "HR", salary: 70000 },
    { name: "C", dept: "IT", salary: 60000 },
    { name: "D", dept: "HR", salary: 45000 }
];

// Find the employee with the highest salary.

// Expected answer:
// { name: "B", dept: "HR", salary: 70000 }


function find(arr){
    let highest = arr[0];
    for(let emp of arr){
        if(emp.salary > highest.salary){
            highest = emp
        }
    }
    return highest
}

console.log(find(employees))