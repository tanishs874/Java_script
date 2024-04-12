const course = {
    coursename:"js in hindi",
    price:"100",
    courseInstructor:"Tanish"
}
 
// console.log(course.courseInstructor)//Tanish
// console.log(course.price);//100
// console.log(course.coursename)//js in hindi

// How to destructure the objects 

const {courseInstructor} = course
console.log(courseInstructor);//Tanish 

const {courseInstructor : instruct} = course // here i have destrcuted the object courseInstructor to instruct
console.log(instruct)//Tanish

//Structure of API
//API is in JSON format

//  {
//      "name":"Tanish",
//      "coursename":"js in hindi",
//      "price":"Free"
// }

[
    {},
    {},
    {}
]