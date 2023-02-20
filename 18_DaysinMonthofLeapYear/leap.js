// Write a program which tells the number of days in a month, now consider leap year.

let month = prompt("Enter month number");
let year = prompt("Enter Year ");
month = Number(month);

if (month <= 0 || month >= 13 || typeof month === "NaN") {
  document.write("Please enter number from 1-12");
} else if (month === 4 || 6 === month || 9 === month || 11 === month) {
  document.write(`${month}th month has 30 days`);
} else if ((month === 2) && (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))

{
  document.write("2nd month has 29 days as it is leap year.");
}
 else if (month === 2) {
  document.write("2nd month has 28 days");
} else {
  document.write(month + " month has 31 days");
}
