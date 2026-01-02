// const user = {

//     username: "pushpendra",
//     price: "200",

//     message: function(){

//         console.log(`${ this.username }, is here`)
//         console.log(this)                               // print current context
//     }
// }
   
// user.message()
// user.username = "pk"
// user.message()

// console.log(this)               // {}  // nothing is there in current context





// function chai(){

//     const username = "ram"
//     console.log(this.username)   // undefined
//     console.log(this)            // many function it gives
// }

//  chai()



// const chai = function (){

//     const username = "ram"
//     console.log(this.username)   // undefined
//     console.log(this)            // many function it gives
// }

//  chai()




// const chai = () => {

//     const username = "ram"
//     console.log(this.username)   // undefined
//     console.log(this)            // {}
// }

//  chai()





// const chai = (num1, num2) => {
//     return num1 + num2
// }

// console.log(chai(2, 3))


const chai = (num1, num2) => (num1 + num2)

 console.log(chai(2, 3))


const code = (num1, num2) => ({username: "pk"})

console.log(code(2, 3))

