// Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
//     If the number given by the user is 2 then the output should look like this-
//     2 _ 1 = 2
//     2 _ 2 = 4
//     2 _ 3 = 6 and so on till 2 _ 10 = 20.

let num = prompt("Enter the number to generate Multiplication Table");
for (let i = 1; i <= 10; i++) {
  document.write(`${num} _ ${i} = ${num * i}`);
  document.write("<br>");
}
