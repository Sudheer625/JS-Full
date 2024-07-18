let a=[100,60,40,23,12,90,85];
// desc order sort

//a = a.sort(desc); // sorting the array and desc as callback
a = a.sort(asc);    // sorting the array and asc as callback
a.forEach(print)    // printing the array using foreach
function desc(x,y)
{
  return y-x;
}

function asc(x,y)
{
  return x-y;
}
function print(ele)
{
  console.log(ele);
}