function* multiply(num){
    for(let i=1; i<=10; i++){
        yield num * i;
    }
}

for(let n of multiply(20)){
    console.log(n)
}