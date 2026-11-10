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

//or

let students = [
    { name: "A", marks: [32, 75, 34, 67, 45] },
    { name: "B", marks: [65, 86, 23, 100, 43] },
    { name: "C", marks: [22, 67, 89, 65, 34] }
];

// Find the total marks for each student.

// Expected answer:
// [
//   { name: "A", total: 253 },
//   { name: "B", total: 317 },
//   { name: "C", total: 277 }
// ]

function find(arr){
    return arr.map((std)=>{
        let total = std.marks.reduce((a,b)=> a + b, 0);
        return {
            name : std.name,
            total : total
        }
    })
}

console.log(find(students))