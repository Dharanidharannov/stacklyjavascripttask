// Task-1 : Student attendance system 

let presentStudent = ["Dharani","Surya","Madhavan","Jerold"]
let absentStudent = ["Sathya","Hari","Dhya","Navi"]

let allstudents = [...absentStudent,...absentStudent]
 allstudents.push("Navi")
 console.log(allstudents);
 
// Task-2 : E-Commerce Cart

let mobiledetails = {
    Brand:"vivo",
    Model:"Y20",
    Ram:"8GB",
    Storage:"128GB",
    Price:15000
}

let chargerdetails = {
    ChargerType:"Fast 25w",
    Warranty:"1 year"
}

let Cart = {...mobiledetails,
     ...chargerdetails,
    deliveryDate:"20-05-2026"}

console.log(Cart);

// Task-3 : Food Delivery App

function OrderFood(...food){
  console.log(`Total items ordered: ${food.length}`);
  console.log(`First Item: ${food[0]}`);
  console.log(`Lat Item: ${food[food.length-1]}`);
  
}

OrderFood("Briyani","Burger","Pizza","Dosa","Idly")

// Task-4 : Employee Salary Filter

let Employee = [{
    name:"Sekar",
    salary:40000
},{
    name:"Vijay",
    salary:52000
},{
    name:"Mohit",
    salary:51000
},{
    name:"Rohit",
    salary:45000
},{
    name:"Praveen",
    salary:30000
},{
    name:"Nirmal",
    salary:50000
}]

function filteremployee(){
  let highsalaryemp = Employee.filter((emp)=>{
        return emp.salary>=50000
    })
    console.log(highsalaryemp);
}

filteremployee()

// Task-5 : Online Game Score Board

let score = [90,80,120,70,150]

let totalscore = score.reduce((total,scr)=>{
     return total+scr
})

console.log("Total Score of all players:",totalscore);
