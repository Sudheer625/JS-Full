/*
let UserId = "   somehow@outlook.com   "
let PhNo = "123-456-789";
console.log("User Id Length is :",UserId.length);
console.log("Req Index :",UserId.charAt(9));
console.log("Req Char Is :",UserId.indexOf("@"));
console.log("Trimmed ID :",UserId.trim());
console.log("Upper Case ID:",UserId.toUpperCase());
console.log("Lower Case ID :",UserId.toLowerCase());
console.log("Changed PhNo Type is :",PhNo.replaceAll("-",""));
*/

// string slicing (vimp concept)

let FullName = "Sai Naga Sudheer";
let FirstName;
let LastName;

/*
FirstName = FullName.slice(0,8);
console.log("Your First Name :",FirstName);

LastName = FullName.slice(9);
console.log("Your Last Name :",LastName);
*/


FirstName = FullName.slice(0, FullName.indexOf(" "));
LastName = FullName.slice(FullName.indexOf(" ") + 1);

console.log(FirstName);
console.log(LastName);