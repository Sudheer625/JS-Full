let UserName = "sudheergaming93@gmail.com";
let PassWord = "Sudheer101@";
let Authentication = true;

/*console.log(UserName);          // displaying in the console 
console.log(PassWord);
console.log(Authentication);    
*/

// inner_elements.html.getElementById(id="p1").innerHTML = changes ;
document.getElementById("p1").innerHTML = "Hello User!" +UserName;
document.getElementById("p2").innerHTML = "Your Previous Password !" +PassWord;
document.getElementById("p3").innerHTML = "Authentication Process :" +Authentication;