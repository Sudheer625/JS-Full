/*
map()
* accepts a call back 
* applies that function to each element of array 
* returns a new array
*/

/*
const num = [1,2,3,4,5,6]

const squares = num.map(square);

const cube = num.map(cubes);

console.log(squares);

console.log(cube);
function square(element)
{
  return Math.pow(element,2);
}

function cubes(element)
{
  return Math.pow(element,3);
}
*/


/*
const students = ["sandy","david","john"];

function upper(element)
{
  return element.toUpperCase();
}


const stuupr = console.log(students.map(upper));
*/



const dates = ["2024-08-30"];
const replace = dates.map(format);

console.log(replace);

function format(element)
{
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}