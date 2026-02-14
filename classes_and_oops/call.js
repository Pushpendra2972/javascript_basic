

function addUserName(password){
    this.password = password
    // console.log(password)
}


function user(username, emailId, password){
    this.username = username
    this.emailId = emailId
    
    // addUserName(password)  // ony call will happen

    addUserName.call(this, password) 

    // so here call is used to pass current context to another function through this keyword 

    
}


const UserDescription = new user("chai", "chai2972@gmail.com", 1234)

console.log(UserDescription)