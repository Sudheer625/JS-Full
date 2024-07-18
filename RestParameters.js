// rest parameter   = it represents an indefnite number of parameters
// packs  arguments into array 

let a = 1;
let b = 4 ; 
let c  = 6;
let d = 5;
let e = 2 ;
console.log(sum(a,b,c,d,e,2));
// if we want to do sum for the above variables we have 4 different functions required
// by using rest parameters we can give infefnite number of parameters

function sum(...numbers)
{
  let total = 0;
  for(let number of numbers)
  {
    total += number;    //  adding each element of array to the variable total
  }
  return total
}

/*
if you wanna need any extra parameter in our sum function 
we dont need any changes in return  statement or anything else

so we use rest parameters(...)
to add no of arguments to the existing arguments we use rest parameters 
*/