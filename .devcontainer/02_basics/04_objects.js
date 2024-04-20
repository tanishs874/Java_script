// const tinderUser = new Object()//--> This is a singelton object

const tinderUser = {}//This is a non-singelton object
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedin = false;
console.log(tinderUser)//{ id: '123abc', name: 'sammy', isloggedin: false }

const regular_user = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Tanish",
            lastname:"Sharma"
        }
    }
}
console.log(regular_user.fullname.userfullname.firstname);//Tanish 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

const obj3 = Object.assign({},obj1,obj2,obj4)
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Using spread operator 
const obj11 = {1:"a",2:"b"}
const obj12 = {3:"a",4:"b"}
const obj13 = {5:"a",6:"b"}

const obj5 = {...obj11,...obj12,...obj13}
console.log(obj5);


const users = [{
    email:"Tanish@google.com"
},{
    location:"village area"
},{
}
]
console.log(users[0].email)//Tanish@google.com
console.log(users[1].location)//village area
console.log(Object.keys(tinderUser));// output will be in the format of array [ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderUser))// output will be in the format of array [ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser))// output will be in the form of array within array [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isloggedin', false ] ]

console.log(tinderUser.hasOwnProperty('islooged'))//false -> It will tell that it has this property or not
console.log(tinderUser.hasOwnProperty('isloogedin'))//True -> It will tell that it has this property or not