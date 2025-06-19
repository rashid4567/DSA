function bubbleSort(str){
    str = str.split(' ')
    let  swapped;
    let  n = str.length;
    do{
        swapped = false;
        for(let i=0; i<n-1; i++){
            if(str[i] > str[i+1]){
                [str[i], str[i+1]] = [str[i+1], str[i]];
                swapped = true
            }
        }
    }while(swapped)
    return str.join(' ');
}
let str = "hello welcome to every one";
console.log(bubbleSort(str));