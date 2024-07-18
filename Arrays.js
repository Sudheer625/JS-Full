// array = think it as a variable
//         that  can store multiple values

let fruits = ["apple","banana","orange"];
fruits[0] = "raspberry";    // changing elements in fruits array
fruits.push("lemon");   // adding new values into the array at last index place 
fruits.pop(3);  // remove elements from the array
fruits.unshift("mango");    // add a element at the initial position of the array
fruits.shift(); // it removes the inital element in the array 

let len = fruits.length;    // calculating the length of an array
console.log(len);
let index = fruits.indexOf("kiwi"); // undefined
console.log(fruits);
console.log(fruits[2]);
console.log(fruits[3]); // undefined