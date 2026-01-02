// scopes means {} but with if/ else condition, function, loops

var a = 2   // globally declared 'a' variable

if(true){              
    const b = 3
    let c = 4
    a = 5
    console.log(b)
    console.log(c)
    console.log("inner:", a)
}

// console.log(b)   // undefined
// console.log(c)   //  undefined
console.log(a)      // 5



// nested scopes

function one(){
   
    const value = 5
    
    function two(){
       
        console.log(value)
        const price = 100
    }
    // console.log(price)
    two()
}

// console.log(value)

one()



//++++++++++++++++++++interesting++++++++++++++++++++++++//



console.log(addOne( 6 ))  // 7

function addOne(num){

        return num + 1
   
}

console.log(addOne( 5 ))  // 6



// console.log(addTwo( 6 ))    // Cannot access 'addTwo' before initialization ( Hoisting )

const addTwo = function (num){

       return num + 2
}

console.log(addTwo( 6 ))  // 8



