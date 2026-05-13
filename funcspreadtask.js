// Task-1 : Basic Function

function WelcomeUser(username){
    console.log(username);  
}
WelcomeUser("Dharanidharan P")

// Task-2 : Parameter&Return

function squareNumber(number){
    return number*number
}
console.log(squareNumber(5));

// Task-3 : Object Function

let employee = {
    name:"Surya",
    salary:50000
}
function employeeBonus(Bonus){
    console.log(employee.name);
    console.log(employee.salary+Bonus);
}
employeeBonus(5000)

// Task-4 : Scope Checking

function Scopechecking(){
    if(true){
         var name1 = "Yogith"
        let name2 = "Aaradhya"
         const name3 = "Virat"
    console.log(name1);
    // var working inside  the block
    console.log(name2);
     // let working inside the block
    console.log(name3);
     // const working inside the block
    }  
     console.log(name1);
    // var working inside the function
    // console.log(name2);
    //  // let is not working
    // console.log(name3);
     // const is not working
}
Scopechecking()


// Task-5 : Arrow function

let add =(a,b)=>{
   console.log(a+b)
}
add(10,20)

// Task-6 : Callback function

function multiply(a,b){
    return a*b
}

function calculator(Callback,a,b){
    console.log(Callback(a,b)); 
}
calculator(multiply,2,3)


// Task-7 : Generator Function

function * offers(){
    yield "50% OFF"
    yield "Free Delivery"
    yield "Cashback"
}
let shopdiscount = offers()
console.log(shopdiscount.next().value);
console.log(shopdiscount.next().value);
console.log(shopdiscount.next().value);

// Task-8 : Default Parameter

function Defaultparameter(name,course="javascript"){
    console.log("studentname:",name)
    console.log("Coursename:",course)
}
Defaultparameter("Rohit")

// Task-9 : Currying

function Currying(m1){
    return function(m2){
        return function(m3){
            console.log(m1*m2*m3); 
        }
    }
}
Currying(2)(3)(4)

// Task-10 : Spread Operator

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let spread = [...arr1,...arr2]

console.log(spread);

// Task-11 : Object Spread

let obj1 = {
    name:"Sivakumar"
}
let obj2 = {
    role:"Doctor"
}

let objmerge = {...obj1,...obj2}

console.log(objmerge);

// Task-12 : Rest Operator

function numbers(a,b,...c){
    console.log([a,b,...c]);
    console.log(a+b+c[0]+c[1]);
}
numbers(1,2,3,4)

// Task-13 : Mini Challenge 

let students=[]

function addstudents(...std){  
    students.push(...std)
}
//object//
addstudents(
    {name:"Dharanidharan",marks:80},
    {name:"Mithra",marks:70}
)
//callback function using//
function calculate(students,callback){
    console.log(callback(students))
}
console.log(students)

calculate(students[0],function(s){
    return s.marks

})
//spread operator//
let bonus=students.map((s)=>{
    return{
        ...s,
        marks:s.marks+8
    }
})//bonus marks//
console.log(bonus)