const h = "Hello";
const x = 23;
const name = "Tim";

let numOfYears = 9;

// 'let' allows us to re-assign
numOfYears = 10;
numOfYears = "ten";

// your JavaScript is impeccable.
// create a sentence that says the name and the number of years of experience.
// the '+' is CONCATENATING our STRINGS.
// '.' notation is used to access KEYS within an object.
// LOG is a method. An action. It actually does something.
// we INVOKE the METHOD with ()
// we pass in an ARGUMENT.
console.log("My name is " + name + ".");

// template literals, you must use ``
// $ - INTERPOLATION
console.log(`My name is ${name}.`);
`My name is ${name}.`;

// as a default, always use const. (will decrease the chances of it being changed.)

// create a variable called "name" that references a string
let name = "Tim";

// create a variable called "favoriteSong" that references a string
let favoriteSong = "Order My Steps";

// create a variable called "wage" that references a number
let wage = 100000;

// create a variable called "age" that references a number
let age = 22;

// create a variable called "onlyChild" that references a boolean
let onlyChild = true;

// create a variable called "satisfied" that references a boolean
let satisfied = true;

// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = null;

// print the data type of "favoriteThing"
// ! You heard a new song that became your favorite. 
let favoriteThing = "IceCream";
console.log(typeof favoriteThing);

// Reassign the variable "favoriteSong"
// ! You no longer like the type of data stored in "favoriteThing"
let favoriteSong = "New Lifestyle";

// Reassign "favoriteThing" to a different primitive data type and print its type
// ! Happy Birthday!
let favoriteThing = 24;
console.log(typeof favoriteThing);

// Reassign "age" to a new value
// ! You got a big raise at work.
let age = 25;

// Reassign "wage" to a new value
// ! Your raise changed your job satisfaction.
let wage = 200000;

// Assign "satisfied" to true
// use "console.log()" and "+" to print a sentence that includes two variables

let satisfied = true;
console.log(`My age is ${age}. My wage is ${wage}.`);