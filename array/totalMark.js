const employees = [
    { name: "A", marks: [32, 75, 34, 67, 45] },
    { name: "B", marks: [65, 86, 23, 100, 43] },
    { name: "C", marks: [22, 67, 89, 65, 34] }
];

function find(arr){
    let res = {};
    for(let n of arr){
        let sum = n.marks.reduce((a,b)=> a + b,0);
        res[n.name] = sum
    }
    return res
}

console.log(find(employees))