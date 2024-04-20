// let a = 10
// const b = 20
var c = 300
if(true){
    let a = 10
    const b = 20
    var c = 30 //avoid using var 
}
// console.log(a);//--> a is not defined
// console.log(b);//--> b is not defined
console.log(c);//--> Here the output is 30 

let a = 10;
if(true){
    let a = 20
    const b  = 30;
    console.log(a);//Here the output will be 20 and not 10
}
console.log(a);//Here the output will be 10 only and not 20

//--> Global scope is totally different in the browser environment and in the code environment through node..\


/***********************************Nested functions******************************************* */

function one(){
    const username = "Tanish"
    function two(){
        const surname = "Sharma"
        console.log(username);
    }
    //console.log(surname);//ReferenceError: surname is not defined
    two()
}
one()
//---> Here the output will be not Tanish


if(true){
    const username = "Tanish"
    if(username === "Tanish"){
        const surname = "sharma"
        console.log(username+surname);//Tanishsharma
    }
    // console.log(surname);//ReferenceError: surname is not defined
    console.log(username);
}
// console.log(username)//ReferenceError: username is not defined


//+++++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++//
//+++++++++++++++++++++++++++++++++Mini Hoisting +++++++++++++++++++++++//
console.log(addone(5))//Here the output will be 6 . We can initialze the function before making .
function addone(num){//This is a simple function
    return num+1
}
addone(3)

// console.log(addtwo(6))//ReferenceError: Cannot access 'addtwo' before initialization 
const addtwo = function(num2){//This is also a funciton but sometimes it may be called as expression
    return num2+2
}
addtwo(5)

