// definition: promise is a object that represent eventual completion or failure of 
// an asynchronus operation and it's output 




// it has three phase  => (1): pending , (2): fulfilled , (3): rejection


//????????????????????????????? RESOLVE & REJECT  ???????????????????????????????????//



// const myPromise = new Promise(function(resolve, reject){

//    setTimeout(function(){

//     console.log(" async task is commpleted ")

//      resolve()

    
//     } , 1000)

// })

// myPromise.then(function(user){
     
//     console.log("promise consumed")
// })








// const newPromiseOne = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         resolve({user: "pushpa", password: "pkve2972"})
//     }, 1000)

// })

// newPromiseOne.then(function(parameter){
//     console.log(parameter)
// })








// const newPromiseTwo = new Promise(function(resolve , reject){
//     setTimeout(function(){
         
//         let error = true

//         if (!error) {
//             resolve()
            
//         } else {
//             reject()
//         }

//     }, 1000)

// })

// newPromiseTwo.then(function(parameter){

//    console.log("hellow mr")
    
// }).
// catch(function(){
   
//     console.log(" something went wrong ")
// })








// new Promise(function(resolve, reject){
//      const flag = true

//    setTimeout(function(){
       
//     if(!flag){
//         resolve({username: "pkumar" , age: "22" })
        
//      }else{
//           reject("ERROR OCCURRED")
//      }

//    }, 1000)

// }).then(function(user){
      
//     console.log(user)

//     return user.username

// }).then(function(username){   // chaining 
   
//     console.log(username)

// }).catch(function(data){
    
//     console.log(data)


// })







//????????????????????????????? ASYNC & AWAIT  ????????????????????????????????


// const newPromisefour = new Promise(function(resolve , reject){
//     setTimeout(function(){
         
//         let error = true

//         if (!error) {
//             resolve("async is called")
            
//         } else {
//             reject("Error")
//         }

//     }, 1000)

// })


// async function fourthPromise(){
//       try {
//           const response = await newPromisefour
//            console.log(response)

//       } catch (e) {
//           console.log(e)
//       }
// }


// fourthPromise()




async function getAllUsers(){
    
         try {
                 const response = await  fetch('https://jsonplaceholder.typicode.com/users')

                 const data =  await response.json()

                 console.log(data)  

         } catch (error) {
              
            console.log("ERROR")
         }
        
    
}

getAllUsers()






