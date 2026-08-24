const employees = [
    { name: "A", marks: [32, 75, 34, 67, 45] },
    { name: "B", marks: [65, 86, 23, 100, 43] },
    { name: "C", marks: [22, 67, 89, 65, 34] }
];

function find(arr){
   let res = {};
   for(let n of arr){
       let max = n.marks.sort((a,b)=> b - a)[0];
       res[n.name] = max
   }
   return res
}

console.log(find(employees))