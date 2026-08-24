const employees = [
  { name: "A", dept: "IT", salary: 50000 },
  { name: "B", dept: "IT", salary: 70000 },
  { name: "C", dept: "HR", salary: 40000 },
  { name: "D", dept: "HR", salary: 60000 }
]
//Group by department and calculate average salary
function find(arr){
   let res = {};
   
   for(let n of arr){
       let dept = n.dept;
       if(!res[dept]){
           res[dept] = {
               count : 0,
               total : 0
           }
       }
       res[dept].total += n.salary;
       res[dept].count++;
   }
   
   for(let n in res){
       res[n] = res[n].total / res[n].count
   }
   return res
}

console.log(find(employees))