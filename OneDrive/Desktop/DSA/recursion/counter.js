    function counter(n){
        console.log(n);
        if(n > 1){
            counter(n-1)
        }
    }
    counter(5)