const users = [
  {
    name: "Arun",
    orders: [
      { product: "Laptop", amount: 50000 },
      { product: "Mouse", amount: 1000 }
    ]
  },
  {
    name: "Rahul",
    orders: [
      { product: "Keyboard", amount: 2000 },
      { product: "Monitor", amount: 12000 }
    ]
  }
];

//. Find the most expensive product
// {
//   product: "Laptop",
//   amount: 50000
// }

function find(arr){

  let res = [];
  for(let user of arr){
    let highest = -Infinity;
    for(let order of user.orders){
      if(order.amount > highest){
        highest = order.amount
      }
    }
    res.push({
      name : user.name,
      total : highest,
    })
  }
  return res;
}

console.log(find(users))