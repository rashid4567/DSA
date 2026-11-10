const employees = [
  { name: "A", department: "IT", salary: 50000 },
  { name: "B", department: "IT", salary: 70000 },
  { name: "C", department: "HR", salary: 40000 },
  { name: "D", department: "HR", salary: 60000 }
];

function findMax(arr){
    let res = {};
    
    for(let n of arr){
        let dept = n.department;

        if(!res[dept] || n.salary > res[dept].salary){
            res[dept] = n;
        }
    }
    return res;
}

console.log(findMax(employees))