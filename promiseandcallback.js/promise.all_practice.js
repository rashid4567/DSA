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
   try{
     const [a,b] = await Promise.all([
        f1(),
        f2(),
    ])
    const sum = a + b;
    console.log(sum);
   }catch(err){
    console.log(err);
   }
}


calculate()

