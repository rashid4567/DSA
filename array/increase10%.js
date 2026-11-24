let arr = [
    { name: "John", salary: 30000 },
    { name: "Alex", salary: 40000 },
    { name: "Sam", salary: 50000 }
];

// Output:
// [
//     { name: "John", salary: 33000 },
//     { name: "Alex", salary: 44000 },
//     { name: "Sam", salary: 55000 }
// ]

function find(arr){
  let res = [];
    let m = 0
  for(let n of arr){
     m = n.salary * 10 / 100;
    n.salary += m
    m = 0
  }
  return arr
}

console.log(find(arr))