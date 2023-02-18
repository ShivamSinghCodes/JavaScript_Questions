// Create a human readable time format using the Date time object

// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm


let Time = new Date;
let day = (Time.getDay() < 10 ? '0' : "" )+Time.getDay();
let month = (Time.getMonth() < 10 ? '0' : "" )+ Time.getMonth() ;
let year = Time.getFullYear();
let hour = (Time.getHours() < 10 ? '0' : "" )+Time.getHours();;
let min = (Time.getMinutes() < 10 ? '0' : "" )+Time.getMinutes();

console.log(year+"-"+month+"-"+day+" " + hour+":"+min);
console.log(day+"-"+month+"-"+year+" " + hour+":"+min);
console.log(day+"/"+month+"/"+year+" " + hour+":"+min);