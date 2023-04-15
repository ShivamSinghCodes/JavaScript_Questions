// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.


let number = prompt("Enetr two Number seperated by ','(comma)")
let operation = prompt("Enter symbol for operation from these '+', '-','/' and '*'")
let array= number.split(",").map(Number);
let result;
switch(operation)
{
    case "+" :
    result= array.reduce((acc, curr)=> acc+curr);
    break;
    case "-" :
    result= array.reduce((acc, curr)=> acc-curr);
    break;
    case "*" :
    result= array.reduce((acc, curr)=> acc*curr);
    break;
    case "/" :
    result= array.reduce((acc, curr)=> acc/curr);
    break;
}
document.write(`Your Number ${number} with ${operation} has ${result}`)