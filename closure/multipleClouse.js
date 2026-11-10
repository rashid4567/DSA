function Outer(){
    let count = 0;
    
    function Inner(){
        count++;
        console.log(count);
    }
    
    return Inner;
}

const f1 = Outer();
const f2 = Outer();

f1();
f2();
f1()
f2()