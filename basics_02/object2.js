const car = new Object()   // singletone
console.log(car)


const bus = {             // not singletone
    colour: "Red",
    brand: "Naveen",
    driver: "ramu"

}
console.log(bus)


// netsed

const obj = {
    obj1: {
        obj2: {
            obj3: {
                name: "PKVERMA"
            }
        }
    }
}
console.log(obj.obj1.obj2.obj3.name)



// merge 

const obj4 = {1: "a", 2: "b", 3: "c"}
const obj5 = {4: "d", 5: "e", 6: "f"}

const obj6 = Object.assign( obj4, obj5 )            // target, source
// const obj6 = Object.assign( {}, obj4, obj5 )
// const obj6 = {...obj4, ...obj5}

console.log(obj6)



// method

console.log(Object.keys(bus))
console.log(Object.values(bus))
console.log(Object.entries(bus))




// destructuring of object


const {colour} = bus
console.log(colour)       // now no need (.) operator

const {colour: col} = bus   // just rename 'key'
console.log(col)



// json

{
    "name": "pk",         // key and both values written as string
    "sem": "5th"
}

[
    {},
    {},
    {},
]