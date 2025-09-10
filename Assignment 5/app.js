// Assignment # 5  //
//........ MATH EXPRESSIONS........ //

//  1 //
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
let firstNum = 5;
let secNum = 10;
let totalSum = firstNum +  secNum;

document.write(`the sum of ${firstNum}  and  ${ secNum} is ${totalSum} <br/> <br/>`); 

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
let num1 = 20;
let num2 = 6;
let subtraction = num1 - num2;
let multiplication = num1 * num2 ;
let division = num1/num2;
let modulus = num1 % num2;

document.writeln(` subtraction of ${num1} and ${num2} is ${subtraction} <br/>`)
document.writeln(`multiplication of ${num1} and ${num2} is ${multiplication} <br/>` )
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
    document.write(`The remainder is: ${remainder} <br/><br/>` );

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
for (let i =1; i<= 10; i++ )
    document.write(`${num} x ${i} =${num * i} <br/>`)
    