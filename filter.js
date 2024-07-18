/*
array.filter()
it will generates a new array from the existing array 
*/

let ages = [19,18,17,23,22,90];
let adult = ages.filter(checkAge); // takes function as parameter (callback)

function checkAge(element)
{
  return element >= 18; // condition for filter array 
}

function disp(element)
{
  console.log(element); // displaying element 
}

adult.forEach(disp);  // using forEach loop to invoke a callback 