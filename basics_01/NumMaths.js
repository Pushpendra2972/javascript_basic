const { version } = require("react")

console.log("Pushpendra Kumar verma")
const num = 200
console.log(num)              // 200

const num2 = new Number(100)
console.log(num2)             // [Number: 100]

console.log(num2.toString())  // 100
console.log(num2.toString().length)    // 3

console.log(num2.toFixed(2))    // 100.00

const num3 = 23.894
console.log(num3.toPrecision(3))  // 23.9

const num4 = 123.894
console.log(num4.toPrecision(3))  // 124

const num5 = 100000000000
console.log(num5.toLocaleString('en-IN'))  // 1,00,00,00,00,000


//**+++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++**//


console.log(Math)   // object [Math] {}

console.log(Math.abs(-5))            // 5
console.log(Math.round(4.6))         // 5
console.log(Math.ceil(4.9))          // 5
console.log(Math.floor(4.2))         // 4
console.log(Math.min(2,4,3,6,8,1))   // 1
console.log(Math.max(1,2,3,4,5,6,7))  // 7

console.log(Math.random())   // values ranges between 0-1  // 0.8057387339423121 // 0.07850972093202535

console.log(Math.random() * 10)   // 1.7817117302115415  // 0.9507812880399236

console.log((Math.random()* 10) + 1 )   // min value 1

console.log( Math.floor(Math.random() * 10 ) +1 )   // integer value >= 1

const maxi = 30
const mini = 10  

console.log(Math.floor( Math.random() * (maxi - mini + 1)) + mini)  // ranges int value b/w 10-30


