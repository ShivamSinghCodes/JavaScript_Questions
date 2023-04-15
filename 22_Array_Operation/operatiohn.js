// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// Sort the array and find the min and max age

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);


// Find the median age(one middle item or two middle items divided by two)

index = ages.length;
if (index % 2 !== 0) {
  console.log(`Median is  ${ages[Math.floor(index / 2)]}`);

}
else 
{
 console.log(`Median is ${ages[(index / 2)-1]} and ${ages[index / 2]} `);
 }