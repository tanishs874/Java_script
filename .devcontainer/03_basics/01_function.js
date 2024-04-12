function saymyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}
//saymyName -> Reference
//saymyName() -> Execution
saymyName();

function addTwoNumbers(number1 , number2){
    console.log(number1+number2);// the function is not returning any type of value here
}
addTwoNumbers()//Nan
addTwoNumbers(3,4)//7
addTwoNumbers(3,null)//3
addTwoNumbers(3,"4")//34
addTwoNumbers(3,"a")//3a

const result = addTwoNumbers(3,5)
console.log("Result ",result);//8 Result  undefined

function addtwonumbers(num1,num2){
    console.log("Tanish")// It will be printed
    // let result = num1+num2
    // return result;
    return num1+num2
    console.log("Tanish");// We cannot write anything after returning in a function hence it will not be printed
}
const res = addtwonumbers(3,5)
console.log("Result :",res);//Result : 8


function loginusermessage(username){
    if(username===undefined){//or if(!username) is also same
        console.log("Please enter username")
        return;
    }
    return `${username} logged in successfully`
}
// console.log(loginusermessage("tanish"));//tanish logged in successfully
console.log(loginusermessage());