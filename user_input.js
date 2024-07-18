// User Input in two ways 

// Easy Way With a window prompt 

//let UserName = window.prompt("What's Your Name ?");
//console.log(UserName);

let UserName;
document.getElementById("myButton").onclick = function(){
    UserName = document.getElementById("myText").value;
    console.log(UserName);
    document.getElementById("myLabel").innerHTML = "Hello !"+UserName;
}