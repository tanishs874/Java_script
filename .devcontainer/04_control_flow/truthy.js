// const useremail = "t@nish.ai"
// if (useremail) {
//     console.log("Got user email");
// }
// else{
//     console.log("don't have user email");
// }
//Here the output will be Got user email

// const useremail = ""//empty string
// if(useremail){
//     console.log("Got user email");
// }
// else{
//     console.log("don't get user email");
// }
//Here the output will be don't get user email 

const useremail = []//empty array
if(useremail){
    console.log("Got user email");
}
else{
    console.log("don't get user email");
}
//Here the output will be Got user email

/***********************FALSY VALUES************************** */
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN //These all are falsy values

/************************TRUTHY VALUES************************ */
// "0" , "false" , " " , [] , {} , function(){}

if(useremail.length === 0){
    console.log("array is empty");
}

const emptyobj = {}
if(Object.keys(emptyobj.length === 0)){
    console.log("Object is emptpy");
}

// Nullish Coalescing Operator (??): null undefined

let val1 
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
// val1 = null ?? 5 ?? 10//5

// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80"): console.log("more than 80")
