// Looping statement

// 1.print numbers 1 to 20

for(let a=1; a<=20;a++){
    console.log(a); 
}

// 2. odd numbers 1 to 50

for(let b=1;b<=50;b++){
    if(b%2==1){
        console.log("odd numbers:" , b);
        
    }
}

// 3.mutlplication table

for(let c=1;c<=10;c++){
    console.log(`7*${c}=${7*c}`);   
}

// 4.Reverse counting 
let d = 20;
while(d>=1){
    console.log(d);
    d--
}

// 5.sum of numbers 

let sum = 0;

for(let e=1;e<=100;e++){
    sum += e  
}
console.log(sum);

// 6.Array loop

let fruits = ["apple","banana","orange","grapes"]
for(f of fruits){
    console.log(f);
}

// 7.Count Even Numbers

for(let g=1;g<=50;g++){
    if(g%2==0){
        console.log("even numbers:", g);    
    }
}

// 8. star pattern 

let star = " "

for(let h=1;h<=5;h++){
    star += "*"
    console.log(star);
}

// Function

// 9.Simple function 

function Welcome(){
   console.log("welcome to javascript"); 
}
Welcome()

// 10.Function with parameter

function Note(name){
    console.log("hello "+name)   
}
Note("Dharani")

// 11.Add two numbers

function Add(s1,s2){
    console.log(s1+s2); 
}
Add(10,20)

// 12. Salary Bonus

let salarydetails = {
     salary: 50000,
     bonus:5000
}

function Addbonus(salarydetails){
    console.log(salarydetails.salary+salarydetails.bonus)
}

Addbonus(salarydetails)

// 13. Object loop

let student = {
    name:"Rahul",
    course:"JavaScript",
    marks:95
}

for(stud in student){
    console.log(`${stud}: ${student[stud]}`); 
}

// 14.Find largest number
function largestnumber(l1,l2){
    if(l1>l2){
        console.log(l1);
    }else{
        console.log(l2);  
    }
}

largestnumber(10,50)

// 15.Mini Employee Task

let emp = {
    EmpName: "Dharanidharan P",
    Dept: "Software Development",
    Salary: 32000,
    Bonus: 8000
}

function Employeedetails(emp){
    console.log("EmployeeName:", emp.EmpName);
    console.log("Department:", emp.Dept);
    console.log("Salary:" ,emp.Salary);
    console.log("Salary after Bonus:",emp.Salary+emp.Bonus);
}

Employeedetails(emp)