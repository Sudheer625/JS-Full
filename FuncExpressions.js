// function expression = function without a name (anonymous function)
//                       avoiding polluting the global scope with names
//                       just write the logic and forget about it.

const greet = function (){
  console.log("hello");
}

greet();


// increase and decrease counters
/*
    let count = 0;
    document.getElementById("increase").onclick = function(){
      count +=1;
      document.getElementById("counter").innerHTML=count;
    }
    document.getElementById("decrease").onclick = function(){
      count-=1;
      document.getElementById("counter").innerHTML = count;
    }
*/