// Task-1 : student Registration form 

let name = prompt("Enter your name")
let dept = prompt("Enter your department")
let studage = prompt("Enter your age")

console.log("Welcome ",name);
console.log("Department: ",dept);
console.log("Age: ",studage);

// Task-2 : ATM withdrawal System

let UserBalance = 10000
let amount = 1000

if(amount>=100&&amount<=UserBalance){
    console.log("Transaction Successful");
}else if(amount>UserBalance){
    console.log("Reached Minimum withdrawal");
    
}else{
    console.log("Insufficient Balance");
}

// Task-3 : Swiggy Discount checker

let orderamount = Number(prompt("enter your order amount"))
let Charges = (orderamount>499)?"Free Delivery Available": "Delivery Charges Applied"
console.log(Charges);

// Task-4 : Instagram Login system

let userName = prompt("Enter username")

if(userName=="admin"){
    let password = prompt("Enter your password")
    if(password=="1234"){
        console.log("Login Success");
    }else{
        console.log("Wrong password");   
    }
}else{
    console.log("Invalid Username");   
}

// task-5 : Traffic Signal System

let trafficsignal = prompt("Enter your signal color")

switch(trafficsignal){
    case "red":
        console.log("STOP");
        break
    case "yellow":
        console.log("READY"); 
        break
    case "green":
        console.log("GO");
       break           
}

// task-6 : Employee Salary Calculator

function SalaryCalculation(salary,bonus){
    let totalsalary = salary+bonus
    return totalsalary
}
console.log(SalaryCalculation(25000,5000));

// task-7 : E-commerce Cart Total

let array = [100,200,300,400]
let totalprice = 0

for(let i=0 ; i<array.length;i++){
     totalprice += array[i]
}

let averageprice = totalprice/array.length

console.log(totalprice);
console.log(averageprice);

// task-8 : WhatsApp Contact Book

let ContactBook = {
    name:"Kamanjari",
    phone:7502321000,
    status:"online"
}
for(contact in ContactBook){
    console.log(contact+": "+ContactBook[contact]);
}

// task-9 : Movie ticket booking

function payment(){
    console.log("Payment done Successfully");
}

function Booking(callback){
    console.log("Movie ticket done successfully");
    callback()
}
Booking(payment)

// task-10 : Food Delivery Time Tracker

function * Timetracker(){
    yield "Order Confirmed"
    yield "Preparing Food"
    yield "Out for Deivery"
    yield "Delivered"
}

let fooddelivery = Timetracker()

console.log(fooddelivery.next().value);
console.log(fooddelivery.next().value);
console.log(fooddelivery.next().value);
console.log(fooddelivery.next().value);