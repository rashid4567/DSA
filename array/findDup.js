const employees =[
  { name: "A", email: "a@gmail.com" },
  { name: "B", email: "b@gmail.com" },
  { name: "C", email: "a@gmail.com" }
]
//Find duplicate employees based on email
function find(arr){
    let freq = {};
    for(let n of arr){
        freq[n.email] = (freq[n.email] || 0) + 1
    }
    
    let res = [];
    for(let n of arr){
        if(freq[n.email] > 1){
            res.push(n)
        }
    }
  
    return res
}

console.log(find(employees))