
let arr = [
 {name:"John",dept:"IT"},
 {name:"Alex",dept:"HR"},
 {name:"Sam",dept:"IT"},
 {name:"David",dept:"Sales"}
]

// Output:

// {
//  IT:[
//   {name:"John",dept:"IT"},
//   {name:"Sam",dept:"IT"}
//  ],
//  HR:[
//   {name:"Alex",dept:"HR"}
//  ],
//  Sales:[
//   {name:"David",dept:"Sales"}
//  ]
// }


function find(arr){
    let res = [];
    for(let n of arr){
        if(!res[n.dept]){
            res[n.dept] = []
        }
        res[n.dept].push(n)
    }
    return res
}

console.log(find(arr))