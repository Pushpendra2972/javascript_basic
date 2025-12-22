const name = "Pushpendra"
const repoCount = 30

// console.log(name + repoCount + " value")

console.log(`My name is ${name} and my repo count is ${repoCount}`); 


const gameName = new String('free_fire')

console.log(gameName[0])              // f
console.log(gameName.length)          // 9
console.log(gameName.toUpperCase())   // FREE_FIRE

console.log(gameName.charAt(2))       // e
console.log(gameName.indexOf('i'))    // 6

console.log(gameName.substring(0,4))  // free
console.log(gameName.slice(-9, 6))    // free_f

const str = "   namaste   "
console.log(str.trim())              // namaste

const url = "https://google.com%26verma"
console.log(url.replace('%26', '_'))     // https://google.com_verma