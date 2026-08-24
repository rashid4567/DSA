function f1(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(5)
        },3000)
    })
}

function f2(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(9)
        },3000);
    })
}


const calculate = async () =>{
    const [a,b] = await Promise.all([
        f1(),
        f2(),
    ])

    console.log(a + b);
}


calculate()

