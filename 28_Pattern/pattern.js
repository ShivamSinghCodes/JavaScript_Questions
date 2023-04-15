// Write a program to print the given patterns using the loops-
//     a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//     *
//     **
//     ***
document.write("Triangle ")
document.write("<br>")

let number = prompt("Enter how many level of pattern you want. ");
// let number = 4;
for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(" * ");
  }
  document.write("<br>");
}

document.write("<br>");

// Print a square pattern, if the input is 3 then the output should be similar to the given output
//        ***
//        ***
//        ***
document.write("Square ")
document.write("<br>")
let number1=prompt("Enter for Square pattern")
for (let i=1;i<=number;i++)
{
  for (let j=1;j<=number;j++)
  {
    document.write(" * ")
  }
  document.write("<br>")
}

// Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//          *
//         *** 
//        *****  

let number2 = prompt("Enter number for Pyramid")
document.write("Pyramid ")
document.write("<br>")
for (let i = 1; i <= number2; i++) {

  // create a string to hold the current row
  let row = '';

  // loop through each column for the current row
  for (let j = 1; j <= number2 - i; j++) {
    row += '&nbsp;'; // add spaces before the pyramid
  }
  for (let k = 1; k <= 2*i-1; k++) {
    row += '*'; // add asterisks for the pyramid
  }

  // print the current row to the document
  document.write(row + '<br>');
}