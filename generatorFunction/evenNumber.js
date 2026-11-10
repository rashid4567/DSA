function* evenNumber(n){
    for(let i=1; i<=n; i++){
        if(i % 2 === 0){
            yield i;
        }
    }
}

let gen = evenNumber(10);

for(let n of gen){
    console.log(n)
}