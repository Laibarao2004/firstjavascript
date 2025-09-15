// Assignment # 5  //
//........ MATH EXPRESSIONS........ //

//  1 //
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
let firstNum = 5;
let secNum = 10;
let totalSum = firstNum + secNum;

document.write(`the sum of ${firstNum}  and  ${secNum} is ${totalSum} <br/> <br/>`);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
let num1 = 20;
let num2 = 6;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

document.writeln(` subtraction of ${num1} and ${num2} is ${subtraction} <br/>`)
document.writeln(`multiplication of ${num1} and ${num2} is ${multiplication} <br/>`)
document.writeln(`division of ${num1} and ${num2} is ${division} <br/>`)
document.writeln(`modulas of ${num1} and ${num2} is ${modulus} <br/> <br/>`)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
let myVar;

// b. Show the value of variable
document.write(`Value after variable declaration is: ${myVar} <br>`);

// c. Initialize the variable with some number
myVar = 5;

// d. Show the value of variable
document.write(`Initial value: ${myVar} <br>`);

// e. Increment the variable
myVar++;

// f. Show the value
document.write(`Value after increment is: ${myVar} <br>`);

// g. Add 7 to the variable
myVar += 7;

// h. Show the value
document.write(`Value after addition is: ${myVar} <br>`);

// i. Decrement the variable
myVar--;

// j. Show the value
document.write(`Value after decrement is: ${myVar} <br>`);

// k. Show remainder after dividing variable’s value by 3
let remainder = myVar % 3;

// l. Show output
document.write(`The remainder is: ${remainder} <br/><br/>`);

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.
// TICKET PRICE
let ticketPrice = 600;

// Calculate Cost Of 5 Tickets
let totalCost = ticketPrice * 5;

// show output in browser
document.write(`the cost of buying 5
 tickets to a movie is ${totalCost}PKR <br/> <br/>`)

//  5. Write a script to display multiplication table of any
// number in your browser. 

let num = 21;
document.write(` <h2> Multiplication Table of ${num}</h2>`)
for (let i = 1; i <= 10; i++)
    document.write(`${num} x ${i} =${num * i} <br/>`)

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Celsius to Fahrenheit
let Celsius = 25;
let Fahrenheit = (Celsius * 9 / 5) + 32;

document.write(` <h3>${Celsius}&deg;c is ${Fahrenheit}&deg;f <br/></h3>`);

// Fahrenheit to  Celsius 
let Fahrenheit2 = 70;
let Celsius2 = (Fahrenheit2 - 32) * 5 / 9;
document.write(` <h3>${Fahrenheit2}&deg;f is ${Celsius2}&deg;c </h3> <br/>`);

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

let priceItem1 = 650; // price of item 1
let priceItem2 = 100; // price of item 2
let qtyItem1 = 3; // quantity of item 1
let qtyItem2 = 7; // quantity of item 2
let shippingCharges = 100;

let total = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;

document.write(`<h2>Shopping Cart</h2>`);
document.write(`Price of item 1 is ${priceItem1}<br>`);
document.write(`Quantity of item 1 is ${qtyItem1}<br>`);
document.write(`Price of item 2 is ${priceItem2}<br>`);
document.write(`Quantity of item 2 is ${qtyItem2}<br>`);
document.write(`Shipping Charges ${shippingCharges}<br><br>`);
document.write(`Total cost of your order is ${total} PKR <br/><br/>`);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
document.write("<h3> Mark sheet</h3>")
// step 1 variables  //
let totalMarks = 500;
let obtainedMarks = 375;

// step 2 persentage Formula  //
let percentage = (obtainedMarks / totalMarks) * 100;

// step 3 show result in browser  //
document.write("Total Marks: " + totalMarks + "<br/>");
document.write("Obtain Marks:" + obtainedMarks + "<br/>");
document.write("Percentage :" + percentage.toFixed(2) + "%");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.

// currency rate
let usdToPak = 104.80;
let saudiRiyals = 25;

// calculations in a single expression
let totalPkr = (10 * usdToPak) + (25 * saudiRiyals);

document.write("<h4>  Total Currency in PKR : <h4/>" + totalPkr + "</br> </br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// initialize a Number
let initializeNumber = 10;

// all calculations in a single expression
let result = ((initializeNumber + 5) * 10) / 2;

// show result
document.write(` <h2> The result is : ${result} </h2> </br>`);


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

let currentYear = 2025;
let birthYear = 2004;

let age1 = currentYear - birthYear;
let age2 = age1 - 1;

document.write("<h2> Age Calculator </h2>")
document.write("Current Year: " + currentYear + "<br/>");
document.write("Birth Year  : " + birthYear + "<br/>");
document.write("Your Age is : " + age1 + "or" + age2 + "<br/> <br/>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// MATH EXPRESSIONS | JAVASCRIPT

// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write("<h2>The Geometrizer:</h2>")
let radius = 20; // radius store in variable
let pi = 3.142; // value of π

let circumference = 2 * pi * radius; // Formula: 2πr
let area = pi * radius * radius; // Formula: πr²

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);


//     13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

let favoriteSnack = "Chocolate Chip Cookies"; // a. Favorite snack
let currentAge = 18; // b. Current age
let maxAge = 65; // c. Maximum age
let perDay = 3; // d. Amount per day

let yearsRemaining = maxAge - currentAge;
let totalSnacks = yearsRemaining * 365 * perDay; // e. Total snacks for life

document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + perDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack +
    " to last you until the ripe old age of " + maxAge + ".");


