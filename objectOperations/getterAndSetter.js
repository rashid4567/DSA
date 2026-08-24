const user = {
    firstName : "Rashid",
    lastName : "C",

    get fullName(){
        return this.firstName + "" + this.lastName;
    },

    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ");
    }
}

console.log(user.fullName);