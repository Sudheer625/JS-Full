/*
//  looping through an array.
let prices = [10,20,30,40,50];

for (let i=0;i<prices.length;i+=1)
{
    console.log(prices[i]);
}
*/

// sorting an array of strings.
/*
let snacks = ["panipuri","chat","vadapaav","muri-mixture"];
//snacks = snacks.sort(); // using sort method we can sort the strings in alphabetical order.
snacks = snacks.sort().reverse();   // reverse sorting 
for(let s of snacks)    // by using of keyword we can iterate arrays
{
    console.log(s);
}
*/

// 2D Arrays in javascript 
let colors = ["blue","black","yellow","pink","green"];
let veggies = ["tomato","potato","brocolli","capsicum"];
let meaties = ["fish","chicken","beef","shrimps"];

let list = [colors,veggies,meaties];    


console.log(list[2][1]);
for(let li of list)
{
    
        for(let item of list)
        {
            console.log(item);
        }
}