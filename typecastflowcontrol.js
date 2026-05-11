// task-1: Predict the output

console.log("10"+5);
// output:105  datatype: string

console.log(10+true);
// output:10 + inboolean true value=1 so its 11 datatype:number

console.log(false+null);
// output: falsevalue=0 + nullvalue=0 so its 0 datatype:number

console.log("Hello"+undefined);
// output:helloundefined datatype:string

console.log([1,2]+5);
// output:1,25 datatype:string

// Task-2: Implicity Typecasting

console.log(typeof("20"+4));
// output:204 datatype:string

console.log(typeof(false+2));
// output:falsevalue is 0+2 = 2 datatype:number

console.log(typeof([1,2]+"3"));
// output:1,23 datatype:string

console.log(typeof({k:2}+4));
// output:[object object]4 datatype:string

console.log(typeof(null+2));
// output:nullvalue is 0+2 = 2 datatype:number

// Task-3: Explicit Type Casting

console.log(Number("500"));
// ouptut:500

console.log(Number(true));
// output:1

console.log(Number(null));
// output:0

console.log(Number("abc"));
// output:Not a Number

console.log(Number([100]));
// output:100

// Task-4: Boolean Constructor

console.log(Boolean(""));
// output:false

console.log(Boolean("javascript"));
// output:True

console.log(Boolean(0));
// output:false

console.log(Boolean(1));
// output:True

console.log(Boolean(null));
// output:False

console.log(Boolean(undefined));
// output:false

console.log(Boolean([]));
// output:True

console.log(Boolean({}));
// output:False

// Task-5: Student Pass or Fail

let mark = 45

if(mark>=35){
    console.log("pass");  
}
else{
    console.log("fail"); 
}


// Task-6: Voting Eligibility

let age = 20

if(age>=18){
   console.log("Eligible");
   
}else{
   console.log("Not Eligible");  
}

// Task-7: Greatest Number

let a = 50
let b = 80
let c = 30

if(a>b && a>c){
    console.log("a is greater than b and c");  
}else if(b>c && b>a){
 console.log("b is greater than a and c");
}else
    console.log("c is greater than a and b");
    
// Task-8: Traffic Light System

let traffic = "red"

switch (traffic){
    case "red" :
        console.log("stop");
      break
    case "yellow":
        console.log("ready");
      break
    case "green":
        console.log("go");    
}

// Task-9: Login System 
let username = "admin"
let password = "1234"

if(username==="admin"){
    if(password==="1234"){
       console.log("login successful"); 
    }else{
        console.log("Invalid login");  
    }
}else{
    console.log("Invalid login"); 
}

// Task-10: Session Finder
// let hour = prompt("Enter the time")

// if(hour<=12){
//     alert("Good Morning")
// }else if(hour<=15){
//     alert("Good afternoon")
// }else if(hour<=19){
//     alert("Good Evening")
// }else if(hour<=24){
//     alert("Good night")
// }else{
//     alert("Enter current time format")
// }

// Bonus challenge

console.log(true+true);
// output: true value is 1 so 1+1=2 datatype:number

console.log("5"-2);
// output:3 because minus not do concandation so string behave as number

console.log("5"+2);
// output: 52

console.log(null+1);
// output: 1 because null value is 0

console.log(undefined+1);
// output: Not a number

console.log(Boolean(""));
// output: False

console.log(Number(true));
// output: 1