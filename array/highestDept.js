const employees = [
  { name: "A", dept: "IT", salary: 50000 },
  { name: "B", dept: "IT", salary: 70000 },
  { name: "C", dept: "HR", salary: 90000 },
  { name: "D", dept: "HR", salary: 30000 },
];
//Find the department with the highest total salary

function highest(arr) {
  let res = {};
  for (let n of arr) {
    res[n.dept] = (res[n.dept] || 0) + n.salary;
  }

  let maxSalary = -Infinity;
  let maxDept = null;
  for (let n in res) {
    if (res[n] > maxSalary) {
      maxSalary = res[n];
      maxDept = n;
    }
  }

  return { dept: maxDept, salary: maxSalary };
}

console.log(highest(employees));
