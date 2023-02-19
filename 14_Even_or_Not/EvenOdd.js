// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.



let number = prompt("Enter a Number to check if it is Even or Odd")

if(number % 2 === 0)
{
    document.write("Given Number is Even: "+ number);
}
else{
    document.write("Entered number is Odd: "+number)
}