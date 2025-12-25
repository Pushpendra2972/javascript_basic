// const myArray = [1, 2, 3, 4, 5]

// console.log(myArray)

const myArray = new Array(1, 2, 3, 4, 5, 6)

console.log(myArray)     // [ 1, 2, 3, 4, 5, 6 ]


console.log(myArray[0])       // 1
console.log(myArray.length)   // 6


myArray.push(7) 
myArray.push(8)
myArray.pop()

console.log(myArray)         // [ 1, 2, 3, 4, 5, 6, 7 ]



console.log(myArray.unshift(10))      // 8 updated length and adding element from the front of the array
console.log(myArray.unshift(11))      // 9

 console.log(myArray)           // [11, 10, 1, 2, 3, 4, 5, 6, 7 ]



 console.log(myArray.shift())    // 11 taking out front element

 console.log(myArray)         // [ 10, 1, 2, 3, 4, 5, 6, 7 ]



 //++++++++ Slice & Splice +++++++++//

 const arr = [0, 1, 2, 3, 4, 5, 6]

 console.log(arr.slice(1, 4))   // indx 1-3   // [1, 2, 3]
 console.log(arr)              // [0, 1, 2, 3, 4, 5, 6]
 
 console.log(arr.splice(1, 4))  // indx 1-4   // [1, 2, 3, 4]
 console.log(arr)              // [0, 5, 6]