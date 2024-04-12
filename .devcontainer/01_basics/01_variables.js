const account_id = 1234
let account_email = "tanish123@gmail.com"
var account_password = "12345"
account_city = "Ambala"
let account_state;//if a varialbe is declared and value is not defined then its value will be undefined

// account_id = 2 //We cannot change const here

account_email = "ts123@gmail.com"
account_password = "54321"
account_city = "hyderabad"

console.log(account_id);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([account_id,account_email,account_password,account_city,account_state])//it will create a tablular structure