let arr = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 80000 },
  { name: "C", salary: 80000 },
  { name: "D", salary: 60000 }
]

//second largest salary employee
//{ name: "D", salary: 60000 }

function find(arr){
  let largest = -Infinity;
  let secondLa = -Infinity;
  let secondEmp = null;

  for(let n of arr){
    if(n.salary > largest){
      secondLa = largest;
      largest = n.salary;
      secondEmp = null
    }else if(n.salary > secondLa && largest !== n.salary){
      secondLa = n.salary;
      secondEmp = n.name
    }
  }
  return {
    name : secondEmp, 
    salary : secondLa,
  } 
}

console.log(find(arr))