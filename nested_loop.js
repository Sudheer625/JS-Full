let symbol = window.prompt("enter the symbol :");
let rows = window.prompt("enter the rows :");
let columns = window.prompt("enter the columns :");

for(let i = 1 ; i <= rows ; i+=1){
    for(let j=1 ; j <= columns ; j+=1){
            document.getElementById("rectangle").innerHTML += symbol;
    }
    document.getElementById("rectangle").innerHTML += "<br>";
}