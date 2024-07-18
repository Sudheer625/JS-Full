// array.reduce() = reduces an array to a single value 

let cost = [15,34,20,18,99];
let tot = cost.reduce(check); // it reduces the array as a single value

console.log(`the total is $${tot}`);
function check(total,ele)
{
  return total+ele;
}