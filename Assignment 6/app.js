// ASSIGNMENT # 6  //

// MATH EXPRESSIONS //

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


 document.write("<h2>Q1: Output of Pre/Post Increment</h2>");
        var a = 10;
        document.write("The value of a is: " + a + "<br>");
        document.write("The value of ++a is: " + (++a) + "<br>");
        document.write("Now the value of a is: " + a + "<br><br>");
        document.write("The value of a++ is: " + (a++) + "<br>");
        document.write("Now the value of a is: " + a + "<br><br>");
        document.write("The value of --a is: " + (--a) + "<br>");
        document.write("Now the value of a is: " + a + "<br><br>");
        document.write("The value of a-- is: " + (a--) + "<br>");
        document.write("Now the value of a is: " + a + "<br><hr>");


// 2. What will be the output in variables a, b & result after
// execution of the following script:

document.write("<h2>Q2: Complex Expression</h2>");
        var a = 2, b = 1;
        document.write("a = " + a + ", b = " + b + "<br>");
        var result = --a - --b + ++b + b--;
        document.write("Result of expression (--a - --b + ++b + b--) = " + result + "<br>");
        document.write("Final value of a = " + a + "<br>");
        document.write("Final value of b = " + b + "<br><hr>");


// 3. Write a program that takes input a name from user &
// greet the user.

document.write("<h2>Q3: Greeting User</h2>");
        var userName = prompt("Enter your name:");
        document.write("Hello " + userName + "! Welcome to JavaScript.<br><hr>");


// 4.Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

        document.write("<h2>Q4: Multiplication Table</h2>");
        var num = +prompt("Enter a number for table (default is 5):", 5);
        document.write("Multiplication Table of " + num + "<br>");
        for (var i = 1; i <= 10; i++) {
            document.write(num + " x " + i + " = " + (num * i) + "<br>");
        }
        document.write("<hr>");

// 5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

    document.write("<h2>Q5: Marks Sheet</h2>");
        var sub1 = prompt("Enter first subject name:");
        var sub2 = prompt("Enter second subject name:");
        var sub3 = prompt("Enter third subject name:");
        var totalMarksEach = 100;

        var marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
        var marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
        var marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

        var totalMarks = totalMarksEach * 3;
        var obtainedMarks = marks1 + marks2 + marks3;
        var percentage = (obtainedMarks / totalMarks * 100).toFixed(2);

        document.write("<table border='1' cellspacing='0' cellpadding='8'>");
        document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
        document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksEach + "</td><td>" + marks1 + "</td></tr>");
        document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksEach + "</td><td>" + marks2 + "</td></tr>");
        document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksEach + "</td><td>" + marks3 + "</td></tr>");
        document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th></tr>");
        document.write("</table>");
        document.write("<h3>Percentage: " + percentage + "%</h3><hr>")