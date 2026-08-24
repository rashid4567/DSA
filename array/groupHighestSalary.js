const employees =[
  { name: "A", dept: "IT", salary: 50000 },
  { name: "B", dept: "IT", salary: 80000 },
  { name: "C", dept: "HR", salary: 40000 },
  { name: "D", dept: "HR", salary: 60000 }
]
//Find the highest-paid employee from each department
function find(arr){
    let res = {};
    for(let n of arr){
        let dept = n.dept
        if(!res[dept] || n.salary > res[dept].salary){
            res[dept] = {
                name : n.name,
                salary : n.salary,
            }
        }
    }
    return res
}

console.log(find(employees))