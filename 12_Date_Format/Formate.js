// Create a human readable time format using the Date time object

// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm


let Time = new Date;
let date = (Time.getDate() < 10 ? '0' : "" )+Time.getDate();
let month = (Time.getMonth() < 10 ? '0' : "" )+ Time.getMonth() ;
let year = Time.getFullYear();
let hour = (Time.getHours() < 10 ? '0' : "" )+Time.getHours();;
let min = (Time.getMinutes() < 10 ? '0' : "" )+Time.getMinutes();

console.log(year+"-"+month+"-"+date+" " + hour+":"+min);
console.log(date+"-"+month+"-"+year+" " + hour+":"+min);
console.log(date+"/"+month+"/"+year+" " + hour+":"+min);