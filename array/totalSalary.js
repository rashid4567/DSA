const employees = [
    { name: "John", dept: "IT", salary: 40000 },
    { name: "Alex", dept: "HR", salary: 35000 },
    { name: "Sam", dept: "IT", salary: 60000 },
    { name: "David", dept: "HR", salary: 25000 }
];

function find(arr){
    let freq = {};
    for(let n of arr){
        freq[n.dept] = (freq[n.dept] || 0) + n.salary
    }
    return freq
}
console.log(find(employees)) 