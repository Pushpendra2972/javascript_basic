

// const coding = [10, 20, 30, 40, 50, 60]

// const values = coding.forEach( (nums) => {
//      console.log(nums)
//      return nums                    // does not return 
// });

// console.log(values)      // undefined




// ++++filter 
// return values if your call back function is return type function

const nums = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const values = nums.filter( (num) =>(num > 20) )

console.log(values)    




const books = [
    {title: "book one", genre: "science", publish: 1990, edition: 1995 },
    {title: "book two", genre: "fiction", publish: 2000, edition: 2005 },
    {title: "book three", genre: "history", publish: 1960, edition: 1965 },
    {title: "book four", genre: "science", publish: 1970, edition: 1975 },
    {title: "book five", genre: "non-fiction", publish: 1992, edition: 1997 },
    {title: "book six", genre: "history", publish: 1975, edition: 1978 },
    {title: "book seven", genre: "maths", publish: 1983, edition: 1985 },
    {title: "book eight", genre: "maths", publish: 1952, edition: 1958 },
    {title: "book nine", genre: "history", publish: 1989, edition: 1993 },
]

const userBook = books.filter( (bk) => (bk.genre === "history"))

console.log(userBook)





// ++++ map 
// like filter except true false support


const myNums = [1, 2, 3, 4, 5, 6, 7]

const userNums = myNums.map( (num) => ( num + 10))

console.log(userNums)





// chaining

const newNums = myNums
                   .map( (num) => ( num * 10 ))
                   .map( (num) => ( num + 5 ))
                   .filter( (num) => ( num > 30 ))


console.log(newNums)






// ++++ reduce


const brr = [1, 2, 3, 4, 5]

const total_sum = brr.reduce( (acc, curr_val) => {
   
    // console.log(`acc: ${acc}, curr_val: ${curr_val}`)
    return acc + curr_val

} , 0)


console.log(total_sum)    // 15