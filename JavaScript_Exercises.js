/*
Dette JavaScript-dokumentet inneholder svar og kommentarer til W3Schools JavaScript Exercises og inneholder derfor en
rekke repeterte variabler og dermed ikke kjørbart i konvensjonell forstand. Da dette er ganske basic stuff fordres det
at leseren ikke trenger å kjøre scriptet for å kontrollere.
*/


// ---------------------------------------------
// JS variables
// ---------------------------------------------

// - Create a variabled called carName and assign the value Volvo to it:
let carName = "Volvo"; // Tilordner tekststringverdien Volvo til variabelen carName

// - Create a variable called x and assign the value 50 to it:
let x = 50; // Tilordner verdien 50 til variabelen x

// - Display the sum of 5 + 10, using two variables: x and y
let x = 5;  // Tilordner verdien 5 til variabelen x
let y = 10; // Tilordner verdien 10 til variabelen y
document.getElementById("demo").innerHTML = x + y; // Henter elementet "demo" og setter indre HTML til x+y
// Dette regnes ut om tall og konkateneres om tekststrenger.

// - Create a variable called z, assign x + y to it, and display the result in an alert box.
let x = 5;
let y = 10;
let z = x + y;
alert(z);

// - On one single line, declare three variables with the following names and values:
// firstName = "John", lastName = "Doe", age = 35
let firstName = "John", lastName = "Doe", age = 35;

// ---------------------------------------------
// JS operators
// ---------------------------------------------

// Multiply 10 with 5, and alert the result:
alert(10*5);

// Divide 10 by 2 and alert the result:
alert(10/2);

// Alert the remainder when 15 is divided by 9:
alert(15%9);

// Use the correct assignment operator that will result in x being 15 (same as x = x + y)
x = 10;
y = 5;
x += y;

// Use the correct assignment operator that will result in x being 50 (same as x = x * y)
x = 10;
y = 5;
x *= y;


// ---------------------------------------------
// JS Data Types
// ---------------------------------------------

// Use comments to describe the correct data type of the following variables:
let length = 16;            // Number
let lastName = "Johnson";   // String
const x = {
    firstName: "John",
    lastName: "Doe"
};                          // Object

// ---------------------------------------------
// JS Functions
// ---------------------------------------------

// Execute the function named myFunction:
// Funksjonen defineres:
function myFunction() {
    alert("Hello, World!");
}
myFunction() // dette kaller på funksjonen

// Create a function called "myFunction"
function myFunction() {
    alert("Hello, World!");
}

// Make the function return "Hello"
function myFunction() {
    return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();

// Make the function display "Hello" in the inner HTML of an element with the ID "demo"
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello";
}


// ---------------------------------------------
// JS Objects
// ---------------------------------------------

// Alert "John" by extracting information from the person object.
const person = {
    firstName: "John",
    lastName: "Doe"
}

alert(person.firstName);

// Add the following property and value to the person object: country: Norway
const person = {
    firstName: "John",
    lastName: "Doe",
    country: "Norway"
}

// Create an object called person with name = John, age = 50. Then, access the object to alert("John is 50").
const person = {
    name: "John", age: 50
};
alert(person.name + " is " + person.age);

// ---------------------------------------------
// JS Events
// ---------------------------------------------

// The <button> element should do something when someone clicks on it. Try to fix it!
<button onclick="alert("Hello")">Click me!</button>;

// When the button is clicked, the function myFunction should be executed
<button onclick="myFunction()">Function</button>

// The <div> element should turn red when someone moves the mouse over it.
<div onmouseover = "this.style.backgroundColor='red'">myDIV.</div>

// ---------------------------------------------
// JS Strings
// ---------------------------------------------

// Use the length propert to alert the length of txt.
let txt = "Hello World!";
let x = txt.length;
alert(x);

// Use escape characters to alert We are "Vikings".
let txt = "We are \"Vikings\"";
alert(txt);

// Concatenate the two strings to alert "Hello, World!".
let str1 = "Hello ";
let str2 = "World!";
alert(str1 + str2);

// ---------------------------------------------
// JS String Methods
// ---------------------------------------------

// ---------------------------------------------
// JS Arrays
// ---------------------------------------------

// ---------------------------------------------
// JS Array Methods
// ---------------------------------------------

// ---------------------------------------------
// JS Array Sort
// ---------------------------------------------

// ---------------------------------------------
// JS Dates
// ---------------------------------------------

// ---------------------------------------------
// JS Math
// ---------------------------------------------

// ---------------------------------------------
// JS Comparisons
// ---------------------------------------------

// ---------------------------------------------
// JS Conditions
// ---------------------------------------------

// ---------------------------------------------
// JS Switch
// ---------------------------------------------

// ---------------------------------------------
// JS For Loops
// ---------------------------------------------

// ---------------------------------------------
// JS While Loops
// ---------------------------------------------

// ---------------------------------------------
// JS Break Loops
// ---------------------------------------------

// ---------------------------------------------
// JS HTML DOM
// ---------------------------------------------