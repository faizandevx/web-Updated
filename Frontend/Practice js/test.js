const accountId = 144553
let accountEmail = "fiazan@google.com"
var accountPassword = "12345"
accountCity = "Sahiwal"
let accountState;

//    accountId = 2 Not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Lahore"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

