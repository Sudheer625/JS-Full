/*
template literals :
defined with (`)
instead of double or single quotes 
allows embeded variables and expressions.
*/



//console.log("Hello !",UserName);
//console.log("You Have :",items,"items in your cart");
//console.log("Your Total is $ :",total);

/*
console.log(`Hello ! ${UserName}`);
console.log(`You Have : ${items}`);
console.log(`Your Total is $ ${total}`);
*/

// grouping total literals in a single variable
let UserName = "Sudheer General Stores";
let items = 10;
let total = 75;
let data = 
`Hello ! ${UserName}<br>
You Have : ${items}<br>
Your Total is $ ${total}<br>`;

//console.log(data);
document.getElementById("myId").innerHTML=data;
// working on codepen.io 
// 