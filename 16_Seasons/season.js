// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let month = prompt("Enter the month name to know the Season.");
month = month.toUpperCase();

if (month == "SEPTEMBER" || month == "OCTOBER" || month == "NOVEMBER") {
  document.write(
    "According to your Entered month it looks like season is 'Autumn'"
  );
} else if (month == "DECEMBER" || month == "JANUARY" || month == "FEBRAURY") {
  document.write(
    "According to your Entered month it looks like season is 'Winter'"
  );
} else if (month == "MARCH" || month == "APRIL" || month == "MAY") {
  document.write(
    "According to your Entered month it looks like season is 'Spring'"
  );
} else if (month == "JUNE" || month == "JULY" || month == "AUGUST") {
  document.write(
    "According to your Entered month it looks like season is 'Summer'"
  );
} else {
  document.write("Please Enter month name Correctly");
}
