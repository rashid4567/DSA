const employees =[
  { name: "A", dept: "IT", salary: 50000 },
  { name: "B", dept: "IT", salary: 70000 },
  { name: "C", dept: "HR", salary: 90000 },
  { name: "D", dept: "HR", salary: 30000 }
]
//Find the department with the highest total salary
function find(arr){
    let res = {};
    for(let n of arr){
        let dept = n.dept;
        res[dept] = (res[dept] || 0) + 1;
    }
    
    let maxDept = null;
    let maxSalary = -Infinity;
    
    for(let n in res){
        if(res[n] > maxSalary){
            maxSalary = res[n];
            maxDept = n
        }
    }
    
    return maxDept
    
}

console.log(find(employees))