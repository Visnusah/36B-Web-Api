// Variable type
// let, const, var
// const is block-scoped and cannot be reassigned
const name = "John";
// name = "Doe"; // Error: Assignment to constant variable.
let age = 30;
age = 31; // Allowed: age can be reassigned
// let age = 31 // Error

var isActive = true; // var is function-scoped and can be reassigned
var isActive = false; // Allowed: var can be redeclared and reassigned

// Hoisting
console.log(city);

// scoped variables {}
if(true){
    const lastname = "Doe"; // Block-scoped variable
    let firstname = "Ram"; // Block-scoped variable
    var city = "Kathmandu"; // Function-scoped variable
    console.log(lastname); // Output: Doe
    console.log(firstname); // Output: Ram
    console.log(city); // Output: Kathmandu
}
// console.log(lastname); // Error: lastname is not defined
// console.log(firstname); // Error: firstname is not defined
console.log(city); // Output: Kathmandu

// Data types (commonly used)
let stringVar = "Hello, World!"; // String
let numberVar = 42;
let longNumberVar = 9007199n; // BigInt
let booleanVar = true; // Boolean
let nullVar = null; // Null
let undefinedVar; // Undefined
let symbolVar = Symbol("unique"); // Symbol
let symbolVar2 = Symbol("unique"); // Different symbol, even with the same description

console.log(stringVar, typeof stringVar); 
console.log(numberVar, typeof numberVar);
console.log(longNumberVar, typeof longNumberVar);
console.log(booleanVar, typeof booleanVar);
console.log(nullVar, typeof nullVar); // Note: typeof null returns "object"
console.log(undefinedVar, typeof undefinedVar);
console.log(symbolVar, typeof symbolVar);
console.log(symbolVar === symbolVar2); // Output: false (different symbols) even with the same value

// if-else if - else
let score = 85;
if(score >= 90){
    console.log("Grade: A");
} else if(score >= 80){
    console.log("Grade: B");
}else {
    console.log("Grade: F");
}
// ternary operator
// condition ? truth : false;
let grade = score < 40 ? "Fail" : "Pass";
console.log("Grade:", grade);

// switch
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}

// =, ==, ===
let num1 = 5;
let num2 = "5";
console.log(num1 == num2);// true
console.log(num1 === num2);// false


const arr1 = ["apple", "mango", "watermelon"];
console.log(arr1[0]); // Output: apple
arr1.push("banana"); // Adds "banana" to the end of the array
arr1.unshift("grape"); // Adds "grape" to the beginning of the array
console.log(arr1);

// iterating array 
for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}
// for of loop (iterate element/value)
for(const fruit of arr1){
    console.log(fruit);
}
// for in loop (iterate index/key)
for(const index in arr1){
    console.log(arr1[index]);
}

// Object
// JSON -> JavaScript "Object" Notation
// {key: value}, key is string, value can be any data type
const person1 = {
    firstname: "Ram",
    lastname: "Bahadur",
    "age": 25,
    isStudent: true,
    hobbies: ["reading", "traveling"],
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
}

console.log(person1);
console.log(person1.firstname); // . notation
console.log(person1["lastname"]); // []
console.log(person1.hobbies[0]); // Output: reading
console.log(person1.address.city); // Output: Kathmandu

person1.name = "Shyam";

// person1 = {}

console.log(person1.detail);
// console.log(person1.detail.city);

// nullable
console.log(person1.detail ?? "Detail not found");

// console.log(person1.detail.city ?? "City not found");
console.log(person1.detail?.city ?? "City not found");

console.log(person1.detail?.city.name ?? "City name not found");


// Create array of stuents
const stu1 = {
    name: "Ram",
    age: 20,
    score: 85
}
const stu2 = {
    name: "Shyam",
    age: 22,
    score: 35
}
// create an array students and add stu1 and stu2 to it
// loop students and print the name of students who scored below 40