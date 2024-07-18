/*
forEach()
* method used to iterate over the elements of an array 
* and it will apply a callback (function) to each element
Syntax : array.forEach(callback);
*/

let num = [1,2,3,4,5,6]

/*num.forEach(display);   // call back 

function display(element)
{
  console.log(element);
}
*/

/*
num.forEach(double);

function double(element,index,array)
{
  console.log(array[index] = element * 2) ; 
}
*/

let courses = ["mongoDB","expressjs","reactjs","nodejs"];
courses.forEach(cap);
courses.forEach(display);

function cap(element,index,array)
{
  array[index] = element.toUpperCase();
}

function display(element)
{
    console.log(element);
}


