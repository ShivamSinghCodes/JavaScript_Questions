// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let Companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
 let comparray = Companies.split(",");
 
 let arr = comparray.map(x => x.trim());
 console.log(arr);