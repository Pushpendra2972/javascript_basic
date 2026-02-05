

// function print(num){
//     return num*5
// }

// print.val = 3

// console.log(print(10))   // 50
// console.log(print.val)   // 3
// console.log(print.prototype)   // {}

// // conclusion: everything is object



function createUser(username, score){
    this.useranme =  username 
    this.score = score*10
   
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}



const chai = new createUser("chai", 20)

chai.printMe()




/*


here's what happens behind the scenes when the new keyword
 is used:

 A new object is created: The new keyword initiates the 
 creation of a new javasvcript object.

 A prototype is linked: the newly created object gets linked 
 to the prototype property of the constructor function.
 this means that is has access to properties and methods defined
 on the constructor prototype.

 the constructor is called: the constructor function is 
 called with the specified arguments and this is bound to
 the newly created object. if no explicite return value is
 specified from the constructor. javascript assumes this 
 the newly created object , to be the intended return value.

 the new object is returned: after the constructor function
 has been called , if it doesn't return a non-primitve
 value (object, array, function, etc.) the newly created
 object is returned.


 */








