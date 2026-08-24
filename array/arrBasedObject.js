const departments = [
  {
    id: 1,
    name: "Engineering",
    employees: [
      {
        id: 101,
        name: "Rahul",
        salary: 90000,
        skills: ["JavaScript", "React"]
      },
      {
        id: 102,
        name: "Anjali",
        salary: 120000,
        skills: ["Java", "Spring"]
      }
    ]
  },
  {
    id: 2,
    name: "HR",
    employees: [
      {
        id: 103,
        name: "Neha",
        salary: 60000,
        skills: ["Communication", "Excel"]
      }
    ]
  }
];
//find employees whose salary greater than 80000

function find(arr){
 return arr.flatMap((dept)=> dept.employees.filter((x)=> x.salary>= 80000))
}

console.log(find(departments))