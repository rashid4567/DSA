const login = (user, password) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (user === "admin" && password === "1234") {
        res("Login successful");
      } else {
        rej("Invalid Username or Password");
      }
    }, 2000);
  });
};


const main = async () =>{
    try{
        const result = await login("admin","1234");
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

main()