(async function(){
    const result = await new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Hello world")
        },2000)
    })

    console.log(result)
})();