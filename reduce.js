/*
array.reduce() -> it will reduces an array into a single element 
*/
let cost = [50,100,150,500];

let total = cost.reduce(tot);
console.log(`your tot amount is  ${total} /- `);

function tot(total,element)
{
  return total + element;
}