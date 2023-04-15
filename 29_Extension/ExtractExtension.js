// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.


let filename= prompt("Enter Full file name with 'Extension'")
// Finding last index of . character.
let dotIndex= filename.lastIndexOf(".");
// Storing extension part in extension variable.
let extension= filename.substring(dotIndex+1);
console.log(`Your entered file name has ${extension} extension`)
