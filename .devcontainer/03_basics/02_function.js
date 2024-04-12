function calculate_cart_value(num1){
    return num1;
}
console.log(calculate_cart_value(200,300,400))//Only 200 will be the output

function calculate_cart_values(...num1){
    return num1;
}
console.log(calculate_cart_values(10,20,30))// Here the value will be in the form of array [ 10, 20, 30 ]  like this

function calculate_cart_valu(val1, val2 , ...num1){
    return num1;
}
console.log(calculate_cart_valu(10,20,30,40,50));//here val1 = 10 and val2 = 20 and num1 = [30,40,50]

const user = {
    username : "Tanish",
    price : 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user) //username is Tanish and price is 199
handleobject({//username is sam and price is 399
    username:"sam",
    price:399
})

const myarr = [1,2,3,4,5]
function getvalue (getarray){
    return getarray[2]
}
// console.log(getvalue(myarr)) // 3
// console.log(getvalue([10,30,300,50]));//300