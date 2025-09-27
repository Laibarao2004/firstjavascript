// ASSIGNMENT # 8  //

// IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS  //

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let char = prompt("Enter a character (number or letter):");
let ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  document.write("<h3>Q1:</h3>The input is a number.<br>");
} else if (ascii >= 65 && ascii <= 90) {
  document.write("<h3>Q1:</h3>The input is an UPPERCASE letter.<br>");
} else if (ascii >= 97 && ascii <= 122) {
  document.write("<h3>Q1:</h3>The input is a lowercase letter.<br>");
} else {
  document.write("<h3>Q1:</h3>The input is not a number or letter.<br>");
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
let num1 = +prompt("Enter first integer:");
let num2 = +prompt("Enter second integer:");

if (num1 > num2) {
  document.write("<h3>Q2:</h3>The larger number is " + num1 + "<br>");
} else if (num2 > num1) {
  document.write("<h3>Q2:</h3>The larger number is " + num2 + "<br>");
} else {
  document.write("<h3>Q2:</h3>Both numbers are equal.<br>");
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
let number = +prompt("Enter a number:");

if (number > 0) {
  document.write("<h3>Q3:</h3>The number is Positive.<br>");
} else if (number < 0) {
  document.write("<h3>Q3:</h3>The number is Negative.<br>");
} else {
  document.write("<h3>Q3:</h3>The number is Zero.<br>");
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
let char2 = prompt("Enter a single character (a-z):").toLowerCase();

if (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u") {
  document.write("<h3>Q4:</h3>True – It is a vowel.<br>");
} else {
  document.write("<h3>Q4:</h3>False – It is not a vowel.<br>");
}


// 5. Write a program that

// a. Store correct password in a JS variable.

// b. Asks user to enter his/her password

// c. Validate the two passwords:
   // i. Check if user has entered password. If not, then
// give message “ Please enter your password”
    // ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

let correctPassword = "javascript123";
let userPassword = prompt("Enter your password:");

if (!userPassword) {
  document.write("<h3>Q5:</h3>Please enter your password.<br>");
} else if (userPassword === correctPassword) {
  document.write("<h3>Q5:</h3>Correct! The password you entered matches the original password.<br>");
} else {
  document.write("<h3>Q5:</h3>Incorrect password.<br>");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.write("<h3>Q6:</h3>" + greeting + "<br>");


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = +prompt("Enter time in 24 hours format (e.g. 1900 for 7pm):");

if (time >= 0 && time < 1200) {
  document.write("<h3>Q7:</h3>Good Morning!<br>");
} else if (time >= 1200 && time < 1700) {
  document.write("<h3>Q7:</h3>Good Afternoon!<br>");
} else if (time >= 1700 && time < 2100) {
  document.write("<h3>Q7:</h3>Good Evening!<br>");
} else if (time >= 2100 && time <= 2359) {
  document.write("<h3>Q7:</h3>Good Night!<br>");
} else {
  document.write("<h3>Q7:</h3>Invalid time format.<br>");
}