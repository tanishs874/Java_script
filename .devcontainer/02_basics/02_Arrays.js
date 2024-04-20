const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
//The Push method will create a array within a array and will show the result like this 
//[ 'Thor', 'IronMan', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
 
// console.log(marvel_heroes[3][1]);//flash

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

//On the other side the concat will show the result like this
//[ 'Thor', 'IronMan', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

//Spread operator 

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

//[ 'Thor', 'IronMan', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
//Spread operator is also same as concat 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);//1,2,3,4,5,6,7,6,7,4,5

console.log(Array.isArray("Tanish"))//false
console.log(Array.from("Tanish"))//[ 'T', 'a', 'n', 'i', 's', 'h' ]
console.log(Array.from({name:"Tanish"}))//Interesting  case it will return [] empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ] 