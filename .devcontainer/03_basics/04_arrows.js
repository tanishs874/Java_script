const user = {
    username:"Tanish",
    price:20,
    welcomegreeting : function(){
        // console.log(`${this.username} welcome to website`);
        // console.log(this);
    }
}
user.welcomegreeting;// Nothing will print here
user.welcomegreeting();//Tanish welcome to website
user.username = "ram"//Tanish will change to ram here
user.welcomegreeting();//ram welcome to website
// console.log(this);//{} Here current context will be empty


//Browser ke andar global object hai window object // important

// function chai(){
//     let username = "sharma"
//     console.log(this.username);//username will be undefined here 
// }
// chai()

// const chai = function(){
//     let username = "sharma"
//     console.log(this.user)//username will be undefined here 
// }
// chai()


//Arrow function

const chai = () => {
    let username = "sharma"
    console.log(this);//{}
    console.log(this.username);//undefined
}
chai()

const addtwo = (num1 , num2) => {//This is a simple arrow function
    return num1+num2
}
console.log(addtwo(4,5));//9 

// Implicit return in arrow function

const addthree = (num1,num2,num3) => num1+num2+num3 //This is implicit return 
console.log(addthree(1,2,3))

const addfour = (num1,num2,num3,num4) => (num1+num2+num3+num4)//This is also implicit return
console.log(addfour(1,2,3,4));

const add = (num1,num2) => ({username:"Tanish"})
console.log(add(1,2));//{ username: 'Tanish' } This will be the output here 

// const myarr = [1,2,3,4,5]
// myarr.forEach(function(){})
// myarr.forEach(()=>{})
// myarr.forEach(()=>())



