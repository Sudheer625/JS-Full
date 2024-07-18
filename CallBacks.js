// callback = a function passed as an argument to another function 
/*
ensure that the function is not going
to run before a task is completed
help us develop asynchronus code
(when one fun is wait for another fun)
it helps to avoid errors and potential problems
*/

sum(3,3,display);   // display is an function passed as an parameter 

function sum(x,y,call)
{
  let res = x+y;
  call(res);
}


function display(output)
{
  console.log(output);
}

/*
to run js file in cmd use this : 
node  filename.js
(node js must be installed in our pc )
*/