const name = "Tanish"
const count = 20
// console.log(name+count+"hello")  outdated syntax

console.log(`Hello my name is ${name} and my count is ${count}`);//Hello my name is Tanish and my count is 20

const new_name = new String("Tanish sharma")
console.log(new_name);//[String: 'Tanish sharma']
console.log(new_name[0]);//T
console.log(new_name.__proto__);//{}
console.log(new_name.length);//13
console.log(new_name.charAt(2));//n
console.log(new_name.toUpperCase());//TANISH SHARMA
console.log(new_name.indexOf('n'));//2

const new_String = new_name.substring(0,5)//we cannot give negative values in substring
console.log(new_String);//->The answer will be Tanis   h->will not be there
console.log(new_String.slice(-4,4))

const str = new String("               TANISH       SHARMA        ")
console.log(str.trim()) //-> It will remove all white spaces from the starting and the end but not from the middle

const url = "https://Tanish.com.tanish%20sharma"
console.log(url.replace("%20","-"));
console.log(url.includes("Tanish"))//Returns the value in boolean
console.log(url.includes("TANISH"))//Returns the value in boolean

const new_str = new_name.split(" ")
console.log(new_str);//[ 'Tanish', 'sharma' ]