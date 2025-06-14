const accountId = 144553
let accountEmail = "hammad@google"
var accountPassword = "12345"
accountCity = "Charsadda"

// accountId = 2 // not allowed

accountEmail = "hchc@google.com"
accountPassword = "21212121"
accountCity = "Peshawar"


console.log(accountId);

/*
prefer not use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
