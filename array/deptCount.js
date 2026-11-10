let arr = [
  { name: "A", department: "IT" },
  { name: "B", department: "HR" },
  { name: "C", department: "IT" },
  { name: "D", department: "IT" },
  { name: "E", department: "HR" },
];

function find(arr) {
  let res = {};

  for (let n of arr) {
    if (!res[n.department]) {
      res[n.department] = 0;
    }
    res[n.department]++;
  }
  return res;
}

console.log(find(arr));
