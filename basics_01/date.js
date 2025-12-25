const myDate = new Date()
console.log(myDate)          // 2025-12-25T17:16:24.963Z

console.log(typeof myDate)   // object

console.log(myDate.toLocaleDateString())       // 12/25/2025
console.log(myDate.toLocaleTimeString())       // 5:21:10 PM
console.log(myDate.toLocaleString())           //  12/25/2025, 5:24:19 PM


const myCreatedDate = new Date(2025, 0, 26)

console.log(myCreatedDate.toDateString())     // Sun Jan 26 2025



const date = new Date("2025-12-26")

console.log(date.toDateString())          // Fri Dec 26 2025


let myTimeStamp =  Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log( Math.floor( Date.now()/1000 ))


let newdate = new Date()
console.log(newdate.getDate())
console.log(newdate.getTime())
console.log(newdate.getMonth())
