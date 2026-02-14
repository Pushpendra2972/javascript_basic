

let myName = "pushpendra    "

// console.log(myName.truelength)





// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",
    
//     getSpiderPower: function(){
//         console.log(`spidy power ${this.spiderman}`)
//     }
// }

// // heroPower.getSpiderPower()


// Object.prototype.pkverma = function(){
//     console.log(`pushpendra is present in all objects `)
// }

// // heroPower.pkverma()
// myHeros.pkverma()



// Array.prototype.print = function(){
//     console.log(`hellow user , how are you? `)
// }

// myHeros.print()
// // heroPower.print()   // not able to access







// Inheritance


// const user = {
//     name : "shyam",
//     email: "pkve2973@gmail.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false,
   
// }

// const TASupport = {
//     makeAssignment :"js assignment",
//     fullTimeSupport : true,
//     __proto__: TeachingSupport   // 1st way

// }


// Teacher.__proto__ = user    // 2nd way

// Object.setPrototypeOf(TeachingSupport, Teacher)   // 3rd way



// console.log(TASupport.isAvailable)
// console.log(Teacher.name)




let anotherUserName = "Mysterious    "

String.prototype.trueLength = function(name){
    console.log(`${this}`)
    console.log(`${name}`)
    console.log(`true length of string is : ${this.trim().length}`)
}

anotherUserName.trueLength("hero  ")

