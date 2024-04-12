let my_date = new Date()
console.log(my_date)//2024-04-12T12:55:49.055Z
console.log(my_date.toString())//Fri Apr 12 2024 12:55:49 GMT+0000 (Coordinated Universal Time)
console.log(my_date.toDateString());//Fri Apr 12 2024
console.log(my_date.toLocaleString())//4/12/2024, 12:55:49 PM
console.log(my_date.toISOString())//2024-04-12T12:55:49.055Z
console.log(my_date.toJSON())//2024-04-12T12:55:49.055Z
console.log(typeof my_date)//typeof is object 

// let mycreateddate = new Date(2023,0,23)
// console.log(mycreateddate.toDateString())//Mon Jan 23 2023  months starts from 0 in javascript

//let createdDate = new Date(2023,0,23,5,8) //1/23/2023, 5:08:00 AM
//let createdDate = new Date("2023-01-14") //1/14/2023, 12:00:00 AM
let createdDate = new Date("01-14-2023") // 1/14/2023, 12:00:00 AM
// console.log(createdDate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000));

let new_date = new Date()
console.log(new_date);
console.log(new_date.getMonth()+1);
console.log(new_date.getDay());