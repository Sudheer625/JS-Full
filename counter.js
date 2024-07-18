let count = 0;

document.getElementById("Decrease").onclick = function(){
    count -= 1;
    document.getElementById("Label1").innerHTML = count;
}

document.getElementById("Reset").onclick = function(){
    count = 0;
    document.getElementById("Label1").innerHTML = count;
}

document.getElementById("Increase").onclick = function(){
    count += 1;
    document.getElementById("Label1").innerHTML = count;
}