// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

const bigNumber = 12345679876345n

// Reference (non primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Pushpendra Kumar",
    age: 21,
}

const myFunction = function (){
    console.log("hellow world")
}

// **********************************************************************

// Stack memory (Primitive data),  Heap memory (non Primitive data) 

let myName = "Pushpendra Kumar"
let anotherName = myName
anotherName = "PKVerma"

console.log(myName)        // Pushpendra Kumar
console.log(anotherName)   // PKVerma

let userOne = {
    email: "pkverma@gmail.com",
    upi: "user@abl",
}

let userTwo = userOne

userTwo.email = "pushpa@gmail.com"

console.log(userOne.email)  // pushpa@gmail.com
console.log(userTwo.email)  // pushpa@gmail.com


