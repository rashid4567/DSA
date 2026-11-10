const obj = {
    name : "Rashid",

    normal(){
        console.log(this.name);
    },
    arrow : () =>{
        console.log(this.name);
    }
}
obj.arrow();

obj.normal()