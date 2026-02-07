

// class User{
    
//     constructor(username , email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//        return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const UserOne = new User("pushpendra", "pkve2972@gmail.com", 123456)

// console.log(UserOne)

// console.log(UserOne.encryptPassword())

// console.log(UserOne.changeUsername())


//  OUTPUT=>

// User {
//   username: 'pushpendra',
//   email: 'pkve2972@gmail.com',
//   password: 123456
//  }
//  123456abc
//  PUSHPENDRA



// behind the scene 


function User(username , email, password){
      this.username = username
      this.email = email 
      this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
   return `${this.username.toUpperCase()}`
}


const UserOne = new User("chai", "chai344@gmail.com", 79864)

console.log(UserOne)

console.log(UserOne.encryptPassword())

console.log(UserOne.changeUsername())

// OUTPUT =>

// User { username: 'chai', email: 'chai344@gmail.com', password: 79864 }
//   79864abc
//   CHAI