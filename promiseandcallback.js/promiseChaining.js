const p1 = () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("task 1 is completed")
        },2000)
    })
}

const p2 = () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("task 2 completed")
        },2000)
    })
}

const p3 = () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("task 3 completed")
        },2000)
    })
}

p1()
    .then((msg1)=>{
        console.log(msg1);
        return p2()
    })
    .then((msg2)=>{
        console.log(msg2);
        return p3()
    })
    .then((msg3)=>{
        console.log(msg3)
    })
    .catch((err)=>{
        console.log(err)
    })


//promise async and await with promise chainig

async function runnerTask() {
    try{
        const r1 = await p1();
        console.log(r1);

        const r2 = await p2();
        console.log(r2)

        const r3 = await p3();
        console.log(r3)

        console.log("all task are completed")
    }catch(err){
        console.log("error : ", err)
    }
}


runnerTask()


//all promise 
const p4 = new Promise((res)=> res("p1 is success"))
const p5 = new Promise((res)=>res("p2 is success"))
const p6 = new Promise((res)=> res("p3 is success"))

Promise.all([p4,p5,p6]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

//with async and await with the all promise

const runnerall = async () =>{
    try{
        const res = await Promise.all([p4,p5,p6])
        console.log(res)
    }catch(err){
        console.log(err)
    }
}

runnerall()


// promise allSetteled

Promise.allSettled([p4,p5,p6]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

//promise.allSetteled with async and await

const runnerSetteled = async () =>{
    try{
        const res = await Promise.allSettled([p4,p5,p6])
        console.log(res)
    }catch(err){
        console.log(err)
    }
}


//promise any 

Promise.any([p4,p5,p6]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

//async and await with the promise

const rersultany = async () =>{
    try{
        const res = await Promise.any([p4,p5,p6])
        console.log(res)
    }catch(err){
        console.log("error : -", err)
    }
}
rersultany()


//promise.race 

Promise.race([p4,p5,p6]).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("error  :-" , err)
})


//with the async and await;


const resultRace = async () => {
    try{
        const res = await Promise.race([p4,p5,p6])
        console.log(res)
    }catch(err){
        console.log("error :",err)
    }
}

resultRace()