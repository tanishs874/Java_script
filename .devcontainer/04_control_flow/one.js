// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);//ReferenceError: power is not defined

if(score>100){
    const power = "fly"
    console.log(`User power: ${power}`);//User power: fly
}
// console.log(`User power: ${power}`);//ReferenceError: power is not defined

if(score > 100){
    var power = "fly"
    console.log(`User power: ${power}`);//User power: fly
}
console.log(`User power: ${power}`);//User power: fly

// Do not use var 

const balance = 1000
if(balance>500) console.log("balance is geater than 500");// This is implicit scope // balance is geater than 500
// if (balance > 500) console.log("test"),console.log("test2");// Do not write your code like this 

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}