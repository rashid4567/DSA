const orders = [
  {
    id: 1,
    items: [
      { name: "Laptop", price: 50000, quantity: 1 },
      { name: "Mouse", price: 1000, quantity: 2 }
    ]
  },
  {
    id: 2,
    items: [
      { name: "Keyboard", price: 2000, quantity: 1 }
    ]
  }
];


function findTotal(arr){

    let total = 0;

    for(let item of arr){
        for(let n of item.items){
            total += n.price * n.quantity;
        }
    }
    return total;
}

console.log(findTotal(orders))