// function
//1.
function hello() {
    console.log("Hello World");
}
hello(); // Output: Hello World
//2.
const hello2 = function () {
    console.log("Hello World 2");
}
hello2(); // Output: Hello World 2
//3.
const hello3 = () => {
    console.log("Hello World 3");
}
hello3(); // Output: Hello World 3

// difference
function add(a, b) {
    return a + b;
}
var result = add(5, 3);
console.log(result);

const subtract = (a, b) => a - b; // arrow automatically returns
var result = subtract(5, 3);
console.log(result);

const mul = (a, b) => {
    return a * b; // if arrow is scoped, we need to use return
}
var result = mul(5, 3);
console.log(result);

const person = {
    firstname: "Ram",
    lastname: "Bahadur",
    fullName: function () {
        return this.firstname + " " + this.lastname;
    },
    fullNameArrow: () => {
        // arrow in object cannot use this
        return this.firstname + " " + this.lastname;
    }
}
console.log(person.fullName());
console.log(person.fullNameArrow());

// destructuring
const { firstname, lastname } = person;
console.log(firstname, lastname);

const { firstname: fName, lastname: lName } = person;
console.log(fName, lName);

// callbacks and closures
// closure
function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log("Count:", count);
    }
    return inner;
}
const counter1 = outer(); // counter1 is inner function
counter1(); // Count: 1
counter1(); // Count: 2

const counter2 = outer(); // resets count to 0 for counter2

counter1();


// callback, higher order function
function greet(name, callback) {
    callback(name);
}
function sayHello(name) {
    console.log("Hello, " + name);
}
greet("Ram", sayHello); // Output: Hello, Ram
greet("Ram", (name) => console.log("Hi, " + name));
// Output: Whatup, Ram
greet("Ram", (name) => console.log("Whatup, " + name));

// 5 min classwork`
// create a function calculate, takes 3 args
// num1, num2 and callback
// callback will perform operation on num1 and num2
// make 4 operation and use calculate function
// for addition, subtraction, multiplication and division
function calculate(num1, num2, callback) {
    callback(num1, num2);
}
// const add = (a, b) => console.log("Addition:", a + b);
// calculate(10, 5, add);
calculate(10, 5, (a, b) => console.log("Subtraction:", a - b));
calculate(10, 5, (a, b) => console.log("Multiplication:", a * b));
calculate(10, 5, (a, b) => console.log("Division:", a / b));

// List iterator and callbacks
const fruits = ["apple", "mango", "pineapple", "banana"];

fruits.forEach(
    // callback function
    (fruit, index) => console.log(index + ": " + fruit)
);
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

const mappedFruits = fruits.map(
    (fruit) => "Fresh, " + fruit.toUpperCase()
);
console.log(mappedFruits);

// ui example
const listFruits = fruits.map(
    (fruit, index) => {
        return `<li id="${index}">${fruit}</li>`; // must have return
    }
);
console.log(listFruits);

// filter
const filteredFruits = fruits.filter(
    (fruit) => fruit.length > 4
);
console.log(filteredFruits);
// count
const countFruits = fruits.reduce(
    (count) => count + 1, // count is accumulator, fruit is current value
    0 // initial value of count
);
console.log(countFruits);