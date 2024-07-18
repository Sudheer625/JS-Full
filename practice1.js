let a;
let b;
let c;
/*  window prompt method !
a = window.prompt("enter side a :");
a = Number(a);

b = window.prompt("enter side b :");
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log("side c :",c);
*/

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("l3").innerHTML = "Side C :"+ c;
    
}