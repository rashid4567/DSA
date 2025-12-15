function selectionSort(str){
    str = str.split(' ');
    let n = str.length;
    for(let i=0; i<n-1; i++){
        let minIndex = i;
        
        for(let j=i+1; j<n; j++){
            if(str[j] < str[minIndex]){
                minIndex =j;
            }
        }
      if(minIndex !== i){
         [str[i], str[minIndex]] = [str[minIndex], str[i]]
      }
    }
    return str.join(' ')
}
let str = "welcome every body i am here";
console.log(selectionSort(str))