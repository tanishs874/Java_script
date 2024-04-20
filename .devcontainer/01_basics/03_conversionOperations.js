let score = "33abc"

console.log(typeof score)//string 
console.log(typeof(score))//string

let valueofScore = Number(score)
console.log(typeof valueofScore)//number
console.log(valueofScore)//NaN

// // "33" -> 33
// // "33abc" -> Nan
// // true -> 1 , false -> 0

let isloggedIn = "tanish"
let booleanisLoggedIn = Boolean(isloggedIn)
console.log(booleanisLoggedIn)//true

// // 1 -> True
// // 0 -> False
// // "" -> False
// // "Tanish" -> True

let somenumber = 32
let stringnumber = String(somenumber)
console.log(typeof stringnumber)//string


// /******************************OPERATIONS ************************************* */ 

let value = 3
let negvalue = -value
console.log(negvalue);//-3

// /*console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)
// */

let str1 = "Tanish"
let str2 = "sharma"
let str3 = str1+str2
console.log(str3);//Tanishsharma

console.log("1"+2) // ->12
console.log(1+"2") // ->12
console.log("1"+ 2 + 2) // ->122
console.log(1 + 2 + "2") // ->32

// console.log(true) // ->true
// console.log(+true) // -> 1
// console.log(+"") // -> 0

// let num1 , num2 , num3
// num1 = num2 = num3 = 2 + 2

// let gamecounter = 100
// gamecounter++;
// console.log(gamecounter);