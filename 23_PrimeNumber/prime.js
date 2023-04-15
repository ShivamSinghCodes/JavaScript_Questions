// Write a program to check that the number given by the user is a prime number or not.

function Prime(n) {
  if (n == 1 || n == 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
let number = prompt("Enter Number");
Prime(number)
  ? document.write("Number is Prime")
  : document.write("Number is NonPrime");
