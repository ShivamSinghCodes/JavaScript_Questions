/*  Write a program which can give grades to students according to theirs scores:

- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
               */


let marks = prompt("Enter Your Marks to know your 'Grades'");
if ( marks >= 0 && marks <= 49 )
{
    document.write("Your Grade is: F with marks of "+marks+".");
}
else if(marks>=50 && marks<=59)
{
    document.write("Your Grade is: D with marks of "+marks+".");
}
else if(marks>=60 && marks<=69)
{
    document.write("Your Grade is: C with marks of "+marks+".");
}
else if(marks>=70 && marks<=89)
{
    document.write("Your Grade is: B with marks of "+marks+".");
}
else if(marks>=80 && marks<=100)
{
    document.write("Your Grade is: A with marks of "+marks+".");
}
else 
{
    document.write("Please Enter marks between 0-100");
}