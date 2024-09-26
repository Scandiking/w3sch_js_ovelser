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

// Convert the text into an UPPERCASE text:
let txt = "Hello World!";
txt = txt.toUpperCase();

// use the slice method to return the word "bananas".
let txt = "I can eat bananas all day";
let x = txt.slice(10,17);

// Use the correct String method to replace the word "Hello" with the word "Welcome"
let txt = "Hello World";
txt = txt.replace("Hello", "Welcome");

// Convert the value of txt to upper case
let txt = "Hello World";
txt = txt.toUpperCase();

// Convert the value of txt to lower case.
let txt = "Hello World";
txt = txt.toLowerCase();


// ---------------------------------------------
// JS Arrays
// ---------------------------------------------

// Get the value "Volvo" from the cars array
const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1];

// Change the first item of cars to "Ford"
const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0] = "Ford";

// Alert the number of items in an array, using the correct Array property
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// ---------------------------------------------
// JS Array Methods
// ---------------------------------------------

// Use the correct Array method to remove the last item of the fruits array.
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();

// Use the correct Array method to add "Kiwi" to the fruits array
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");

// Use the splice() method to remove "Orange" and "Apple" from fruits.
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1,2);


// ---------------------------------------------
// JS Array Sort
// ---------------------------------------------

// Use the correct Array method to sort the fruits array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort()


// ---------------------------------------------
// JS Dates
// ---------------------------------------------

// Create a Date object and alert the current date and time.
const d = new Date();
alert(d);

// Use the correct Date method to extract the year (four digits) out of a date object.
const d = new Date();
year = d.getFullYear();

// Use the correct Date method to get the month (0-11) out of a date object.
const d = new Date();
month = d.getMonth();

// Use the correct Date method to set the yeear of a date object to 2020
const d = new Date();
d.setFullYear(2020)


// ---------------------------------------------
// JS Math
// ---------------------------------------------

// Use the correct math method to create a random number
let r = Math.random();

// Use the correct Math method to return the largest number of 10 and 20
let x = Math.max(10, 20);

// Use the correct Math method to round a number to the nearest integer:
let x = Math.round(5.3);

// Use the correct Math method to get the square root of 9
let x = Math.sqrt(9);

// ---------------------------------------------
// JS Comparisons
// ---------------------------------------------

// Choose the correct comparison operator to alert true, when x is greater than y
x = 10;
y = 5;
alert(x>y);

// Choose the correct comparison operator to alert true when x is equal to y
x = 10;
y = 10;
alert(x==y);

// Choose the correct comparison operator to alert true, when x is NOT equal to Y
x = 10;
y = 5;
alert(x!=y);

// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
var age = n;
var voteable = (age < 18) ? "Too young" : "Old enough";
alert(voteable);

// ---------------------------------------------
// JS Conditions
// ---------------------------------------------

// Fix the if statement to alert "Hello World" if x is greater than y
if ( x > y ) {
    alert("Hello World");
}

// Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye"
if (x > y) {
    alert("Hello World");
} else {
    alert("Goodbye");
}


// ---------------------------------------------
// JS Switch
// ---------------------------------------------

// Create a switch statement that will alert "Hello" if fruits is "bananana", and "Welcome" if fruits is "apple"
switch(fruits) {
    case "Banana":
        alert("Hello")
        break;
    case "Apple":
        alert("Welcome")
        break;
}

// Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
switch (fruits) {
    case "Banana":
        alert("Hello")
        break;
    case "Apple":
        alert("Welcome")
        break;
    default:
        alert("Neither");
}

// ---------------------------------------------
// JS For Loops
// ---------------------------------------------

// Create a loop that runs from 0 to 9:
let i;
for (i = 0; i < 10; i++) {
    console.log(i);
}

// Create a loop that runs trough each item in the fruits array.
const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
    console.log(x);
}


// ---------------------------------------------
// JS While Loops
// ---------------------------------------------

// Create a loop that runs as long as i is less than 10
let i = 0;
while (i < 10) {
    console.log(i);
    i++
}

// Create a loop that runs as long as i is less than 10, but increase i with 2 each time
let i = 0;
while (i < 10) {
    console.log(i);
    i = i + 2;
}

// ---------------------------------------------
// JS Break Loops
// ---------------------------------------------

// Make the loop stop when i is 5
for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}

// Make the loop jump to the next iteration when is 5
for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
// ---------------------------------------------
// JS HTML DOM
// ---------------------------------------------

// Use the getElementById method to find the <p> element, and change its text to "Hello".
<p id="demo"></p>
<script>
    document.getElementById("demo").innerHTML = "Hello";
</script>

// Use the getElemtsByTagName method to find the first <p> element, and change its text to "Hello"
<p id="demo"></p>
<script>
    document.getElementsByTagName("p")[0].innerHTML = "Hello";
</script>

// Change the text of the frist element that has the class name "test".
<p class="test"></p>
<p class="test"></p>

<script>
    document.getElementByClassName("test")[0].innerHTML = "Hello";
</script>

// Use HTML DOM to change the value of the image's scr attribute.
<img id ="image" src="smiley.gif"/>

<script>
    document.getElementById("image").src = "pic_mountain.jpg";
</script>

// Use HTML DOM to change the value of the input field
<input type="text" id="myText" value="Hello"></input>
<script>
    document.getElementById("myText").value = "Have a nice day!";
</script>

// Change the text color of the <p> element to "red".
<p id="demo"></p>

<script>
    document.getElementById("demo").style.color = "red";
</script>

// Change the font size of the p element ot 40 pixels
<p id="demo"></p>
<script>
    document.getElementById("demo").style.fontSize="40px";
</script>

// Use the CSS display property to hide the p element
<p id="demo"></p>
<script>
    document.getElementById("demo").style.display="none";
</script>

// Use the event listener to assign an onclick event to the <button> element
<button id="demo">Click me1</button>

<script>
    document.getElementById("demo").addEventListener("click", myFunction);
</script>



