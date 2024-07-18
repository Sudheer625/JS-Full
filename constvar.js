const pi = 3.14;
let radius;
let circumfrence;
//pi = 320 ;    we can't change the value of const variable.
radius = window.prompt("enter the radius :");
radius = Number(radius);

circumfrence = 2 * pi * radius;
console.log("The Circumfrence of the circle is :",circumfrence);