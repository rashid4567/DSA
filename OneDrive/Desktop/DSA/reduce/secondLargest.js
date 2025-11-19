const arr = [1,2,3,4,5,6,7,8]


const secondLargest = arr.reduce((a,b)=>{
    let [first,second] = a;
    if(b > first){
        second = first;
        first = b
    }else if(b > second && b < first){
        first = b
    }
    return [first,second]
},[-Infinity,-Infinity]
)[1]

console.log(secondLargest)