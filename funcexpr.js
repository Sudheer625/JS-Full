/*
function expressions 
- it is a way to define a function as values or variables 
*/

/*
const hello = function()  // passing a func to a variable
{
  console.log("hello");
}
hello();  // calling variable
*/ 


/*
setTimeout(function() 
{
  console.log("hello");
},10000);     // passing a function into another function 
*/

const num = [1,2,3,4,5]



const sqr = num.map(function (element)
{
  return Math.pow(element,2);
}); // we are giving the callback(func) directly 

//console.log(sqr);

const cube = num.map(function(element)
{
  return Math.pow(element,3);
}
);

const even = num.filter(function(element)
{
  return element %2 == 0;
  // for odd - return element %2 !== 0;
}
)

console.log(`the result of even nums ${even}`);