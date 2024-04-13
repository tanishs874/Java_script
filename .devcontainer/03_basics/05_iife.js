// Immediately Ivoked Function Expression

// function chai(){
//     console.log("hello there 1");    ----> This is a simple function expression
// }
// chai()

// function chai(){
//     console.log("hello there 2"); 
// }
// ()-----> This is wrong expression

(function chai(){
    console.log("hello there 3 ");  //---> This is correct iife  -> hello there 3 
})();// use semicolon(;) here before moving to next function

(function aurcode(){
    console.log("hello there 4");//hello there 4
})();

(()=>{  //Here we have used arrow function in iife
    console.log("hello there 5");//hello there 5
})();

((name)=>{
    console.log(`hello there 6 ${name}`);//hello there 6 tanish
})("tanish")




