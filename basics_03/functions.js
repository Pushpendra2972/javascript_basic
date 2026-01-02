// no argument passed

function myName(){
    console.log("hello , welcome to function lecture")
}

myName()



// with argument

function print(num1, num2){
    console.log(num1 + num2)
}

print(1, 2)




// return type function

function findMaxValue(num1 , num2){
    return Math.max(num1, num2)
}

console.log(findMaxValue(5, 7))

const value = findMaxValue(5, 10)
console.log(value)



// when no argument is passed 


function yourName(name){
    return `my name is ${name}`
}

console.log(yourName())               // my name is undefined
console.log(yourName("Pushpa"))



// if / else


function loggedIn(name){
    if(name){
        console.log( `${name} is logged in`)
    }
    else{
        console.log(`please give me person name who is logged in`)
    }

}

console.log(loggedIn())
console.log(loggedIn("ram"))




// pasing multiple argument via one parameter

function Numbers(...num){
    return num
}

console.log(Numbers(100, 200, 300, 400))



// accesing object entries via function


function getObjectValues(obj){
    return obj.price
}

const course = {
    name: "english",
    price: "500"
}

console.log(getObjectValues(course))