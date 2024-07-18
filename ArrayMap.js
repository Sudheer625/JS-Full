// array.map()
/*
excecutes a provided call back function
once for each array element
and creates a new array
*/

let n = [4,5,6,7];  // array of numbers
let sqrs = n.map(sqr);  // using map function to create a new array using sqr function as a callback
let cubes = n.map(cube); // using cube func as call back
cubes.forEach(print); // print method as callback for square
sqrs.forEach(print);  // print method as callback for cube

function sqr(element)   // used to square the numbers array
{
  return Math.pow(element,2);
}

function print(element)  // used to print the elements
{
  console.log(element);   // printing element parameter
}

function cube(element)  // used to print the cubes of the number array
{
  return Math.pow(element,3);
}

// here element is any of the parameter to do the operations