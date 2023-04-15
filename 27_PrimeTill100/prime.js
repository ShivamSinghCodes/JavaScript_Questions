// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

let c;
for (let j = 1; j <= 100; j++) {
  c = 0;
  for (let i = 1; i <= j; i++) {
    if (j % i == 0) {
      c = c + 1;
    }
  }
  if (c == 2) {
    console.log(j);
  }
}
