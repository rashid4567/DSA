function secondLargest(arr){
    return arr.reduce((a,b)=>{
        let [first,second] = a;
        
        if(b % 2 === 0){
            if(b > first){
                second = first;
                first = b;
            }else if(b > second && b !== second){
                second = b;
            }
        }

        return [first,second];
    },[-Infinity,-Infinity])[1]
}

let arr = [4,3,2,1,5,6,7,8]
console.log(secondLargest(arr))