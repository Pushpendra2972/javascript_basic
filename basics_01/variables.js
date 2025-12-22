const accountId = 14453
let accountEmail = "pkverma2972@gmail.com"
var accountPassword = "1234"
accountCity = "Raipur"
let accountState;

// accountId = 2    // not allowed

accountEmail= "pkv2972"
accountPassword = "1234567"
accountCity = "Parpodi"

console.log(accountId);


/*
Pefer not to use var
beacuse of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])