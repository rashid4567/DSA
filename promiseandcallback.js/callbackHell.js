function getUser(callback){
    setTimeout(()=>{
        console.log("User received")
        callback("Rashid");
    },1000);
}

function getOrders(user, callback){
    setTimeout(()=>{
        console.log("Order received", user);
        callback("order123")
    },1000)
}

function sendEmail(order, callback){
    setTimeout(()=>{
        console.log("Email send for",order);
        callback()
    },1000)
}

getUser((user)=>{
    getOrders(user, (order)=>{
        sendEmail(order, ()=>{
            console.log("All completed")
        })
    })
})