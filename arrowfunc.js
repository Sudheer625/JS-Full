/*
arrow function 
- used for simple functions 
- no need to use function keyword
- no need to use return keyword
- (parameters) => code
*/

/*
const hello = () => console.log("hello");
hello();
*/

/*
const greet = (name)=> console.log(`hello MR.${name}`);

greet("Sudheer");
*/

/*
const agecal = (name,age) =>
{
    console.log(`hello : ${name}`);
    console.log(`your age : ${age}`);
};

agecal("sudheer",20)
*/

//setTimeout(()=> console.log("hello"),10000);

const num = [5,3,7,9,14]

const sqr = num.map((element)=>Math.pow(element,2));
//console.log(sqr);

const even = num.filter((element)=> element%2==0);
//console.log(even);

const tot = num.reduce((ac,element)=> ac+element);
console.log(tot);