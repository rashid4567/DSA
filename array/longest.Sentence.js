 const sentence = "JavaScript is an amazing programming language";
 
 function find(str){
        let word = str.split(" ");
        let longest = "";
        
        for(let n of word){
            if(n.length > longest.length){
                longest = n
            }
        }
        return longest
 }
 
 console.log(find(sentence))