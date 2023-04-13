// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Please Enter Your Name");
if (age >= 18) {
  document.write("You are old enough to drive.");
} else {
  document.write(
    'You need to wait for "' +
      (18 - age) +
      '" Years in order to be aligible for Driving'
  );
}
