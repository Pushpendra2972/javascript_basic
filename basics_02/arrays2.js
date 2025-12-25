const marvel = ["thor", "ironman", "spiderman", "captain america"]

const indian_heros = ["akshay", "shahrukh", "ajay devgan", "salman"]


const newHeros = marvel.concat(indian_heros)  // merged both arrays

console.log(newHeros)

const newHeros2 = [...marvel, ...indian_heros]   // merged both arrays

console.log(newHeros2)



const numbers = [1, 2, 3, [4, 5, 6,], 7, 8,[9, 10, 11, [11, 12, 13, 14, [15, 16]]]]

const number_after_flating = numbers.flat(Infinity)  // depth: infinity

console.log(number_after_flating)   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 15, 16]
  


console.log(Array.from("Pushpendra"))   // ['P', 'u', 's', 'h', 'p', 'e', 'n', 'd', 'r', 'a']
 
 
 