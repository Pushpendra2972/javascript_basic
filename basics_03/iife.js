// IIFE: Immediately Invoked Function Expression
// to prevent pollution from global scope inside the function


( function chai(){
      
    console.log("looking good")

} ) ();                               // semicolon important if you are making another IIFE

// chai()         




( code = function(){
   
    console.log("looking phenomenal")

} ) ();

// code()




( () => {
    
    console.log("looking gorgeous")

} ) ();





( (word) => {
   
    console.log( `looking ${word}`)

} ) ("pretty");


