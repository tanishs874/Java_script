// Types of data
/*
Primitive data type -> String,number,bigint,boolean,null,undefined,symbol,object
Non-Primitive data type(Reference) -> Array,object,Functinos
*/

const score = 100//-> This is number
const scoreValue = 100.3//-> This is also number

const isLoggedIn = false// Boolean
const outsideTemp = null// Null
let userEmail;// Undefined

const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id===anotherid);

const bigNumber = 3456543576654356754n //This is Bigint

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObject = {
    name: "hitesh",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);//->type of is Symbol
console.log(typeof outsideTemp);//-> typeof is object
console.log(typeof scoreValue);//-> typeof is number
console.log(typeof myfunction);//-> typeof is function

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
Stack(Primitive) , Heap(Non-Primitive)
*/

// Stack ---> Copy
// Heap ---> Reference

let name = "Tanish sharma"
let anothername = name

anothername = "Tanish"

console.log(name)//Here the value will not change as in stack the value is copied 
console.log(anothername);

let userone =  {
    email: "userone@google.com",
    upi: "userone@ybl",
}
let usertwo = userone

usertwo.email = "tanish@google.com"
console.log(userone.email)//Here the value will change as in Heap there is direct reference 
console.log(usertwo.email)
