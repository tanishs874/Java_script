/*Arrays*/

const my_Array = [0,1,2,3,4,5]
const my_Array2 = [0,1,2,true,"tanish"]//Array can contain different data variables values
const my_heroes = ["hanuman","shaktiman"]
const my_Array3 = new Array(1,2,3,4)


// console.log(my_Array[1]);//1

//Shallow copy --> A shallow of an object is a copy whose property share the same references
//deep copy --> A deep copy of an object is a copy whose property do not share the same reference

//In javascript Array copy operations create shallow copies

//Array Methods//

my_Array.push(6)//add 6 in the array
my_Array.push(7)//add 7 in the array
my_Array.pop()//it will remove the last value from the array
// console.log(my_Array)

my_Array.unshift(9)//it will add 9 on the 0th index//[9,0,1,2,3,4,5,6]
// console.log(my_Array)
my_Array.shift()//it will remove the value of the 0th index//[0,1,2,3,4,5,6]
// console.log(my_Array)

// console.log(my_Array.includes(5))//->True
// console.log(my_Array.indexOf(9));//-> it will show -1 as 9th index is not present
// console.log(my_Array.indexOf(3));//-> 4

const my_new_Array = my_Array.join()
// console.log(my_Array);
// console.log(my_new_Array);

// console.log(typeof my_Array);//type of my_Array is object
// console.log(typeof my_new_Array);//by using join() our Array is converted into string type so typeof is string

//Difference between slice and splice 

console.log("A ",my_Array)
const new_array = my_Array.slice(1,3)
console.log(new_array);//[1,2]
console.log("B ",my_Array)//slice do not changes the original array 
const newest_array = my_Array.splice(1,3)
console.log(newest_array);//[1,2,3]
console.log("C",my_Array);//splice changes the original array from[0,1,2,3,4,5,6] to [0,4,5,6]

