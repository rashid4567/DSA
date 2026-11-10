const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Arun" },
  { id: 1, name: "Rahul" },
  { id: 3, name: "Vishnu" },
];

function removeDup(arr) {
  let res = {};
  for (let n of arr) {
    if (!res[n.id]) {
      res[n.id] = n;
    }
  }
  return Object.values(res);
}

console.log(removeDup(users));
