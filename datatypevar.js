// Section 1 : variables 

var a = 10;
a = 15;
console.log(a); 
// output is 15 because var is global scope reuse , redeclaration and reintializaion 

let b = 20;
let b = 30;
console.log(b)
//  it cant able to redeclare but it can reinitializaion,resue 
 
const c = 50;
console.log(c);
// output is 50

const x = 10;
x = 20;
// const cant be redeclare,reinitializaiton,reuse and its typeerror

var p = 5;
var p = 10;
console.log(p);
// output is 15 because var can be redeclaration

let q = 25;
q = q+10;
console.log(q);
// output is 35

const r = 7;
console.log(r + 3);
// output is 10

// var or let or const a = 10

// Section 2 : Console methods 

// 9) console.log()
// 10) console.warn()
// 11) console.error()
console.clear()
// 12) It will clear the console output




// section 3: Data Types

let a = "hello"
console.log(typeof a);
// output is string because in console we are using typeof so it will show the datatype a varaible 

let b = 100;
console.log(typeof b);
// output is number 

let c = false;
console.log(typeof c);
// output is boolean 

let d;
console.log(d);
// output is undefined 

//17) typeof null is object

// 18) remove double quotation because string is written inside the quotation

// Section 4: Arrays

let fruits = ["apple","mango","orange"]
console.log(fruits);

//20) output : "b"

// 21) output: "z"

// 22) console.log(varname[0])

// 23)output: 2

// 24) array method push(add value to last) and unshift(add value to first)

// Section 5:Objects

let users = {
    name : ["Dharanidharan","surya","Yogith"],
    age:[23,25,16]
}
console.log(users.age);
console.log(users.name)

// 26) output : Naveen

// 27) output: banana

// 28) console.log(users.name[users.name.length-1])

// section 6: Arithmetic Operators

// 29) output: 8 (addition)

// 30) output: 1 (modulus remainder value)

// 31) output : 8 (2*2*2 power of value)

// 32) output: 5 (divison quotient value)

//  Section 7: Increment and Decrement 

// 33) output : 6 ( because it increment)

// 34) output: b=6 c=5

// 35) output: x=6 y=6

// 36) output: m=2 n=3

// Section 8: Comparsion&Logical 

// 37) true (== it will check only)

// 38) false (=== it will check both datatype and value)

// 39) true (true&&false -> false(because AND operator in this operators if there is one false means also false) then it will check second condition first condition (false || true -> its true its OR operator its behave there is one true means also true so final answer is true))

// Section 9: Ternary 

// 40: yes (condition ? TV : FV condition is 5 greater than 3 so it will true value so answer is yes)