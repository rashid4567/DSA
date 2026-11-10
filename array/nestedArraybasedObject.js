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
      { product: "Mouse", amount: 1000 }
    ]
  },
  {
    name: "John",
    orders: [
      { product: "Monitor", amount: 12000 }
    ]
  }
];


function find(arr){
    let res = [];

    for(let user of arr){
        let total = 0;

        for(let order of user.orders){
            total += order.amount;
        }

        if(total >= 10000){
            res.push({
                name : user.name,
                orders : total,
            })
        }
    }

    return res;
}

console.log(find(users))