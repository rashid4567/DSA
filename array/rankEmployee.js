const employees = [
  { name: "Arun", department: "IT", salary: 70000 },
  { name: "Rahul", department: "HR", salary: 50000 },
  { name: "John", department: "IT", salary: 90000 },
  { name: "Akhil", department: "Finance", salary: 80000 },
  { name: "Vijay", department: "HR", salary: 60000 }
];

function find(arr){
  arr = arr.sort((a,b)=> b.salary - a.salary);

  return arr.map((emp, index)=>{
    return {
      name : emp.name,
      rank : index + 1,
    }
  })
}

console.log(find(employees))