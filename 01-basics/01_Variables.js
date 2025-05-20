const accountId = 144553
let accountEmail = "op4pcc@gmail.com"
var accountPassword = "12345"
accountCity = "Rajgir"
let accountState;
var accountDistrict;
//function testVar() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x); // ✅ 10 (accessible outside the if block!)
// }
// testVar();
// Even though x is declared inside the if block, it is still accessible outside it because var ignores block scope.

// accountId = 2 // not allowed
accountEmail = "om4pcc@gmail.com"
accountPassword = "12345678"
accountCity = "Nalanda"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountEmail, accountPassword, accountCity, accountState, accountDistrict])
