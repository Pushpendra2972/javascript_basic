//   ## part of object literal 

// (1): constructor function
// (2): prototypes
// (3): classes
// (4): instances



// ## 4 pillars

// (1): abstaction   => hide internal mechanism 
// (2): encapsulation  => binding data method
// (3): inheritance  => inherite proprties of parent by children
// (4): polymorphism  => reuse of same function






// const obj = {

//     username: "pkverma",
//     id: "pk2972",
//     password: "pkve2972",

//     print: function(){
//         console.log(`username: ${this.username}`)
//         console.log(this)
//     }
// }

// console.log(obj.username)
// console.log(obj.print())  // without this key word o/p : ReferenceError: username is not defined




function User(username, loginAccount, isLoggedIn){
    this.username = username
    this.loginAccount = loginAccount
    this.isLoggedIn = isLoggedIn

    return this
}


const userOne = new User("pushpendra ", 1234, "yes") // new keyword is used to create new instance
const userTwo = new User("pk", 4839, "no")  //without new keyword , here overwritting will happen


console.log(userOne)
// console.log(userTwo)






