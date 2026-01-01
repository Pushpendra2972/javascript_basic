// singletone   //created by constructor

// objects literals

const mySym = Symbol("key")

const Myself = {
    name: "Pushpa",
    "full name": "Pushpendra Kumar Verma",
    college: "NIT Raipur",
    sem: "6th",
    branch: "electronics & communications",
    email: "pkvermaXXXX@gmail.com",
    [mySym]: "key1",                         // using symbol as key
}

console.log(Myself.name);
console.log(Myself["name"]);

// console.log(Myself.fullname);            // not allowed
console.log(Myself["full name"]);

console.log(Myself[mySym])         // key1

Myself.name = "pushpa fire"

console.log(Myself["name"])        // pushpa fire

// Object.freeze(Myself)                    // we can't further update key->values


Myself.greeting = function(){
    console.log("Namaste India")
}

console.log(Myself.greeting())     // Namste India
// console.log(Myself.greeting)       // [Function (anonymous)]



Myself.greeting2 = function(){
    console.log(` Namaste ${this.name} `)    // use 'this' for accessing all ele of object
}

console.log(Myself.greeting2())
