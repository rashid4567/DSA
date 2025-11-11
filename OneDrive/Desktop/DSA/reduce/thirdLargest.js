function find(arr){
    let array = [...new Set(arr)];
    let [first,second,third] = array.reduce(([a,b,c],n)=>{
        if(n > a) return [n,a,b];
        if(n > b && n < a) return [a,n,b];
        if(n > c && n < b) return [a,b,n];
        return [a,b,c]
    },[-Infinity,-Infinity,-Infinity])
    return third
}
console.log(find([4,5,6,7,8,9,3,2,1]))