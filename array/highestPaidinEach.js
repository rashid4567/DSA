const employees = [
  { name: "Arun", department: "IT", salary: 50000 },
  { name: "John", department: "IT", salary: 70000 },
  { name: "Rahul", department: "HR", salary: 45000 },
  { name: "Vijay", department: "HR", salary: 60000 },
  { name: "Akhil", department: "Finance", salary: 80000 }
];

function find(arr){
    let res = {};
    for(let n of arr){
        if(!res[n.department]){
            res[n.department] = n;
        }else if(res[n.department] < res[n.department].salary){
            res[n.department] = n;
        }
    }
    return res;
}

console.log(find(employees))