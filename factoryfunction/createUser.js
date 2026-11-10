function createUser(name, role) {
  return {
    name,
    role,

    login() {
      console.log(` ${this.name} logged in`);
    },

    getRole() {
      return this.role;
    },
  };
}

const user1 = createUser("Rashid", "Recruiter");
const user2 = createUser("Aslam", "candidate");

user1.login();
user2.login();

console.log(user1);
console.log(user2);
