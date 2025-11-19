let arr = [1,2,3,4,5,6,7,8];

let thirdLargest = arr.reduce((a,b)=>{
    let [first,second,third] = a;
    if(b > first){
        third = second;
        second = first;
        first = b
    }else if(b > second && b < first){
        third = second;
        second = b
    }else if( b > third && b < second && b < first){
        third = b
    }
    return [first,second,third]
},[-Infinity,-Infinity,-Infinity])[2];

console.log(thirdLargest)