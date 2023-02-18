// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let indexing = [
  "Hello",
  "pw skills",
  "World",
  "This",
  "is",
  "pw skills",
  "Shivam",
  "it",
  "pw skills",
  "though"
];
let lindex = indexing.lastIndexOf("pw skills");
let findex = indexing.reverse().lastIndexOf("pw skills");
let len = indexing.length - 1;
console.log("Last index of 'pw skills' is :" + lindex+ " and first is :" + (len - findex));