const employees = [
  { name: "A", department: "IT", salary: 50000 },
  { name: "B", department: "IT", salary: 60000 },
  { name: "C", department: "HR", salary: 40000 },
  { name: "D", department: "HR", salary: 45000 },
  { name: "E", department: "Finance", salary: 120000 }
];


function find(arr){
    let res = {};

    for(let n of arr){
        if(!res[n.department]){
            res[n.department] = 0;
        }
        res[n.department] = n.salary;
    }

    let maxSalary = -Infinity;
    let maxDept = null;

    for(let n in res){
        if(res[n] > maxSalary){
            maxSalary = res[n];
            maxDept = n;
        }
    }

    return {Dept : maxDept, Salary : maxSalary}
}

console.log(find(employees))