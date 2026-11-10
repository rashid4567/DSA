let students = [
    { name: "A", marks: [50, 60, 70] },
    { name: "B", marks: [80, 90, 100] },
    { name: "C", marks: [40, 50, 60] }
];

// Find the average marks of each student.

// Expected answer:
// [
//   { name: "A", average: 60 },
//   { name: "B", average: 90 },
//   { name: "C", average: 50 }
// ]


function find(arr){
    return arr.map((std)=>{
        const total = std.marks.reduce((a,b)=> a + b,0);
        const average = total / std.marks.length
        return {
            name : std.name,
            average : average
        }
    })
}

console.log(find(students))