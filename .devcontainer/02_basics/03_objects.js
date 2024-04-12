//Singleton
//Object.create--> as constructor

//Object literals
const mysymbol = Symbol("Key 1")//Symbol 
const jsUser = {
    name : "Tanish",
    "full name" : "Tanish sharma",//We cannot acces this value with using dot.Sp,we need to use square notation console.log(jsUser["full name"])
    mysymbol : "key1",//It will give the output as key1 but the type of this will be string
    [mysymbol]: "key23",//Now it will give the output as key2 and the type will also be symbol
    age:20,
    location:"Ambala",
    email:"Ts@google.com",
    isloggedin:false,
    lastalogindays:["Monday","Tuesday"]
}
console.log(jsUser.email);//Ts@google.com
console.log(jsUser["email"]);//Ts@google.com
console.log(jsUser["full name"])//Tanish sharma
console.log(jsUser.mysymbol);//It will give the output as key1 but the type of this will be string
console.log(jsUser[mysymbol]);//Now it will give the output as key2 and the type will also be symbol

jsUser.email = "tanish123@gmail.com"
console.log(jsUser.email);//here the value will change as freeze is not used 
// Object.freeze(jsUser)//It will frezze the value and we cannot change the value after that
jsUser.email="tani@yahoo.com";//the value will not change
isloggedin = true;//the value will not change
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsUser")
}
// console.log(jsUser.greeting);//Undefined when object is freezed
// console.log(jsUser.greeting)//[Function (anonymous)] when object is not freezed
// console.log(jsUser.greeting());

jsUser.greeting_two = function(){
    console.log(`Hello jsUser ,${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greeting_two());