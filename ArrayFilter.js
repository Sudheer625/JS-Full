// array.filter() = creates a new array with all elements
//                  that pass the test provided by a function 

let  ages=[18,18,20,34,56,19];
let adults = ages.filter(check);  // it filters the array as given condition and prints a new array.

adults.forEach(print);
function check(element)
{
  return element>18;
}

function print(element)
{
  console.log(element);
}