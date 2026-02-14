
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}


class Teacher extends User {
    constructor(name, email, password){
        
        super(name)
        this.name = name 
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`a new course is added by ${this.username}`)
    }
}


const obj = new Teacher("pkverma", "pkve2972@gmail.com", 6434)

console.log(obj.logMe())
console.log(obj.addCourses())

console.log(obj)


// console.log(User === Teacher)
// console.log(obj instanceof Teacher)






