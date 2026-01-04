

//++++++++++++++++ CONDITION ++++++++++++++++//

// ++++ if , else as c++



// ++++ nulish coalescing operator (??)   // only in null and undefined 

let x, y;

x = null ?? 10

console.log(x)

y = undefined ?? 12

console.log(y)




// ++++ switch

const day = 4

switch (day) {
    case 1:  console.log("day one")
        break;

    case 2:  console.log("day two")
        break;

    case 3:  console.log("day three")
        break;

    case 4:  console.log("day four")
        break;

    case 5:  console.log("day five")
       break;

    default: console.log("i don't know day")
        break;                                        
}



//+++++++++++++++++ LOOPS ++++++++++++++++++++++//


// ++++ for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
    
}


// ++++ while loop

let n = 1

while (n < 10) {
    console.log(n)
    n++
}


// ++++ do while loop

let m = 100

do {
    console.log(m)
    
} while (m < 80);




// ++++ forof   // in c++ for(auto it: mpp) type for taking entries
                // not aplicable on object


const mpp = new Map()
mpp.set("1", "hero")
mpp.set("2", "heroine")
mpp.set("3", "joker")
mpp.set("4", "magician")


for (const it of mpp) {
    console.log(it)
}

// for (const it of mpp) {
//     console.log(it[1])            // values
// }

// for (const it of mpp) {
//      console.log(it[0])            // keys
// }




// const colour = {
//     1: "red",
//     2: "blue",
//     3: "green",
//     4: "balck"
// }

// for (const it of colour) {
//     console.log(it)                      // colour (object) is not iterable
// }




// ++++ forin     // for taking only keys

const arr = [1, 2, 3, 4, 5, 6]


for (const it in arr) {
    console.log(it)
    
}  



const earth = {
    "one": "soil",
    "two": "water",
    "three": "fire",
    "four": "sky",
    "five": "air"
}

for (const it in earth) {
   console.log(it)
}

// for (const it in earth) {
//     console.log(earth[it])
// }




// ++++ foreach      // call back function inside condition



const array = [100, 200, 300, 400, 500]

//  array.forEach(function (item){
//     console.log(item)
//  });


// array.forEach( (item) => {
//        console.log(item)
// });


function printMe(item){
    console.log(item)
}

array.forEach(printMe);