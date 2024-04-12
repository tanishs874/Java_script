const score = 400
const balance = new Number(score)
console.log(balance);//[Number: 400]
console.log(score);//400

console.log(balance.toString())//400
console.log(balance.toString().length);
console.log(balance.toFixed(2))//400.00
console.log(balance.toFixed(3))//400.000

const other_number = 23.8966
console.log(other_number.toPrecision(3))//23.9  //->It is like roundoff value
const another_number = 123.896
console.log(another_number.toPrecision(3))//124  //->It is like roundoff Value

const hundreds = 1000000
console.log(hundreds.toLocaleString())//1,000,000 This is according to US standards
console.log(hundreds.toLocaleString('en-In'))//10,00,000 This is according to indian standards


//++++++++++++Maths+++++++++++++++++++Mahts library come by default

console.log(Math)//Object [Math] {}
console.log(Math.abs(-4))//4
console.log(Math.round(4.6))//5
console.log(Math.round(4.4));//4
console.log(Math.ceil(4.1))//5
console.log(Math.floor(4.9))//4
console.log(Math.sqrt(25))//5
console.log(Math.min(2,3,4,5,6,7,77))//2
console.log(Math.max(5,4,6,4,6,4,3,55))//55

console.log(Math.random());//->value will be between 0 and 1

console.log((Math.floor(Math.random()*10)+1))//value will be between 1 to 10

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)//value will be between 10 to 20

