// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

let weight = prompt("Please eneter weight in KG");
let height = prompt("Please enter height in meters");
let bmi = weight/ Math.pow(height,2);
if (bmi<18.5)
{
    document.write("Person is Underweight");

}
else if(bmi>=18.5 && bmi<=24.9)
{
    document.write("Person has Normal Weight");
}
else if ( bmi >=25 && bmi <=29.9)
{
    document.write("Person is Overweight");
}
else if (bmi >=30 && bmi <=45) {
    document.write("Person is Obese");

}
else {
    document.write("Please check the input values")
}