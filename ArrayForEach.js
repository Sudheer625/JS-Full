// array.forEach() = executes a provided callback function 
// once for each array element

let students = ["sai","naga","sudheer"];
students.forEach(cap);
students.forEach(print);
function cap(element,index,array)
{
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element)
{
  console.log(element);
}