function quickSort(str){
    if (typeof str === 'string') {
        str = str.split(' ');
    }
    if(str.length <=1)return str;
    let pivot = str[str.length-1];
    let left = [];
    let right = [];
    for(let i=0; i<str.length-1; i++){
        if(str[i] < pivot){
            left.push(str[i])
        }else{
            right.push(str[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let str = "hello guys how are you feeling";
console.log(quickSort(str).join(' '))